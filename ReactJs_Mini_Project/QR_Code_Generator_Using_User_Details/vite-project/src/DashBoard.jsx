import profile from "../public/profile.png"
function DashBoard() {
    return (
        <>
            <div className="bg-dark vh-100  border rounded d-flex justify-content-center">
                <div className="card bg-dark ms-5 text-white border-0 w-100 h-100  d-flex flex-column">

                    <div className="card flex-row bg-dark border-dark gap-5 m-3">

                        <div className="card bg-dark text-white border-0 w-50 h-100 ms-5 me-5 p-4 mt-3">
                          
                                <h3 className="pt-1 text-primary">Your details</h3>
                                <button className="btn btn-border-secondary border rounded-circle d-flex justify-content-center w-25 h-25 align-items-center"><img src={profile} alt="" width="100" height="109" className="rounded-circle" /></button>
                             
                            <h1 className="ps-2">Anjali Shinde</h1>
                            <span className="text-secondary ps-3">Phone</span>
                            <h4 className="p-3">+917776028508</h4>
                            <span className="text-secondary ps-3">Email</span>
                            <h4 className="p-3">anjali@123</h4>

                            <div className="d-flex ms-2"> <button className="btn btn-dark border-primary w-100 gap-2 mt-2"> <i class="fa-regular fa-pen-to-square"></i> Edit</button>
                            </div>


                        </div>

                        <div className="card bg-black text-center text-white border-secondary w-75 h-75 ms-5 me-5 p-3  mt-3">
                            <h3>QR Code</h3>
                            <div className="card bg-white justify-content-center w-50 h-50 mt-3 ms-auto me-auto border border-primary"> 
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/250px-QR_code_for_mobile_English_Wikipedia.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" alt="" width="100%" height="100%"/>
                                </div>

                            <div className="w-100  mt-4"> 
                                <button className="btn btn-primary px-4 py-2 mt-3 me-3 pe-auto ps-auto w-25"><i class="fa-solid fa-download"></i>Download</button>
                                <button className="btn btn-dark border-white px-4 py-2   text-center mt-3 w-25 ms-auto"><i class="fa-solid fa-print" ></i> Print</button>
                            </div>




                        </div>

                    </div>








                </div>
            </div>
        </>
    )

};
export default DashBoard;
