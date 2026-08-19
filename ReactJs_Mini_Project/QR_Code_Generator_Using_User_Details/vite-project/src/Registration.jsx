import logo from "../public/project_logo.png"
function Registration(){
    return(
        <>
        <div className="bg-dark text-center vh-50 border rounded d-flex justify-content-center p-5">
            <div className="card bg-dark ms-5 text-white border-secondary w-50 h-50 mt-2 p-5">
                 <img src={logo} alt="" width="250" height="80" />
                 <h1>Create your acoount</h1>
                 <p>We'll send a code to verify your number.</p>

                  
                    <span>Full Name</span>
                    <input type="text" placeholder="Enter a Name" className="form-control border-secondary" />
                   

                    <span>Phone Number</span>
                    <input type="text" placeholder="xxxxxxxx" className="form-control border-secondary" />

                    <button className="btn btn-primary mt-3 border-secondary">Send OTP</button>

                    <button className="btn btn-dark border-secondary px-4 py-2 d-inline-flex align-items-center gap-2 m-4">Verify and continue<i class="fa-solid fa-square-up-right"></i></button>
                    <p>Already have an account? <span className="text-primary">Log in</span></p>

                     
            </div>
        </div>
        
        </>
    )
};
export default Registration;