import Card1 from "./WebPage/Card1";
import NavBar from "./WebPage/NavBar";
import Card2 from "./WebPage/Card2";
import Card3 from "./WebPage/Card3";
import HomeFooter from "./WebPage/HomeFooter";
import Form from "./Basic_Content/Form";
import Calculator from "./Calculator/Calculator";
import TicTacToe from "./TicTacToe/TicTacToe";
import Basic from "./NetflixSeries/NetflixSeries";
import NetflixSeries from "./NetflixSeries/NetflixSeries";
import Profile from "./Basic_Content/Profile";
import EventHandling from "./Basic_Content/EventHandling";
import UseState from "./Basic_Content/UseState";
import UseStateTask from "./Basic_Content/UseStateTask";
import DerivedState from "./Basic_Content/DerivedState";
import LiftingStateUp, { InputComponent, DisplayComponent } from "./Basic_Content/LiftingStateUp";
import ToggleSwitchApp from "./ToggleSwitch/ToggleSwitchApp"
import UseRef from "./Basic_Content/UseRef";
import MiniProject from "./Student_Directory/StudentMarksSearcher";
import UserSearch from "./GitHub_Style_User_Search/UserSearch";
// import Registration from "./Registration";





function App() {
  return (
    <div>
      <NavBar />

      <div class="row">
        <div class="col-4">
          <Card1 />
          <Card2 />
        </div>
        <div class="col-8">
          <Card3 />

        </div>

      </div>
      <HomeFooter />

      <Form />
      <Calculator />
      <TicTacToe />

      <NetflixSeries />

      <Profile />
      <EventHandling />
      <UseState />
      <UseStateTask />
      <DerivedState />
      <LiftingStateUp />
      <ToggleSwitchApp />
      <UseRef/>
      <MiniProject/>
      <UserSearch/>
     

    </div>
  )
}
export default App;