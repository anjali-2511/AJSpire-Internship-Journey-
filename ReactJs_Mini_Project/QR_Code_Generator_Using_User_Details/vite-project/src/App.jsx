import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./DashBoard"
import Home from "./Home"
import Login from "./Login"
import NavBar from "./NavBar"
import Profile from "./Profile"
import Registration from "./Registration"

function App() {


  return (
    <>
      <NavBar />
      <br />
      <br />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Registration />} />
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Profile />} />
          <Route path="/" element={<DashBoard />} />
          <Route path="/" element={<Profile />} />
          <Route path="/" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>




    </>
  )
}

export default App
