import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CourseContext } from "../context/CourseContext"
import { AuthContext }from "../context/AuthContext"
import  Button  from "../components/ui/Button"
import { useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"
function Navbar() {
  const navigate = useNavigate()
  const role = localStorage.getItem("role")
  const user =
  JSON.parse(localStorage.getItem("user"))
    const {currentUser} = useContext(AuthContext);
  const handleLogout = () => {
   

  localStorage.removeItem(
    "isLoggedIn"
  )
    localStorage.removeItem(
    "role"
  )
  localStorage.removeItem("user")
    setIsLoggedIn(false)
  // window.location.reload()
  navigate("/login")

}
const {
  isLoggedIn,
  setIsLoggedIn
} = useContext(AuthContext)
  const { enrolledCourses } = useContext(CourseContext)
 
  return (
    <nav>
  
 
   <div >
   <h1 className="text-4xl font-extrabold tracking-tight">
  <span className="text-white">Ment</span>
  <span className="text-orange-500">ora</span>
 
</h1>
        </div>
     

      <NavLink className={({ isActive }) =>
    `relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300
    ${isActive ? "after:w-full text-orange-500" : "after:w-0 hover:after:w-full text-white"}`
  }  to="/">Home</NavLink>
      <NavLink className={({ isActive }) =>
    `relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300
    ${isActive ? "after:w-full text-orange-500" : "after:w-0 hover:after:w-full text-white"}`
  }  to="/about">About</NavLink>
      <NavLink className={({ isActive }) =>
    `relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300
    ${isActive ? "after:w-full text-orange-500" : "after:w-0 hover:after:w-full text-white"}`
  } to="/courses">Courses </NavLink>
      <NavLink className={({ isActive }) =>
    `relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300
    ${isActive ? "after:w-full text-orange-500" : "after:w-0 hover:after:w-full text-white"}`
  } to="/contact">Contact</NavLink>
      <NavLink className={({ isActive }) =>
    `relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300
    ${isActive ? "after:w-full text-orange-500" : "after:w-0 hover:after:w-full text-white"}`
  } to="/enrollments">MyLearning</NavLink>
     


{     role === "admin" && (

  <NavLink className="text-3" to="/admin">
    Admin Dashboard
  </NavLink>

  
)}
  {    
  isLoggedIn ? (

    <button onClick={handleLogout}>
      Logout
    </button>

  ) : (

    <>

      <NavLink className={({ isActive }) =>
    `relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300
    ${isActive ? "after:w-full text-orange-500" : "after:w-0 hover:after:w-full text-white"}`
  } to="/login">
        Login
      </NavLink>

      <NavLink className={({ isActive }) =>
    `relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300
    ${isActive ? "after:w-full text-orange-500" : "after:w-0 hover:after:w-full text-white"}`
  } to="/register">
        Register
      </NavLink>

    </>

  )
  }
      
    </nav>
  )
}

export default Navbar