import { useNavigate } from "react-router-dom";
 
function Home() {

    const navigate = useNavigate()

    return (
        <>
            <div className="bg-dark text-center vh-50 border rounded mt-5">

                <h1 className="p-4 text-white">Welcome to QR Code Generator</h1>
                <h3 className="text-white"> Register once, carry your pass everywhere</h3>
                <p className="text-white"> Sign up with your phone number, verify with an OTP, and get a personal QR pass you can download or print anytime.</p>

                <button onClick={()=>navigate("/registration")} className="btn btn-primary m-5 px-4 py-2">Get Started <i className="fa-solid fa-square-up-right"></i></button>

                <button  onClick={()=>navigate("/login")} className="btn btn-dark border-white px-4 py-2 d-inline-flex align-items-center  m-5">Login <i className="fa-solid fa-square-up-right"  ></i></button>

                <div className="card flex-row bg-dark border-dark gap-5 m-3">
                    <div className="card bg-dark text-white border-secondary w-25 h-25 ms-5 me-5 p-4 ">
                        <i className="fa-solid fa-user" ></i>
                        <h3>Quick Registration</h3>
                        <p>Name and phone, verified by OTP.</p>
                    </div>
                    <div className="card bg-dark text-white border-secondary w-25 h-25 ms-5 me-5 p-3 mb-4">
                        <i className="fa-solid fa-qrcode" ></i>
                        <h3>Personal QR pass</h3>
                        <p>Generated automatically from your details.

                        </p>
                    </div>
                    <div className="card bg-dark text-white border-secondary w-25 h-25 ms-5 me-5 p-3">
                        <i className="fa-solid fa-pen-to-square"></i>
                        <h3>Editable dashboard</h3>
                        <p>Update your details anytime, pass stays in sync.</p>
                    </div>
                </div>
            </div>
        </>






    )
};

export default Home;