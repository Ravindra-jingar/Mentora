import Sidebar from "../Admin/Sidebar"
import { Outlet } from "react-router-dom"

function AdminLayout() {
  return (

    <div className="flex">

      <Sidebar />

      <main className="flex-1">
        <Outlet />
      </main>

    </div>

  )
}

export default AdminLayout