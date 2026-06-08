import { NavLink } from "react-router-dom"
import {
  Home,
  BookOpen,
  Users,
  ClipboardList,
  BarChart3,
  MessageSquare,
  Settings,
  LogOut,
  HomeIcon,
  PlusCircle,
  ArrowLeft 
} from "lucide-react";
import { useNavigate }
from "react-router-dom"
import { useContext } from "react";
import { AuthContext }from "../../context/AuthContext"
function Sidebar() {
const {
  isLoggedIn,
  setIsLoggedIn
} = useContext(AuthContext)
    const navigate = useNavigate()

   const {user} = useContext(AuthContext);

  const handleLogout = () => {

    localStorage.removeItem(
    "role"
  )
    localStorage.removeItem(
    "user"
  )
    localStorage.removeItem(
    "token"
  )
 
    setIsLoggedIn(false)

  navigate("/login")

}

  return (
   <aside className="
      fixed
        w-64
       h-full
        bg-gradient-to-b
    from-[#0B1739]
    to-[#081225]
        text-white
        p-4
      ">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <div
          className="
            w-10
            h-10
            rounded-lg
            bg-orange-500
            flex
            items-center
            justify-center
            text-xl
            font-bold
          "
        >
          🎓
        </div>

        <div>
          <h1 className="font-bold text-lg">Coaching</h1>
          <p className="text-xs text-gray-400">Admin Panel</p>
        </div>
      </div>

       <div className="flex flex-col gap-2">

        <NavLink  to="/admin"  end
  className={({ isActive }) =>
    ` flex
      items-center
      gap-3
      px-4
      py-3
      rounded-lg
      transition-all

      ${
        isActive
          ? "bg-orange-500 text-white"
          : "hover:bg-white/10 text-gray-300"
      }

    
    `
  }>
       <Home size={18}/>
          Dashboard
        </NavLink>

        <NavLink to="/admin/Admincourses"className={({ isActive }) =>
    ` flex
      items-center
      gap-3
      px-4
      py-3
      rounded-lg
      transition-all

      ${
        isActive
          ? "bg-orange-500 text-white"
          : "hover:bg-white/10 text-gray-300"
      }
    `
  }>
        <BookOpen size={18}/>
          Courses
        </NavLink>

        <NavLink  to="/admin/students"className={({ isActive }) =>
    ` flex
      items-center
      gap-3
      px-4
      py-3
      rounded-lg
      transition-all

      ${
        isActive
          ? "bg-orange-500 text-white"
          : "hover:bg-white/10 text-gray-300"
      }
    `
  }>
        <Users size={18}/>
          Students
        </NavLink>

        <NavLink to="/admin/Adminenrollments"className={({ isActive }) =>
    ` flex
      items-center
      gap-3
      px-4
      py-3
      rounded-lg
      transition-all

      ${
        isActive
          ? "bg-orange-500 text-white"
          : "hover:bg-white/10 text-gray-300"
      }
    `
  }>
        <ClipboardList size={18}/>
          Enrollments
        </NavLink>
  <NavLink to="/admin/addcourse" className={({ isActive }) =>
    ` flex
      items-center
      gap-3
      px-4
      py-3
      rounded-lg
      transition-all

      ${
        isActive
          ? "bg-orange-500 text-white"
          : "hover:bg-white/10 text-gray-300"
      }
    `
  }>
        <PlusCircle  size={18} />
         Add Courese
        </NavLink>
        <NavLink to="/admin/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10">
        <Settings size={18}/>
          Setting
        </NavLink>
         <button onClick={handleLogout}>
          {/* </button> */}
         <NavLink to="" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10">
        <LogOut  size={18}/>
           logout
        </NavLink>
         </button>

         <NavLink to="/" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10">
        <  ArrowLeft size={18} className="bg-orange-500"/>
           Back to Home
        </NavLink>
      </div>

    </aside>
  )
}

export default Sidebar;