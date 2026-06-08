require("dotenv").config()
const jwt =  require("jsonwebtoken");
const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const app = express()
const bcrypt = require("bcrypt")
const Course = require("./models/Course")
const User = require("./models/User")
const { verifyToken} = require("./middlewares/authMiddleware")
const { isAdmin } = require("./middlewares/adminmiddleware")
const Enrollment = require("./models/Enrollment");
app.use(express.json()) //Without this:backend cannot read JSON data
app.use(cors())


mongoose.connect(process.env.DB_URL)
  .then(() => {

    console.log("MongoDB Connected")

  })
  .catch((err) => {
     console.log("MongoDB connection error:", err)
  })



app.post("/courses", verifyToken,
  isAdmin, async (req, res) => {
  try {


    const newCourse = new Course(req.body);

    await newCourse.save();

    res.json({
      message: "Course Saved",
      course: newCourse
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

app.get("/", (req, res) => {

  res.send("Backend Running")

})

app.put("/courses/:id",verifyToken,
  isAdmin, async (req, res) => {

  try {

    const updatedCourse = await Course.findByIdAndUpdate(

      req.params.id,

      req.body,

     { returnDocument: "after" }

    )

    res.json(updatedCourse)

  } catch (error) {
    
    res.status(500).json({
      message: "Update Failed"
    })

  }

})

app.get("/courses", async (req, res) => {

  try {

    const courses = await Course.find()

    res.json(courses)

  } catch (error) {

    res.status(500).json({
      message: "Error Fetching Courses"
    })

  }

})
//for registring

app.post("/register", async (req, res) =>{
      try{
        const { name, email, password } = req.body

        const existingUser = await User.findOne({ email})

        if(existingUser) {
          return res.status(400).json({message: "User already exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
          name,
          email,
          password:hashedPassword
        })

        await newUser.save()

        res.json({
          message: "User Registered"
        })
       }
       catch(error){
        res.status(500).json({
          message: "Error registering user"
        })
       }
})

app.get("/students",

  async (req, res) => {

    try {

      const students =
        await User.find({ role: "user" });

      res.json(students)

    }

    catch(error) {

      res.status(500).json({

        message:
          "Error Fetching Students"

      })

    }

})

app.delete(
  "/students/:id",
  verifyToken,
  isAdmin,
  async (req, res) => {

    const { id } = req.params;

    await Enrollment.deleteMany({
      userId: req.params.id,
    });

    await User.findByIdAndDelete(id);

    res.json({
      message:
        "Student deleted successfully",
    });
  }
);
app.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {

      return res.status(400).json({
        message: "User Not Found"
      })

    }

    const isMatch =
      await bcrypt.compare(password, user.password)

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid Password"
      })

    }
     const token = jwt.sign(
  {
    id: user._id,
    role: user.role,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "7d",
  }
);
    res.json({
      message: "Login Successful",
      token,
      user: {
        
        name: user.name,
    email: user.email,
    role: user.role

  }
    })

  }

  catch (error) {
    res.status(500).json({
      message: "Login Failed"
    })

  }

})

//course details pagae server
app.get("/courses/:id", async(req, res) => {

  try {

    const course =
      await Course.findById(req.params.id)

    

    res.json(course)

  }

  catch(error) {

    res.status(500).json({
      message: "Error Fetching Course"
    })

  }

})
app.get("/courses-details/:id", async (req, res) => {
  try {
  
   const course = await Course.findById(req.params.id);
   
  res.json(course);

  
  } catch (error) {
    res.status(500).json({
      message:"error fetching course details"
    })
  }
  

});

//admin dashbord delete course
app.delete("/courses/:id",
 verifyToken,
  isAdmin,
  async (req, res) => {

    try {

    await Course.findByIdAndDelete(
        req.params.id
      )



      res.json({
        message: "Course Deleted"
      })

    }

    catch (error) {
 res.status(500).json({
      message:"error fetching course details"
    })
    }

})


//enrollments

app.post(
  "/enroll",
  verifyToken,
  async (req, res) => {
     
    try {

      const { courseId } = req.body;

      const existingEnrollment =
        await Enrollment.findOne({
          userId: req.user.id,
          courseId,
        });
      
      if (existingEnrollment) {
        return res.status(400).json({
          message:
            "Course Already Enrolled",
        });
      }

      const enrollment =
        new Enrollment({
          userId: req.user.id,
          courseId,
        });

      await enrollment.save();

      res.json({
        message:
          "Enrollment Successful",
        enrollment,
      });

    } catch (error) {

      res.status(500).json({
        message:
          "Enrollment Failed",
      });

    }
  }
);
app.get(
  "/enrollments",
  verifyToken,
  async (req, res) => {
 
    try {

      const enrollments =
        await Enrollment.find({
          userId: req.user.id,
        })
          .populate("courseId")
          .populate("userId");

      res.json(
        enrollments
      );

    } catch (error) {


      res.status(500).json({
        message:
          "Error Fetching Enrollments",
      });

    }

  }
);
app.delete(
  "/enrollments/:id",
  verifyToken,
  async (req, res) => {
    try {

      const enrollment =
        await Enrollment.findById(
          req.params.id
        );

      if (!enrollment) {
        return res.status(404).json({
          message: "Enrollment not found",
        });
      }

      if (
        enrollment.userId.toString() !==
        req.user.id
      ) {
        return res.status(403).json({
          message: "Unauthorized",
        });
      }

      await Enrollment.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message: "Enrollment removed",
      });

    } catch (error) {

      res.status(500).json({
        message: "Delete failed",
      });

    }
  }
);

app.get(
 
  "/admin/enrollments",
  verifyToken,
  isAdmin,
  async (req, res) => {
   
    const enrollments =
      await Enrollment.find()
        .populate("userId")
        .populate("courseId");

    res.json(enrollments);

  }
);

//charts data
app.get(
  "/admin/charts",
  verifyToken,
  isAdmin,
  async (req, res) => {

    try {

      // Students Growth

      const students = await User.find({
        role: "user",
      }).sort({ createdAt: 1 });

      let total = 0;

      const studentGrowth = students.map(
        (student) => {
          total++;

          return {
            day: new Date(
              student.createdAt
            ).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
            }),
            students: total,
          };
        }
      );

      // Course Popularity

      const enrollments =
        await Enrollment.find()
          .populate("courseId");

      const courseMap = {};

      enrollments.forEach((item) => {

        const courseName =
          item.courseId?.title;

        if (!courseName) return;

        courseMap[courseName] =
          (courseMap[courseName] || 0) + 1;

      });

      const coursePopularity =
        Object.entries(courseMap).map(
          ([name, value]) => ({
            name,
            value,
          })
        );

      res.json({
        studentGrowth,
        coursePopularity,
      });

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }
  }
);
app.listen(process.env.PORT, () => {

 console.log(`Server running on port ${process.env.PORT}`)

})