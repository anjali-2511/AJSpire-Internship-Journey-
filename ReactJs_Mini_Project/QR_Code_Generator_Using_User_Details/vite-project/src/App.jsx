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
    button: "",
  });

  const [isEditing, setIsEditing] = useState(false);

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
          element={
            <Profile
              profile={profile}
              setProfile={setProfile}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <DashBoard
              profile={profile}
              setProfile={setProfile}
              setIsEditing={setIsEditing}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;