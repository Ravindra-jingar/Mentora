import { useEffect, useState, useContext } from "react"
import {
  Eye,
  Trash2,
  Search,
} from "lucide-react";
import { getMyEnrollments, getAllEnrollments } from "../../services/courseService"
import AuthInput from "../../components/ui/AuthInput";
import { CourseContext } from "../../context/CourseContext";
import {getStudents,deleteStudent } from "../../services/studentService";
import  Spinner  from "../../components/ui/Spinner.jsx";
import { toast } from "react-toastify";
function Students() {
  const[error, setError] = useState("")
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [students, setStudents]= useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = students.filter(
  (student) =>
    student.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
    student.email
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
);
  useEffect(() => {
   
       const fetchData =
         async () => {
   
           const data = await getAllEnrollments();
 
           setEnrolledCourses(data);
         };
   
       fetchData();
   
     }, []);


  useEffect(() => {
    const fetchStudent = async () => {
try{

  setLoading(true)
      const data = await getStudents()   
      setStudents(data)        
    }

catch(error){
       setError(error.message);  
}finally{
setLoading(false)
}
    }
     fetchStudent() 
    
  }, [])

 function handleDelete(id) {
    
    const fetchStudent = async () => {
       try {
         setLoading(true);
   
         const data = await deleteStudent(id);
 
          setStudents((prevStudents) =>
       prevStudents.filter(
         (student) => student._id !== id
       )
     )
     toast.success("Student succesfully deleted");
       } catch (error) {
         toast.error(error.message);
   
       } finally {
         setLoading(false);
       }
     };
   
     fetchStudent();
 }
 
  if (loading) {
    return <Spinner/> 
  }
  return (
     <div className="text-white  bg-gradient-to-b
        from-[#071028]
        to-[#020617] min-h-screen p-6">

      {/* Top Section */}

      <div className="
        flex
        flex-col
        md:flex-row
        md:items-center
        md:justify-between
        gap-4
        mb-8
        p-6
      ">

        <div>
          <h1 className="
            text-3xl
            font-bold
          ">
            Students
          </h1>

          <p className="
            text-slate-400
            mt-1
          ">
            Manage all registered students
          </p>
        </div>

      </div>

      {/* Search */}

      <div className="
        bg-slate-900
        w-1/2
        rounded-2xl
        border
        border-slate-800
        mb-6
        
        space-center
      ">

        <div className="
          flex
          items-center
          gap-3
          bg-slate-950
          rounded-xl
          p-6
        ">

          <Search size={20} />

         <input
  type="text"
  placeholder="Search students..."
  value={searchTerm}
  onChange={(e) =>
    setSearchTerm(e.target.value)
  }
  className="
    w-full
    text-white
    outline-none
    bg-transparent
  "
/>

        </div>

      </div>

      {/* Table */}

      <div className="
        bg-slate-900
  rounded-2xl
  border
  border-slate-800
  overflow-x-auto
        
      ">

        <table className="w-full">

          {/* Table Head */}

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
                Email
              </th>

              <th className="
                text-left
                px-6
                py-4
              ">
                Courses
              </th>

              <th className="
                text-left
                px-6
                py-4
              ">
                Joined
              </th>

              <th className="
                text-left
                px-6
                py-4
              ">
                Actions
              </th>

            </tr>

          </thead>

          {/* Table Body */}

          <tbody>

            {
              filteredStudents.map((student) => (

                <tr
                  key={student._id}
                  className="
                    border-t
                    border-slate-800
                    hover:bg-slate-800/50
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
                        src={student.image ||"https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-1024.png"}
                        
                        className="
                          w-12
                          h-12
                          rounded-full
                          object-cover
                        "
                      />

                      <div>

                        <h3 className="
                          font-semibold
                        ">
                          {student.name}
                        </h3>

                      </div>

                    </div>

                  </td>

                  {/* Email */}

                  <td className="
                    px-6
                    py-4
                    text-slate-300
                  ">
                    {student.email}
                  </td>

                  {/* Courses */}

                  <td className="
                    px-6
                    py-4
                    justify-center
                    text-center
                  ">
                 {
  enrolledCourses.filter(
    (item) =>
      item.userId?._id === student._id
  ).length
}
                  
                  </td>

                  {/* Joined */}

                  <td className="
                    px-6
                    py-4
                    text-slate-400
                  ">
                    {
  new Date(student.createdAt)
    .toLocaleDateString(
      "en-IN",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    )
}
                  </td>

                  {/* Actions */}

                  <td className="
                    px-6
                    py-4
                  ">

                    <div className="
                      flex
                      items-center
                      gap-3
                    ">

                      

                      <button className="
                        p-2
                        rounded-lg
                        bg-slate-800
                        hover:bg-red-500
                        transition-all
                      " onClick={() => handleDelete(student._id)}>
                        <Trash2 size={18} />
                      </button>

                    </div>

                  </td>

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default Students