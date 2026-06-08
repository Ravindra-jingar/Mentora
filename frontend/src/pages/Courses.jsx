import { useEffect, useMemo, useState } from "react";
import CourseCard from "../components/CourseCard";
import EmptyState from "../components/ui/EmptyState";
import Button from "../components/ui/Button";
import AuthInput from "../components/ui/AuthInput";
import { useContext } from "react"
import { CourseContext } from "../context/CourseContext"
import { toast } from "react-toastify"
import Spinner from "../components/ui/Spinner";
import {getStudents} from "../services/studentService";
import { getCourses } from "../services/courseService";

import { enrollCourse } from "../services/courseService";
function Courses() {
  const [courses, setCourses] = useState([]);
  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const {setEnrolledCourses} = useContext(CourseContext)

  const [search, setSearch] = useState("");
 
async function handleEnroll(props) {

  try {

    await enrollCourse(
      props._id
    );

    toast.success(
      "Enrollment Successful"
    );

  } catch (error) {

    toast.error(
      error.message
    );

  }
}

 useEffect(() => {
    const fatchStudents = async () => {
      try {
        const data = await getStudents();
        setStudent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fatchStudents();
  },[])

  // Fetch Courses
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
  }, []);

  // Filter Courses
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
 
      const searchText = search.toLowerCase();

      return (
        course.title.toLowerCase().includes(searchText) ||
        course.price.toString().includes(searchText)
      );
    });
  }, [courses, search]);

  if (loading) {
    return <Spinner/>
  }

  // Error State
  if (error) {
    return (
      <EmptyState
        className="min-h-screen"
        title={error}
      />
    );
  }

  // Empty Courses
  if (courses.length === 0) {
    return (
      <EmptyState
        className="min-h-screen"
        title="No Courses Available"
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#050816] p-6">
      
      {/* Search Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        
        <AuthInput
          type="text"
          placeholder="Search Course"
          showLabel={false}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-14"
          classMain="w-full md:w-[420px]"
        />
      </div>

      {/* Courses Grid */}
      {filteredCourses.length === 0 ? (
        <EmptyState title="No Courses Match Your Search" />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {filteredCourses.map((course) => (
            
            <CourseCard
              key={course._id}
              id={course._id}
           
              {...course}
  buttonText="Enroll"
  buttonAction={() => handleEnroll(course)}

            />
          ))
          }
        </div>
      )}
    </div>
  );
}

export default Courses;