function Profile() {
    return (
        <>
            <div className="bg-dark vh-50 border rounded d-flex justify-content-center p-2">
                <div className="card bg-dark ms-5 text-white border-secondary w-50 h-50 mt-5 ps-5 pe-5 m-5">

                    <div className="d-flex justify-content-between w-100 mt-2">
                        <span>Profile completion</span>
                        <span>50%</span>
                    </div>
                    <div className="progress progress-bar bg-secondary progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Profile completion" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" aria-valuetext="50%" aria-busy="false">
                        <span class="progress-bar progress-bar-striped progress-bar-animated w-50">50%</span>
                    </div>

                    <div className=" d-flex w-100 m-3">
                        <button className="btn btn-border-secondary border rounded-circle d-flex justify-content-center align-items-center mt-3 p-4 me-3">
                               <i class="fa-regular fa-camera"></i>
                        </button>
                        <div className="d-flex flex-column   justify-content-center align-items-center">
                            
                            <span className="fw-bold">Add a profile photo</span>
                            <span>Helps your QR pass feel personal.</span>
                        </div>
                    </div>



                </div>
            </div>

        </>
    )
};
export default Profile;