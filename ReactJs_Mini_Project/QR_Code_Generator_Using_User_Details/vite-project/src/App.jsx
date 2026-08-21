import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./DashBoard"
import Home from "./Home"
import Login from "./Login"
import NavBar from "./NavBar"
import Profile from "./Profile"
import Registration from "./Registration"

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<DashBoard />} />
         
      </Routes>




    </BrowserRouter>
  )
}

export default App
