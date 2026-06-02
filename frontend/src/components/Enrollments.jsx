import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Button from "../components/ui/Button";
import CourseCard from "../components/CourseCard";
import EmptyState from "../components/ui/EmptyState";
function Enrollments() {

  const [savedCourses, setSavedCourses] = useState(
    JSON.parse(localStorage.getItem("courses")) || []
  )

  function removeCourse(indexToRemove) {

    const updatedCourses = savedCourses.filter(
      (_, index) => index !== indexToRemove
    )
    

    setSavedCourses(updatedCourses)

    localStorage.setItem(
      "courses",
      JSON.stringify(updatedCourses)
    )
  }
  
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
          {...course.course}
           
  
             buttonText="Remove"
             buttonAction={() => removeCourse(index)}
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