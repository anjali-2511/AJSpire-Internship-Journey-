import { Link, useNavigate } from "react-router-dom";
import logo from "../public/project_logo.png";
import { useState } from "react";
function Login() {
    const [phone, setPhone] = useState("+" + "91")
    const [showOtp, setShowOtp] = useState(false);

    const navigate = useNavigate()
    const loged = () => {
        if (phone === "" || showOtp === "") {
            alert("Enter a Valid OTP")
        } else {
            alert("Valid...")
            navigate("/profile");
        }
    }
    return (
        <>
            <div className="bg-dark vh-50 border rounded d-flex justify-content-center p-5 pt-5">
                <div className="card bg-dark ms-5 text-white border-secondary w-50 h-50 mt-5 ps-5 pe-5 m-5">
                    <div className="d-flex justify-content-center"> <img src={logo} alt="" width="250" height="80" /></div>
                    <h1 className="text-center">Welcome back</h1>
                    <p className="text-center">Log in with your registered number.</p>

                    <span className="pb-2">Phone Number:</span>
                    <input type="text" value={phone} onChange={(e) => {
                        setPhone(e.target.value)
                    }} placeholder="xxxxxxxx" className="form-control border-primary bg-secondary" />

                    {showOtp ? (

                        <input type="text" name="" id="" placeholder="Enter a valid OTP" className="form-control border-primary bg-secondary mb-2 mt-2" />

                    ) : (

                        <button onClick={() => setShowOtp(true)} className="sendotp btn btn-primary mt-3 border-secondary w-50  ms-auto me-auto">
                            Send OTP
                        </button>)

                    }

                    <div className="d-flex justify-content-center">
                        <button onClick={() => loged()} className="btn btn-dark border-secondary px-4 py-2 w-50 gap-2 mt-2">Login<i className="fa-solid fa-square-up-right"></i></button>
                    </div>
                    <p className="text-center">New here?
                        <Link className="text-primary" to="/registration">Create an account</Link>
                    </p>


                </div>
            </div>
        </>
    )
};
export default Login;