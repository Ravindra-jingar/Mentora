import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Button from "../components/ui/Button";
import CourseCard from "../components/CourseCard";
import EmptyState from "../components/ui/EmptyState";
import {getMyEnrollments, removeEnrollment} from "../services/courseService";
function Enrollments() {
const [savedCourses,setSavedCourses] =  useState([]);
const [error, setError] = useState("")
  async function removeCourse(id) {

  try {

    await removeEnrollment(id);

    setSavedCourses(
      savedCourses.filter(
        course => course._id !== id
      )
    );

  } catch (error) {

  setError(error.message);

  }
}
useEffect(() => {
  
  const fetchEnrollments =
    async () => {

      try {

        const data = await getMyEnrollments();
 
        setSavedCourses(data);

      } catch (error) {

         

      }

    };

  fetchEnrollments();

}, []);  
  
  return (

    <div className="min-h-screen bg-[#050816] p-6 place-items-center ">

      <h1 className="text-6xl text-bold font-bold
    text-white p-7">My Learniges</h1>

      <div className="enroll-container">

        {
          savedCourses.length > 0 ? (

            savedCourses.map((course, index) => (
                
                <CourseCard
              key={course._id}
              id={course.courseId._id}
              {...course.courseId}
           
  
             buttonText="Remove"
             buttonAction={() => removeCourse(course._id)}
            />
            ))

          ) : (

           <EmptyState title="NO coures in your learings" />

          )
        }

      </div>

    </div>
  )
}

export default Enrollments