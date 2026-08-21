import { Link, useNavigate } from "react-router-dom";
import logo from "../public/project_logo.png"
import { useState } from "react";
function Registration() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("+" + 91);
    

    const navigate = useNavigate()
    const verify = () => {
        if (name === "" || phone === "") {
            alert("Fill the Details");
        } else {
            alert("Verification is Done...");
            navigate("/login");
        }


    }



    return (
        <>
            <div className="bg-dark vh-50 border rounded d-flex justify-content-center p-5">
                <div className="card bg-dark ms-5 text-white border-secondary w-50 h-50 mt-5 mb-3 ps-5 pe-5">
                    <div className="d-flex justify-content-center"> <img src={logo} alt="" width="250" height="80" /></div>
                    <h1 className="text-center">Create your acoount</h1>
                    <p className="text-center">We'll send a code to verify your number.</p>

                    <span className="p-2"> Full Name: </span>
                    <input type="text" value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} placeholder="Enter a Name" className="form-control border-primary bg-secondary mb-2" />

                    <span className="p-2">Phone Number:</span>
                    <input type="text" value={phone} onChange={(e) => {
                        setPhone(e.target.value)
                    }} placeholder="xxxxxxxx" className="form-control border-primary bg-secondary" />

                     

                    <div className="d-flex justify-content-center">
                        <button onClick={() => verify()} className="btn btn-dark border-secondary px-4 py-2 w-50 gap-2 mt-2">Register<i className="fa-solid fa-square-up-right"></i></button>
                    </div>
                    <p className="text-center">Already have an account?
                        <Link className="text-primary" to="/login">Log in</Link>
                    </p>


                </div>
            </div>

        </>
    )
};
export default Registration;