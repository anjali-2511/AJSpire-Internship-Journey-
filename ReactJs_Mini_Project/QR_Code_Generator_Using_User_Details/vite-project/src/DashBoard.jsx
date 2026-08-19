function DashBoard() {
    return (
        <>
            <div className="bg-dark vh-100  border rounded d-flex justify-content-center">
                <div className="card bg-dark ms-5 text-white border-0 w-100 h-100  d-flex flex-column">


                    <div className="border-secondary border w-25 ms-5 mt-5 p-4">
                        <h3 className="p-2 text-primary">Your details</h3>
                        <h1 className="p-2">Anjali Shinde</h1>
                        <span className="text-secondary ps-3">Phone</span>
                        <h4 className="p-3">+917776028508</h4>
                        <span className="text-secondary ps-3">Email</span>
                        <h4 className="p-3">anjali@123</h4>

                        <div className="d-flex ms-2"> <button className="btn btn-dark border-primary px-4 py-2 w-100 gap-2 mt-2"> <i class="fa-regular fa-pen-to-square"></i> Edit</button>
                        </div>

                    </div>


                    <div className="border-secondary border w-25">
                        <div className="card border-secondary border">

                        </div>

                    </div>


                </div>
            </div>
        </>
    )

};
export default DashBoard;
