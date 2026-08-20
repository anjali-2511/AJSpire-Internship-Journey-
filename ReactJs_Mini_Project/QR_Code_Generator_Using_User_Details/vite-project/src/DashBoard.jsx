import profile from "../public/profile.png"
function DashBoard() {
    return (
        <>
            <div className="bg-dark vh-100  border rounded d-flex justify-content-center">
                <div className="card bg-dark ms-5 text-white border-0 w-100 h-100  d-flex flex-column">

                    <div className="card flex-row bg-dark border-dark gap-5 m-3">

                        <div className="card bg-dark text-white  border-secondary w-50 h-100 ms-5 me-5 p-4 mt-3">
                            <div className="">
                                <h3 className="pt-1 text-primary">Your details</h3>
                                <button className="btn btn-border-secondary border rounded-circle d-flex justify-content-center align-items-center p-2 me-5 ms-auto"><img src={profile} alt="" width="150" height="100" className="rounded-circle" /></button>
                            </div>
                            <h1 className="ps-2">Anjali Shinde</h1>
                            <span className="text-secondary ps-3">Phone</span>
                            <h4 className="p-3">+917776028508</h4>
                            <span className="text-secondary ps-3">Email</span>
                            <h4 className="p-3">anjali@123</h4>

                            <div className="d-flex ms-2"> <button className="btn btn-dark border-primary w-100 gap-2 mt-2"> <i class="fa-regular fa-pen-to-square"></i> Edit</button>
                            </div>


                        </div>

                        <div className="card bg-dark text-white border-secondary w-50 h-50 ms-5 me-5 p-3 mb-4">




                        </div>

                    </div>








                </div>
            </div>
        </>
    )

};
export default DashBoard;
