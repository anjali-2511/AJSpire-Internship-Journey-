import logo from "../public/project_logo.png"
function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top border rounded-3">

                <a className="navbar-brand fw-bold " href="#">
                    <img src={logo} alt="" width="250" height="80" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className=" collapse navbar-collapse ms-5 me-5" id="navbarNav">

                    <ul className="navbar-nav align-items-lg-center ">

                        <li className="nav-item  ms-5 me-5">
                            <a className="nav-link active" href="#">Home</a>
                        </li>

                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Registration</a>
                        </li> */}

                        <li className="nav-item ms-5 me-5">
                            <a className="nav-link" href="#">DashBoard</a>
                        </li>

                        <li className=" nav-item ms-5 me-5">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                    </ul>

                    <div className="nav-item ms-auto">
                        <button class="btn btn-dark border-white px-4 py-2 d-inline-flex align-items-center ms-5 me-5">
                            Sign up <i class="fa-solid fa-square-up-right" ></i>
                        </button>
                    </div>








                </div>


            </nav>
        </>
    )
};
export default NavBar;
