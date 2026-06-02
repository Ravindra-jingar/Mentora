require("dotenv").config()
const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const app = express()
const bcrypt = require("bcrypt")
const Course = require("./models/Course")
const User = require("./models/User")
app.use(express.json()) //Without this:backend cannot read JSON data
app.use(cors())


mongoose.connect(process.env.DB_URL)
  .then(() => {

    console.log("MongoDB Connected")

  })
  .catch((err) => {

    console.log(err)
    //  process.exit(1);

  })


// app.post("/courses", async(req, res) => {

//   try {

//     const newCourse = new Course(req.body)

//     await newCourse.save()

//     res.json({
//       message: "Course Saved",
//       course: newCourse
//     })

//   } catch (error) {

//     res.status(500).json({
//       message: "Error Saving Course"
//     })

//   }

// })
app.post("/courses", async (req, res) => {
  try {

    console.log("Received:", req.body);

    const newCourse = new Course(req.body);

    await newCourse.save();

    res.json({
      message: "Course Saved",
      course: newCourse
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message
    });
  }
});
app.delete("/courses/:id", async(req, res) => {

 try {

    await Course.findByIdAndDelete(req.params.id)

    res.json({
      message: "Course Deleted"
    })

  } catch (error) {

    res.status(500).json({
      message: "Delete Failed"
    })

  }

})
app.get("/", (req, res) => {

  res.send("Backend Running")

})

app.put("/courses/:id", async (req, res) => {

  try {

    const updatedCourse = await Course.findByIdAndUpdate(

      req.params.id,

      req.body,

     { returnDocument: "after" }

    )

    res.json(updatedCourse)

  } catch (error) {
    console.log(error)
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
        await User.find()

      res.json(students)

    }

    catch(error) {

      console.log(error)

      res.status(500).json({

        message:
          "Error Fetching Students"

      })

    }

})
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

    res.json({
      message: "Login Successful",
      user: {

    name: user.name,
    email: user.email,
    role: user.role

  }
    })

  }

  catch (error) {

    console.log(error)

    res.status(500).json({
      message: "Login Failed"
    })

  }

})

//course details pagae server
app.get("/courses/:id", async(req, res) => {

  console.log(req.params.id)

  try {

    const course =
      await Course.findById(req.params.id)

    console.log(course)

    res.json(course)

  }

  catch(error) {

    console.log(error)

  }

})
app.get("/courses-details/:id", async (req, res) => {
  try {
  
   const course = await Course.findById(req.params.id);
   
  res.json(course);

  
  } catch (error) {
    console.log(error);
  }
  

});

//admin dashbord delete course
app.delete("/courses/:id",

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

      console.log(error)

    }

})


app.listen(process.env.PORT, () => {

  console.log("Server Started")

})