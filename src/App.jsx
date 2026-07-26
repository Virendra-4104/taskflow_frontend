import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import PublicLayout from "./components/layout/PublicLayout"
import Register from "./pages/Register"

function App() {

  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
