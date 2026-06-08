import { Routes, Route, useLocation } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { useEffect, useState } from "react"
import{ lazy, Suspense } from "react";
const Navbar = lazy(() => import("./components/Navbar"))
const Footer = lazy(() => import("./components/Footer"))
const Home = lazy(() => import("./pages/Home"));

const About = lazy(() => import("./pages/About"))
const Courses = lazy(() => import("./pages/Courses"))
const Login = lazy(() => import("./pages/Login"))
const Enrollments = lazy(() => import("./components/Enrollments"))
const Register = lazy(() => import("./pages/Register"))
const ProtectedRoute = lazy(() => import("./routes/ProtectedRoute"))
const CourseDetails = lazy(() => import("./pages/CourseDetails"))

const EditCourse = lazy(() => import("./pages/Admin/EditCourse"))
const AdminRoute = lazy(() => import("./routes/AdminRoute"))
const AdminDashboard = lazy(() => import("./pages/Admin/AdminDashboard"))
const AdminLayout = lazy(() => import("./components/Layout/AdminLayout"))
const AdminCourses = lazy(() => import("./pages/Admin/AdminCourses"))
const AdminEnrollments = lazy(() => import("./pages/Admin/AdminEnrollments"))
const Students = lazy(() => import("./pages/Admin/Students"))
const AddCourse = lazy(() => import("./pages/Admin/AddCourse"))
const Settings = lazy(() => import("./pages/Admin/Settings"))
import Spinner from "./components/ui/Spinner";
function App() {
     const location = useLocation()

  const isAdminRoute =
    location.pathname.startsWith("/admin")

  return (
    <>

      {!isAdminRoute && <Navbar />} 
  
<Suspense fallback={<Spinner/>}>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/enrollments"  
        element={
             <ProtectedRoute>
               <Enrollments />
              </ProtectedRoute>
                }   />
         <Route path="/courses-details/:id" element={<CourseDetails />}/>
         <Route path="/admin"
  element={
    <AdminRoute>
      <AdminLayout />
    </AdminRoute>
  }
>

  <Route index element={<AdminDashboard />} />

   <Route path="addcourse" element={<AddCourse />} />

  <Route path="Admincourses"  element={<AdminCourses/>} />

  <Route path="students" element={<Students />} />

  <Route path="Adminenrollments" element={<AdminEnrollments />} />

  <Route path="add-course" element={<AddCourse />} />

  <Route path="settings" element={<Settings />} />

</Route>
         <Route path="/edit-course/:id" element={<EditCourse />}/>
      </Routes>
     </Suspense>
         {!isAdminRoute && <Footer />}
<ToastContainer />
    </>
  )
}
export default App