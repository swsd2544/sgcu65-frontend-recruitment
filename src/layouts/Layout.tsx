import { Outlet } from "react-router-dom"
import Navbar from "@/components/Navbar"

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="relative flex grow bg-mobile bg-cover bg-fixed lg:bg-desktop lg:bg-center">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
