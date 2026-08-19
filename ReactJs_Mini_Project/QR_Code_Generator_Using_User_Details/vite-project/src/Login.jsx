import logo from "../public/project_logo.png"
function Login() {
    return (
        <>
            <div className="bg-dark vh-50 border rounded d-flex justify-content-center p-5">
                <div className="card bg-dark ms-5 text-white border-secondary w-50 h-50 mt-5 ps-5 pe-5 m-5">
                    <div className="d-flex justify-content-center"> <img src={logo} alt="" width="250" height="80" /></div>
                    <h1 className="text-center">Welcome back</h1>
                    <p className="text-center">Log in with your registered number.</p>
                      
                    <span className="pb-2">Phone Number:</span>
                    <input type="text" placeholder="xxxxxxxx" className="form-control border-primary bg-secondary" />

                    <div className="d-flex justify-content-center"> <button className="btn btn-primary mt-3 border-secondary w-50  ">Send OTP</button>
                    </div>

                    <div className="d-flex justify-content-center"> <button className="btn btn-dark border-secondary px-4 py-2 w-50 gap-2 mt-2">Login<i class="fa-solid fa-square-up-right"></i></button>
                    </div>
                    <p className="text-center">New here?<span className="text-primary">Create an account</span></p>


                </div>
            </div>
        </>
    )
};
export default Login;