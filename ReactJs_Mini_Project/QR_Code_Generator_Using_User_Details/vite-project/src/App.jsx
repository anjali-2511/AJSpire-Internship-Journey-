// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DashBoard from "./DashBoard"
// import Home from "./Home"
// import Login from "./Login"
// import NavBar from "./NavBar"
// import Profile from "./Profile"
// import Registration from "./Registration"

// function App() {

//   return (
//     <BrowserRouter>
//       <NavBar />
//       <br />
//       <br />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/registration" element={<Registration />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/dashboard" element={<DashBoard />} />
         
//       </Routes>




//     </BrowserRouter>
//   )
// }

// export default App



import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import DashBoard from "./DashBoard"
import Home from "./Home"
import Login from "./Login"
import NavBar from "./NavBar"
import Profile from "./Profile"
import Registration from "./Registration"

function App() {
  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    photo: "",
  });

  return (
    <BrowserRouter>
      <NavBar />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/profile"
          element={<Profile profile={profile} setProfile={setProfile} />}
        />
        <Route
          path="/dashboard"
          element={<DashBoard profile={profile} setProfile={setProfile} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;