import Layout from "@/layouts/Layout"
import { Route, Routes } from "react-router-dom"
import HomePage from "@/pages/HomePage"
import RegisterPage from "@/pages/RegisterPage"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  )
}

export default App
