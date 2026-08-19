import logo from "../public/project_logo.png"
function Registration() {
    return (
        <>
            <div className="bg-dark vh-50 border rounded d-flex justify-content-center p-5">
                <div className="card bg-dark ms-5 text-white border-secondary w-50 h-50 mt-2 ps-5 pe-5">
                    <div className="d-flex justify-content-center"> <img src={logo} alt="" width="250" height="80"/></div>
                    <h1 className="text-center">Create your acoount</h1>
                    <p className="text-center">We'll send a code to verify your number.</p>

                    <span> Full Name: </span>
                    <input type="text" placeholder="Enter a Name" className="form-control border-secondary mb-3" />

                    <span className="">Phone Number:</span>
                    <input type="text" placeholder="xxxxxxxx" className="form-control border-secondary" />

                    <div className="d-flex justify-content-center"> <button className="btn btn-primary mt-3 border-secondary w-50  ">Send OTP</button>
                    </div>

                    <div className="d-flex justify-content-center"> <button className="btn btn-dark border-secondary px-4 py-2 w-50 gap-2 mt-2">Verify and continue<i class="fa-solid fa-square-up-right"></i></button>
                    </div>
                    <p className="text-center">Already have an account? <span className="text-primary">Log in</span></p>


                </div>
            </div>

        </>
    )
};
export default Registration;