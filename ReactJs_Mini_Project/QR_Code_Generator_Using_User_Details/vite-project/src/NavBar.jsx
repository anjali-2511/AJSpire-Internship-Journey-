import { Link } from "react-router-dom";
import logo from "../public/project_logo.png"
import { useNavigate } from "react-router-dom";
function NavBar() {
    const navigate = useNavigate();

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top border rounded-3 border-primary">

                <a className="navbar-brand fw-bold " href="#">
                    <img src={logo} alt="" width="150" height="80" />
                </a>

                <button className="navbar-toggler m-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className=" collapse navbar-collapse ms-5 me-5" id="navbarNav">

                    <ul className="navbar-nav align-items-lg-center ">

                        <li className="nav-item  ms-5 me-5">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>

                        <li className=" nav-item  ms-5 me-5">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>

                         <li className="nav-item ms-5 me-5 ">
                            <Link className="nav-link" to="/dashboard">DashBoard</Link>
                        </li>
                        
                        <li className=" nav-item  ms-5 me-5">
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </li>
                    </ul>

                    <div className="nav-item ms-auto">
                        <button onClick={()=>navigate("/registration")}  className="btn btn-dark border-white px-4 py-2 d-inline-flex align-items-center ">
                            Sign up  <i className="fa-solid fa-square-up-right" ></i>
                        </button>
                    </div>








                </div>


            </nav>
        </>
    )
};
export default NavBar;
