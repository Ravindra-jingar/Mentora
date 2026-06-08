import { NavLink } from "react-router-dom"
import {useContext, useState } from "react"
import { CourseContext } from "../context/CourseContext"
import { AuthContext }from "../context/AuthContext"
import  Button  from "../components/ui/Button"
import { useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"
import { Menu, X } from "lucide-react";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const role = localStorage.getItem("role")
 
  const handleLogout = () => {
   
    localStorage.removeItem(
    "token"
  )

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

 
  return (
    <nav className="">
  
  <div className="flex items-center justify-between w-full px-4 py-4">
   <div >
   <h1 className="text-4xl font-extrabold tracking-tight">
  <span className="text-white">Ment</span>
  <span className="text-orange-500">ora</span>
 
</h1>
        </div>
     <button
  className="md:hidden"
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? <X /> : <Menu />}
</button></div>
    <div className="hidden whitespace-nowrap md:flex items-center gap-8 ml-auto gap-20 text-lg">
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
  } to="/enrollments">MyLearning</NavLink>
     


{     role === "admin" && (

  <NavLink className="" to="/admin">
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
  </div>
      {
  isOpen && (
    <div className="
      inset-0
      z-50
      flex
      text-lg
      flex-col
      items-center
      justify-center
      gap-8">
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
    </div>
  )
}
    </nav>
    
  )
}

export default Navbar