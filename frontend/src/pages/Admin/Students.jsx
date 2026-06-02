import { useEffect, useState, useContext } from "react"
import {
  Eye,
  Trash2,
  Search,
} from "lucide-react";
import AuthInput from "../../components/ui/AuthInput";
import { CourseContext } from "../../context/CourseContext";
import {getStudents} from "../../services/studentService";
import  Spinner  from "../../components/ui/Spinner.jsx"
function Students() {
   const [error, setError] = useState("")
  const { enrolledCourses } = useContext(CourseContext);
  const [students, setStudents]= useState([])
  const [loading, setLoading] = useState(true)
  
   
  useEffect(() => {
    const fetchStudent = async () => {
try{

  setLoading(true)
      const data = await getStudents()   
        setStudents(data)
        
    }

catch{
       setError(error.message);  
}finally{
setLoading(false)
}
    }
     fetchStudent() 
    
  }, [])
  if (loading) {
    return <Spinner/> 
  }
  return (
     <div className="text-white  bg-gradient-to-b
        from-[#071028]
        to-[#020617] h-screen p-6">

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

        <button className="
          bg-orange-500
          hover:bg-orange-600
          px-5
          py-3
          rounded-xl
          font-semibold
          transition-all
        ">
          + Add Student
        </button>

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
            className="
            w-full
              text-white
              outline-none
              
            "
          />

        </div>

      </div>

      {/* Table */}

      <div className="
        bg-slate-900
        rounded-2xl
        overflow-hidden
        border
        border-slate-800
        
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
              students.map((student) => (

                <tr
                  key={student.id}
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
                  ">
                 { enrolledCourses.length } 
                  
                  </td>

                  {/* Joined */}

                  <td className="
                    px-6
                    py-4
                    text-slate-400
                  ">
                    {enrolledCourses.map((item)=>{
                     return item.enrolledAt
                       console.log("item",item.enrolledAt)
                    })}
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
                        hover:bg-orange-500
                        transition-all
                      ">
                        <Eye size={18} />
                      </button>

                      <button className="
                        p-2
                        rounded-lg
                        bg-slate-800
                        hover:bg-red-500
                        transition-all
                      ">
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