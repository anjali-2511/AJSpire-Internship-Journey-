import { useNavigate } from "react-router-dom";

function Profile({ profile, setProfile, isEditing, setIsEditing }) {
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSubmit = () => {
        if (
            profile.name === "" ||
            profile.phone === "" ||
            profile.email === "" ||
            profile.address === ""
        ) {
            alert("Fill the Details");
        } else {
            alert(isEditing ? "Profile updated!" : "Profile saved!");
            setIsEditing(true);
            navigate("/dashboard");
        }
    };

    return (
        <>
            <div className="bg-dark vh-50 border rounded d-flex justify-content-center p-2 pt-5">
                <div className="card bg-dark ms-5 text-white border-secondary w-50 h-100 ps-5 pe-5 m-5 mt-5">

                    <div className="d-flex justify-content-between w-100 mt-2">
                        <span>Profile completion</span>
                        <span>50%</span>
                    </div>
                    <div className="progress progress-bar bg-secondary progress-bar-striped progress-bar-animated" role="progressbar">
                        <span className="progress-bar progress-bar-striped progress-bar-animated w-50">50%</span>
                    </div>

                    <div className="d-flex w-100 m-3">
                        <button className="btn btn-border-secondary border rounded-circle d-flex justify-content-center align-items-center mt-3 p-4 me-3">
                            <i className="fa-regular fa-camera text-white">
                                <input
                                    type="file"
                                    name="photo"
                                    id="photo"
                                    className="position-absolute top-0 start-0 w-50 h-25"
                                    style={{ opacity: 0, cursor: "pointer" }}
                                />
                            </i>
                        </button>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <span className="fw-bold">Add a profile photo</span>
                            <span>Helps your QR pass feel personal.</span>
                        </div>
                    </div>

                    <div>
                        <span className="pb-2">Full Name:</span>
                        <input
                            type="text"
                            name="name"
                            value={profile.name}
                            onChange={handleChange}
                            placeholder="Enter a Name"
                            className="form-control border-primary bg-secondary mb-3"
                        />

                        <span className="pb-2">Phone Number:</span>
                        <input
                            type="text"
                            name="phone"
                            value={profile.phone}
                            onChange={handleChange}
                            placeholder="xxxxxxxx"
                            className="form-control border-primary bg-secondary mb-3"
                        />

                        <span className="pb-2">Email:</span>
                        <input
                            type="text"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            placeholder="abc@123"
                            className="form-control border-primary bg-secondary mb-3"
                        />

                        <span className="pb-2">Address:</span>
                        <input
                            type="text"
                            name="address"
                            value={profile.address}
                            onChange={handleChange}
                            placeholder="City,State"
                            className="form-control border-primary bg-secondary mb-3"
                        />

                        <div onClick={handleSubmit} className="d-flex justify-content-center">
                            <button className="save btn btn-primary mt-3 border-secondary w-50 ms-auto me-auto">
                                {isEditing ? (
                                    <>
                                        <i className="fa-solid fa-pen-nib"></i> Update
                                    </>
                                ) : (
                                    "Save and Continue"
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;