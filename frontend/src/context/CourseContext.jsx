import { createContext, useState, useEffect } from "react"

export const CourseContext = createContext()

function CourseProvider({ children }) {

  const [enrolledCourses, setEnrolledCourses] = useState([])


  // useEffect(() => {

  //   const storedCourses =
  //     JSON.parse(localStorage.getItem("courses")) || [];

  //   setEnrolledCourses(storedCourses);

  // }, []);


  return (

    <CourseContext.Provider
      value={{
        enrolledCourses,
        setEnrolledCourses
      }}
    >

      {children}

    </CourseContext.Provider>
  )
}

export default CourseProvider