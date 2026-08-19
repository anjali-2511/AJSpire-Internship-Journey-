function Home() {
    return (
        <>
            <div className="bg-dark text-center vh-50 border rounded mt-5">

                <h1 className="p-4 text-white">Welcome to QR Code Generator</h1>
                <h3 className="text-white"> Register once, carry your pass everywhere</h3>
                <p className="text-white"> Sign up with your phone number, verify with an OTP, and get a personal QR pass you can download or print anytime.</p>

                <button className="btn btn-primary m-5">Get Started</button>
                <button className="btn btn-dark border-white px-4 py-2 d-inline-flex align-items-center gap-2 m-5">Login <i class="fa-solid fa-square-up-right"  ></i></button>

                <div className="card flex-row bg-dark border-dark gap-5 m-3">
                    <div className="card bg-dark text-white border-secondary w-25 h-25 ms-5 me-5 p-4 mb-5">
                        <i class="fa-solid fa-user" ></i>
                        <h3>Quick Registration</h3>
                        <p>Name and phone, verified by OTP.</p>
                    </div>
                    <div className="card bg-dark text-white border-secondary w-25 h-25 ms-5 me-5 p-3 mb-4">
                        <i class="fa-solid fa-qrcode" ></i> 
                        <h3>Personal QR pass</h3>
                        <p>Generated automatically from your details.

                        </p>
                    </div>
                    <div className="card bg-dark text-white border-secondary w-25 h-25 ms-5 me-5 p-3 mb-4">
                        <i class="fa-solid fa-pen-to-square"></i>
                        <h3>Editable dashboard</h3>
                        <p>Update your details anytime, pass stays in sync.</p>
                    </div>
                </div>
            </div>
        </>






    )
};

export default Home;