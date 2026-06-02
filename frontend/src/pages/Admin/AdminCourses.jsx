import CourseCard  from "../../components/CourseCard"
import {useEffect, useState} from "react"
import Button from "../../components/ui/Button";
import EditCourse from "./EditCourse";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getCourses , deleteCourse} from "../../services/courseService";
import { toast } from "react-toastify"
function AdminCourses() {
   const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
    const navigate = useNavigate()

 function handleDelete(id) {
   
   const fetchCourse = async () => {
      try {
        setLoading(true);
  
        const data = await deleteCourse(id);

         setCourses((prevCourses) =>
      prevCourses.filter(
        (course) => course._id !== id
      )
    )
    toast.success("Course succesfully deleted");
      } catch (error) {
        toast.error(error.message);
  
      } finally {
        setLoading(false);
      }
    };
  
    fetchCourse();
}

const handleEdit = (id) => {

  navigate(`/edit-course/${id}`)
}
const [courses, setCourses] =
  useState([])

useEffect(() => {

   const fetchCourses = async () => {
    try {
      setLoading(true);

      const data = await getCourses();

      setCourses(data);

    } catch (error) {
      setError(error.message);

    } finally {
      setLoading(false);
    }
  };
    fetchCourses();


}, [])
    
    return (
        <div className="bg-gradient-to-b
        from-[#071028]
        to-[#020617] p-6 w-full min-h-screen">

      <div className="flex justify-between items-center mb-16">

        <h1 className="text-3xl p-6 font-bold text-white">
          Manage Courses
        </h1>

      </div>


      {
        courses.length === 0 ? (

          <h2 className="text-white">
            No Courses Found
          </h2>

        ) : (

          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
          >

            {
              courses.map((course) => (
               < CourseCard
               key={course._id}
              {...course}
         isAdmin={true}

  handleDelete={() =>
    handleDelete(course._id)
  }

  handleEdit={() =>
    handleEdit(course._id)
  }
/>

              ))
            }

          </div>

        )
      }

    </div>
  )
    
}


export default AdminCourses