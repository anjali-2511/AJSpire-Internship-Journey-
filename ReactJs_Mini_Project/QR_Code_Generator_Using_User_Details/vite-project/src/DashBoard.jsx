
// function DashBoard() {
//     return (
//         <>
//             <div className="bg-dark vh-100  border rounded d-flex justify-content-center">
//                 <div className="card bg-dark ms-5 text-white border-0 w-100 h-100  d-flex flex-column p-4">

//                     <div className="card flex-row bg-dark border-dark gap-5 m-5">

//                         <div className="card bg-dark text-white border-0 w-100 h-100 ms-5 me-5 p-3 mt-3">

//                                 <h3 className="pt-1 text-primary">Your details</h3>
//                                 <button className="btn btn-border-secondary border rounded-circle d-flex justify-content-center w-25 h-25 align-items-center"></button>

//                             <h1 className="ps-2">Anjali Shinde</h1>
//                             <span className="text-secondary ps-3">Phone</span>
//                             <h4 className="p-3">+917776028508</h4>
//                             <span className="text-secondary ps-3">Email</span>
//                             <h4 className="p-3">anjali@123</h4>

//                             <div className="d-flex ms-2"> 
//                                 <button className="btn btn-dark border-primary w-25 gap-2 mt-2 me-3 bg-success"> <i className="fa-regular fa-pen-to-square"></i> Edit</button>
//                                 <button className="btn btn-dark border-primary w-25 gap-2 mt-2 bg-danger"> <i class="fa-solid fa-trash"></i> Delete</button>

//                                 <button className="btn btn-dark border-primary d-none w-25 gap-2 mt-2"> <i class="fa-solid fa-pen-nib"></i> Update</button>
//                             </div>


//                         </div>

//                         <div className="card bg-black text-center text-white border-secondary w-100 h-75 ms-5 me-5 mt-5 p-3">
//                             <h3 className="pt-1">QR Code</h3>
//                             <div className="card bg-white justify-content-center w-50 h-50 mt-2 ms-auto me-auto border border-primary"> 
//                                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/250px-QR_code_for_mobile_English_Wikipedia.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" alt="" width="100%" height="100%"/>
//                                 </div>

//                             <div className="w-100  mt-4"> 
//                                 <button className="btn btn-primary px-4 py-2 mt-3 me-3 pe-auto ps-auto w-50"><i className="fa-solid fa-download"></i>Download</button>
//                                 <button className="btn btn-dark border-white px-4 py-2   text-center mt-2 w-50 mb-5 ms-auto me-2"><i className="fa-solid fa-print" ></i> Print</button>
//                             </div>




//                         </div>

//                     </div>








//                 </div>
//             </div>
//         </>
//     )

// };
// export default DashBoard;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function DashBoard({ profile, setProfile }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editData, setEditData] = useState(profile); // local draft while editing
//   const navigate = useNavigate();

//   const handleEditClick = () => {
//     setEditData(profile); // load current profile into the edit form
//     setIsEditing(true);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditData({ ...editData, [name]: value });
//   };

//   const handleUpdate = () => {
//     setProfile(editData); // push edited draft back into shared state
//     setIsEditing(false);
//     alert("Profile updated!");
//   };

//   const handleDelete = () => {
//     const confirmDelete = window.confirm("Are you sure you want to delete your profile?");
//     if (confirmDelete) {
//       setProfile({ name: "", phone: "", email: "", address: "" });
//       navigate("/"); // send them back to fill the profile again
//     }
//   };

//   return (
//     <>
//       <div className="bg-dark vh-100 border rounded d-flex justify-content-center">
//         <div className="card bg-dark ms-5 text-white border-0 w-100 h-100 d-flex flex-column p-4">
//           <div className="card flex-row bg-dark border-dark gap-5 m-5">

//             <div className="card bg-dark text-white border-0 w-100 h-100 ms-5 me-5 p-3 mt-3">
//               <h3 className="pt-1 text-primary">Your details</h3>
//               <button className="btn btn-border-secondary border rounded-circle d-flex justify-content-center w-25 h-25 align-items-center"></button>

//               {!isEditing ? (
//                 // ---------- READ MODE ----------
//                 <>
//                   <h1 className="ps-2">{profile.name}</h1>
//                   <span className="text-secondary ps-3">Phone</span>
//                   <h4 className="p-3">{profile.phone}</h4>
//                   <span className="text-secondary ps-3">Email</span>
//                   <h4 className="p-3">{profile.email}</h4>
//                   <span className="text-secondary ps-3">Address</span>
//                   <h4 className="p-3">{profile.address}</h4>

//                   <div className="d-flex ms-2">
//                     <button
//                       onClick={handleEditClick}
//                       className="btn btn-dark border-primary w-25 gap-2 mt-2 me-3 bg-success"
//                     >
//                       <i className="fa-regular fa-pen-to-square"></i> Edit
//                     </button>
//                     <button
//                       onClick={handleDelete}
//                       className="btn btn-dark border-primary w-25 gap-2 mt-2 bg-danger"
//                     >
//                       <i className="fa-solid fa-trash"></i> Delete
//                     </button>
//                   </div>
//                 </>
//               ) : (
//                 // ---------- EDIT MODE ----------
//                 <>
//                   <input
//                     type="text"
//                     name="name"
//                     value={editData.name}
//                     onChange={handleChange}
//                     className="form-control border-primary bg-secondary mb-2"
//                   />
//                   <input
//                     type="text"
//                     name="phone"
//                     value={editData.phone}
//                     onChange={handleChange}
//                     className="form-control border-primary bg-secondary mb-2"
//                   />
//                   <input
//                     type="text"
//                     name="email"
//                     value={editData.email}
//                     onChange={handleChange}
//                     className="form-control border-primary bg-secondary mb-2"
//                   />
//                   <input
//                     type="text"
//                     name="address"
//                     value={editData.address}
//                     onChange={handleChange}
//                     className="form-control border-primary bg-secondary mb-3"
//                   />

//                   <div className="d-flex ms-2">
//                     <button
//                       onClick={handleUpdate}
//                       className="btn btn-dark border-primary w-25 gap-2 mt-2"
//                     >
//                       <i className="fa-solid fa-pen-nib"></i> Update
//                     </button>
//                   </div>
//                 </>
//               )}
//             </div>

//             <div className="card bg-black text-center text-white border-secondary w-100 h-75 ms-5 me-5 mt-5 p-3">
//               <h3 className="pt-1">QR Code</h3>
//               <div className="card bg-white justify-content-center w-50 h-50 mt-2 ms-auto me-auto border border-primary">
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/250px-QR_code_for_mobile_English_Wikipedia.svg.png"
//                   alt=""
//                   width="100%"
//                   height="100%"
//                 />
//               </div>
//               <div className="w-100 mt-4">
//                 <button className="btn btn-primary px-4 py-2 mt-3 me-3 pe-auto ps-auto w-50">
//                   <i className="fa-solid fa-download"></i> Download
//                 </button>
//                 <button className="btn btn-dark border-white px-4 py-2 text-center mt-2 w-50 mb-5 ms-auto me-2">
//                   <i className="fa-solid fa-print"></i> Print
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default DashBoard;



import { useNavigate } from "react-router-dom";

function DashBoard({ profile, setProfile }) {
    const navigate = useNavigate();

    const handleEditClick = () => {
        navigate("/profile"); // Profile page will pre-fill from the profile prop
    };

    const handleDelete = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete your profile?");
        if (confirmDelete) {
            setProfile({ name: "", phone: "", email: "", address: "" });
            navigate("/profile"); // send them to fill it out fresh
        }
    };

    return (
        <>
            <div className="bg-dark vh-100 border rounded d-flex justify-content-center">
                <div className="card bg-dark ms-5 text-white border-0 w-100 h-100 d-flex flex-column p-4">
                    <div className="card flex-row bg-dark border-dark gap-5 m-5">

                        <div className="card bg-dark text-white border-0 w-100 h-100 ms-5 me-5">
                            <h3 className="pt-1 text-primary">Your details</h3>
                            <div
                                className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center bg-secondary"
                                style={{ width: "80px", height: "80px" }}
                            >
                                {profile.photo ? (
                                    <img
                                        src={profile.photo}
                                        alt="profile"
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                ) : (
                                    <i className="fa-regular fa-user text-white fs-3"></i>
                                )}
                            </div>

                            <h1 className="ps-2">{profile.name}</h1>
                            <span className="text-secondary ps-3">Phone</span>
                            <h4 className="p-3">{profile.phone}</h4>
                            <span className="text-secondary ps-3">Email</span>
                            <h4 className="p-3">{profile.email}</h4>
                            <span className="text-secondary ps-3">Address</span>
                            <h4 className="p-3">{profile.address}</h4>

                            <div className="d-flex ms-2">
                                <button
                                    onClick={handleEditClick}
                                    className="btn btn-dark border-primary w-25 gap-2 mt-2 me-3 bg-success"
                                >
                                    <i className="fa-regular fa-pen-to-square"></i> Edit
                                </button>
                                <button
                                    onClick={handleDelete}
                                    className="btn btn-dark border-primary w-25 gap-2 mt-2 bg-danger"
                                >
                                    <i className="fa-solid fa-trash"></i> Delete
                                </button>
                            </div>
                        </div>

                        <div className="card bg-black text-center text-white border-secondary w-100 h-75 ms-5 me-5 mt-5 p-3">
                            <h3 className="pt-1">QR Code</h3>
                            <div className="card bg-white justify-content-center w-50 h-50 mt-2 ms-auto me-auto border border-primary">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/250px-QR_code_for_mobile_English_Wikipedia.svg.png"
                                    alt=""
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                            <div className="w-100 mt-4">
                                <button className="btn btn-primary px-4 py-2 mt-3 me-3 pe-auto ps-auto w-50">
                                    <i className="fa-solid fa-download"></i> Download
                                </button>
                                <button className="btn btn-dark border-white px-4 py-2 text-center mt-2 w-50 mb-5 ms-auto me-2">
                                    <i className="fa-solid fa-print"></i> Print
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashBoard;