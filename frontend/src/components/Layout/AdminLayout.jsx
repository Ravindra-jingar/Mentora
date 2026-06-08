import Sidebar from "../Admin/Sidebar"
import { Outlet } from "react-router-dom"

function AdminLayout() {
  return (

    <div className="flex">

      <Sidebar />

      <main className=" flex-1 min-h-screen ml-64 md:ml-64">
        <Outlet />
      </main>

    </div>

  )
}

export default AdminLayout