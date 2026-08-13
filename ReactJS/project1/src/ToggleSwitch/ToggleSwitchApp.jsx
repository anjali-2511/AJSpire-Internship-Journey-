// import { useState } from "react";
// function ToggleSwicthApp() {
//     const [isOn, setIsOn] = useState(false);

//     const handleToggleswicth = () => {
//         setIsOn(!isOn);
//     };
//     return (
//         <>

//             <div className="toggle-switch w-50 h-100 border-dark" onclick={handleToggleswicth}>
//                 <div className="switch border-dark">
//                     <span className="switch-state  ">{isOn ? "on" : "off"}</span>
//                 </div>

//             </div>
//         </>
//     )
// };
// export default ToggleSwicthApp;


import { useState } from "react";
function ToggleSwicthApp() {
    const [isOn, setIsOn] = useState(false);

    const handleToggleswicth = () => {
        setIsOn(!isOn);
    };
    return (
        <>
            <div className="card border-dark m-5 p-0 bg-secondary">
                <div className="d-flex align-items-center justify-content-center vh-100">
                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            style={{ width: "3em", height: "1.5em", cursor: "pointer" }}
                            checked={isOn}
                            onChange={handleToggleswicth}
                        />
                        <label className="form-check-label ms-2 fs-5">
                            {isOn ? "ON" : "OFF"}
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
};
export default ToggleSwicthApp;