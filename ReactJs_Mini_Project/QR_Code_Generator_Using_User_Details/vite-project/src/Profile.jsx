// import { useNavigate } from "react-router-dom";
// import { useState} from "react";

// function Profile() {
//     const [profile, setProfile] = useState({
//         name: "",
//         phone: "",
//         email: "",
//         address: "",
//     });


//     const navigate = useNavigate();
//     const Save = () => {
//         if (profile.phone === "" || profile.phone === "" || profile.email === "" || profile.address === "") {
//             alert("Fill the Details")
//         } else {
//             alert("Profile saved!");
//             navigate("/dashboard")
//         }


//     };

//     return (

//         <>
//             <div className="bg-dark vh-50 border rounded d-flex justify-content-center p-2 pt-5">
//                 <div className="card bg-dark ms-5 text-white border-secondary w-50 h-100 ps-5 pe-5 m-5 mt-5">

//                     <div className="d-flex justify-content-between w-100 mt-2">
//                         <span>Profile completion</span>
//                         <span>50%</span>
//                     </div>
//                     <div className="progress progress-bar bg-secondary progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Profile completion" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" aria-valuetext="50%" aria-busy="false">
//                         <span className="progress-bar progress-bar-striped progress-bar-animated w-50">50%</span>
//                     </div>

//                     <div className=" d-flex w-100 m-3">
//                         <button className="btn btn-border-secondary border rounded-circle d-flex justify-content-center align-items-center mt-3 p-4 me-3">
//                             <i className="fa-regular fa-camera text-white">     <input type="file"
//                                 name="photo"
//                                 id="photo"
//                                 className="position-absolute top-0 start-0 w-50 h-25"
//                                 style={{ opacity: 0, cursor: 'pointer' }}

//                             />
//                             </i>
//                         </button>
//                         <div className="d-flex flex-column   justify-content-center align-items-center">


//                             <span className="fw-bold">Add a profile photo</span>
//                             <span>Helps your QR pass feel personal.</span>
//                         </div>
//                     </div>

//                     <div>

//                         <span className="pb-2">Full Name:</span>
//                         <input type="text" value={profile.name}
//                             onChange={(e) => setProfile(e.target.value)} placeholder="Enter a Name" className="form-control border-primary bg-secondary mb-3" />

//                         <span className="pb-2">Phone Number:</span>
//                         <input type="text" value={profile.phone}
//                             onChange={(e) => setProfile(e.target.value)} placeholder="xxxxxxxx" className="form-control border-primary bg-secondary mb-3" />

//                         <span className="pb-2">Email:</span>
//                         <input type="text" value={profile.email}
//                             onChange={(e) => setProfile(e.target.value)} placeholder="abc@123" className="form-control border-primary bg-secondary mb-3" />

//                         <span className="pb-2">Address:</span>
//                         <input type="text" value={profile.address}
//                             onChange={(e) => setProfile(e.target.value)} placeholder="City,State" className="form-control border-primary bg-secondary mb-3" />

//                         <div onClick={Save} className="d-flex justify-content-center"> <button className="btn btn-primary m-3 border-secondary w-50  ">Save and Continue</button>
//                         </div>
//                     </div>



//                 </div>



//             </div>


//         </>
//     )
// };
// export default Profile;



// import { useNavigate } from "react-router-dom";

// function Profile({ profile, setProfile }) {
//   const navigate = useNavigate();

//   // single handler for all fields, using the input's "name" attribute
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile({ ...profile, [name]: value });
//   };

//   const Save = () => {
//     if (
//       profile.name === "" ||
//       profile.phone === "" ||
//       profile.email === "" ||
//       profile.address === ""
//     ) {
//       alert("Fill the Details");
//     } else {
//       alert("Profile saved!");
//       navigate("/dashboard");
//     }
//   };

//   return (
//     <>
//       <div className="bg-dark vh-50 border rounded d-flex justify-content-center p-2 pt-5">
//         <div className="card bg-dark ms-5 text-white border-secondary w-50 h-100 ps-5 pe-5 m-5 mt-5">

//           <div className="d-flex justify-content-between w-100 mt-2">
//             <span>Profile completion</span>
//             <span>50%</span>
//           </div>
//           <div className="progress progress-bar bg-secondary progress-bar-striped progress-bar-animated" role="progressbar">
//             <span className="progress-bar progress-bar-striped progress-bar-animated w-50">50%</span>
//           </div>

//           <div className="d-flex w-100 m-3">
//             <button className="btn btn-border-secondary border rounded-circle d-flex justify-content-center align-items-center mt-3 p-4 me-3">
//               <i className="fa-regular fa-camera text-white">
//                 <input
//                   type="file"
//                   name="photo"
//                   id="photo"
//                   className="position-absolute top-0 start-0 w-50 h-25"
//                   style={{ opacity: 0, cursor: "pointer" }}
//                 />
//               </i>
//             </button>
//             <div className="d-flex flex-column justify-content-center align-items-center">
//               <span className="fw-bold">Add a profile photo</span>
//               <span>Helps your QR pass feel personal.</span>
//             </div>
//           </div>

//           <div>
//             <span className="pb-2">Full Name:</span>
//             <input
//               type="text"
//               name="name"
//               value={profile.name}
//               onChange={handleChange}
//               placeholder="Enter a Name"
//               className="form-control border-primary bg-secondary mb-3"
//             />

//             <span className="pb-2">Phone Number:</span>
//             <input
//               type="text"
//               name="phone"
//               value={profile.phone}
//               onChange={handleChange}
//               placeholder="xxxxxxxx"
//               className="form-control border-primary bg-secondary mb-3"
//             />

//             <span className="pb-2">Email:</span>
//             <input
//               type="text"
//               name="email"
//               value={profile.email}
//               onChange={handleChange}
//               placeholder="abc@123"
//               className="form-control border-primary bg-secondary mb-3"
//             />

//             <span className="pb-2">Address:</span>
//             <input
//               type="text"
//               name="address"
//               value={profile.address}
//               onChange={handleChange}
//               placeholder="City,State"
//               className="form-control border-primary bg-secondary mb-3"
//             />

//             <div onClick={Save} className="d-flex justify-content-center">
//               <button className="btn btn-primary m-3 border-secondary w-50">
//                 Save and Continue
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Profile;


import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile({ profile, setProfile }) {
    const navigate = useNavigate();

    const [isEditing] = useState(profile.name !== "");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfile({ ...profile, photo: reader.result }); // base64 string
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        if (
            profile.name === "" ||
            profile.phone === "" ||
            profile.email === "" ||
            profile.address === "" ||
            profile.photo === ""
        ) {
            alert("Fill the Details");
        } else {
            alert(isEditing ? "Profile updated!" : "Profile saved!");
            navigate("/dashboard");
        }
    };

    return (
        <>
            <div className="bg-dark vh-50 border rounded d-flex justify-content-center p-2 pt-5">
                <div className="card bg-dark ms-5 text-white border-secondary w-50 h-100 ps-5 pe-5 m-5 mt-5">

                    <div className="d-flex justify-content-between w-100 mt-2">
                        <span>Profile completion</span>
                        <span>{isEditing ? "100%" : "50%"}</span>
                    </div>
                    <div className="progress progress-bar bg-secondary progress-bar-striped progress-bar-animated" role="progressbar">
                        <span
                            className={`progress-bar progress-bar-striped progress-bar-animated ${isEditing ? "w-100" : "w-50"}`}
                        >
                            {isEditing ? "100%" : "50%"}
                        </span>
                    </div>

                    <div className="d-flex w-100 m-3">
                        <button className="btn btn-border-secondary border rounded-circle d-flex justify-content-center align-items-center mt-3 p-4 me-3 position-relative overflow-hidden">
                            {profile.photo ? (
                                <img
                                    src={profile.photo}
                                    alt="profile"
                                    style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "50%" }}
                                />
                            ) : (
                                <i className="fa-regular fa-camera text-white"></i>
                            )}
                            <input
                                type="file"
                                name="photo"
                                id="photo"
                                accept="image/*"
                                onChange={handlePhotoChange}
                                className="position-absolute top-0 start-0 w-100 h-100"
                                style={{ opacity: 0, cursor: "pointer" }}
                            />
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
                            <button className="btn btn-primary m-3 border-secondary w-50">
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