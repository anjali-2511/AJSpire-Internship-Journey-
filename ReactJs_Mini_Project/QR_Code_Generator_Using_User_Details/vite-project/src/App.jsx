import DashBoard from "./DashBoard"
import Home from "./Home"
import Login from "./Login"
import NavBar from "./NavBar"
import Profile from "./Profile"
import Registration from "./Registration"

function App() {
   

  return (
    <>
       <NavBar/>
       <br />
       <br />
   
       <Home/>
       <Registration/>
       <Login/>
       <Profile/>
       <DashBoard/>


    </>
  )
}

export default App
