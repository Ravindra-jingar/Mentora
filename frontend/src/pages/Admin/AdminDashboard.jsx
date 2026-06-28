import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Courses from "../Courses"
import StatsCard from "../../components/Admin/StatsCard"
import {  useMemo} from "react";
import { CourseContext } from "../../context/CourseContext";
import StudentsGrowthChart from "../../components/Charts/StudentsGrowthChart"
import CoursePopularityChart from "../../components/Charts/CoursePopularityChart"
import {
  BookOpen,
  Users,
  Wallet,
  GraduationCap
} from "lucide-react";
import { getCourses, getAllEnrollments ,getChartsData} from "../../services/courseService";
import { getStudents } from "../../services/studentService";
import  Spinner  from "../../components/ui/Spinner.jsx"
function AdminDashboard() {
  
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState("")
 const [courses, setCourses] = useState([])
 const [students, setStudents] = useState([])
 const [enrolledCourses, setEnrolledCourses] = useState([])
 
 const [studentGrowth, setStudentGrowth] = useState([]);
  const [coursePopularity, setCoursePopularity] = useState([]);

  useEffect(() => {
    const fetchCharts = async () => {
      try {
        const data = await getChartsData();

        setStudentGrowth(data.studentGrowth);
        setCoursePopularity(data.coursePopularity);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCharts();
  }, []);

 useEffect(() => {
   
       const fetchData =
         async () => {
   
           const data = await getAllEnrollments();
           setEnrolledCourses(data);
         };
   
       fetchData();
   
     }, []);

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
  
useEffect(() => {
   
   const fetchStudents = async () => {
    try {
      setLoading(true);

      const data = await getStudents();

      setStudents(data);

    } catch (error) {
      setError(error.message);

    } finally {
      setLoading(false);
    }
  };
    fetchStudents();
  }, [])

  if (loading) {
  return <Spinner />;
}

const totalCourses = courses.length

const totalEnrollments =  enrolledCourses.length

const totalStudents =  students.length

const recentEnrollments = enrolledCourses.slice(0, 5)

const totalRevenue  = enrolledCourses.reduce((acc, item)=>{
  const price = Number ( item?.courseId?.price?.replace(/[^0-9]/g, "") || 0)
  return acc + price
},0)

  return (
<div className="space-y-8 p-6 text-white min-h-screen
   bg-[#020817]">
<div className="mb-8">

   <h1 className="
      text-4xl
      font-bold
   ">
      Welcome back, Admin 👋
   </h1>

   <p className="
      text-slate-400
      mt-2
   ">
      Here's what's happening today.
   </p>

</div>
   {/* Top Cards */}
   <div className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-4
      gap-6
   ">

     <StatsCard
   title="Total Courses"
   value={totalCourses}
   growth="+2 this week"
   icon={<BookOpen size={28} />}
   iconBg="
      bg-orange-500/20
      text-orange-400
   "
/>

<StatsCard
   title="Total Students"
   value={totalStudents}
   growth="+18 this week"
   icon={<Users size={28} />}
   iconBg="
      bg-blue-500/20
      text-blue-400
   "
/>

<StatsCard
   title="Enrollments"
   value={totalEnrollments}
   growth="+25 this week"
   icon={<GraduationCap size={28} />}
   iconBg="
      bg-purple-500/20
      text-purple-400
   "
/>

<StatsCard
   title="Revenue"
   value={"₹" +  totalRevenue }
   growth="+12% this week"
   icon={<Wallet size={28} />}
   iconBg="
      bg-green-500/20
      text-green-400
   "
/>
   </div>
  <div className="flex w-full  grid
            grid-cols-1
            sm:grid-cols-1
            lg:grid-cols-2
            gap-6">
   <StudentsGrowthChart data={studentGrowth} />
   <CoursePopularityChart data={coursePopularity} />

   </div>
<div className="text-2xl
        font-bold
        text-white">Recent Enrollments</div>
<div className="
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        overflow-hidden
      ">

        <table className="w-full">

          {/* Head */}

          <thead className="
            bg-slate-800
            text-slate-300
          ">

            <tr>

              <th className="
                text-left
                px-6
                py-4
              ">
                Student
              </th>

              <th className="
                text-left
                px-6
                py-4
              ">
                Course
              </th>

             

              <th className="
                text-left
                px-6
                py-4
              ">
                Status
              </th>


            </tr>

          </thead>

          {/* Body */}

          <tbody>

            {
              recentEnrollments.map((item) => (

                <tr
                  key={item._id}
                  className="
                    border-t
                    border-slate-800
                    hover:bg-slate-800/40
                    transition-all
                  "
                >

                  {/* Student */}

                  <td className="
                    px-6
                    py-4
                  ">

                    <div className="
                      flex
                      items-center
                      gap-3
                    ">

                      <img
                        src={
                          // "https://i.pravatar.cc/100"
                           "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-1024.png"
                        }
                        alt={
                          item.userId?.name
                        }
                        className="
                          w-11
                          h-11
                          rounded-full
                          object-cover
                        "
                      />

                      <div>

                        <h3 className="
                          font-medium
                        ">
                          {item.userId?.name}
                        </h3>

                        <p className="
                          text-sm
                          text-slate-400
                        ">
                          {item.userId?.email}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Course */}

                  <td className="
                    px-6
                    py-4
                  ">

                    <div className="flex items-center gap-3">

                      <img
                        src={item.courseId?.image || "https://img.freepik.com/premium-vector/modern-design-concept-no-image-found-design_637684-228.jpg?w=2000"}
                        alt={item.courseId?.title}
                        className="
                          w-14
                          h-10
                          rounded-lg
                          object-cover
                        "
                      />

                      <div>

                        <h1 className="font-medium">
                          {item.courseId?.title}
                        </h1>

                        <p className="
                          text-sm
                          text-slate-400
                        ">
                          {item.courseId?.instructor}
                        </p>

                      </div>

                    </div>

                  </td>
                 
                  {/* Status */}

                  <td className="
                    px-6
                    py-4
                  ">

                    <span className={`
                      px-4
                      py-1
                      rounded-full
                      text-sm
                      font-medium
                     
                    `}>
                      {item.status}
                    </span>

                  </td>

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>
</div>
    )}

export default AdminDashboard