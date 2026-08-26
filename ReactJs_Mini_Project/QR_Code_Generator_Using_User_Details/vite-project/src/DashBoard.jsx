import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";

function DashBoard({ profile, setProfile, setIsEditing }) {
    const navigate = useNavigate();

    const qrValue = `Name: ${profile.name}
Phone: ${profile.phone}
Email: ${profile.email}
Address: ${profile.address}`;

    const handleEditClick = () => {
        setIsEditing(true);
        navigate("/profile");
    };

    const handleDelete = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete your profile?");
        if (confirmDelete) {
            setProfile({ name: "", phone: "", email: "", address: "" });
            setIsEditing(false);
            navigate("/profile");
        }
    };

    const handleDownload = () => {
        const svg = document.getElementById("profile-qr-svg");
        if (!svg) return;

        const svgData = new XMLSerializer().serializeToString(svg);
        const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
        const url = URL.createObjectURL(svgBlob);

        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement("canvas");
            const padding = 20;
            canvas.width = img.width + padding * 2;
            canvas.height = img.height + padding * 2;

            const ctx = canvas.getContext("2d");
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, padding, padding);

            URL.revokeObjectURL(url);

            const pngUrl = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = pngUrl;
            link.download = `${profile.name || "profile"}-qr.png`;
            link.click();
        };
        img.src = url;
    };

    const handlePrint = () => {
        const svg = document.getElementById("profile-qr-svg");
        if (!svg) return;

        const svgData = new XMLSerializer().serializeToString(svg);
        const printWindow = window.open("", "_blank", "width=400,height=500");
        printWindow.document.write(`
        <html>
            <head><title>Print QR - ${profile.name}</title></head>
            <body style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;margin:0;">
                <h3>${profile.name}</h3>
                ${svgData}
            </body>
        </html>
    `);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
            printWindow.print();
            printWindow.close();
        }, 250);
    };

    return (
        <>
            <div className="bg-dark vh-100 border rounded d-flex justify-content-center">
                <div className="card bg-dark ms-5 text-white border-0 w-100 h-100 d-flex flex-column p-4">
                    <div className="card flex-row bg-dark border-dark gap-5 m-5">

                        <div className="card bg-dark text-white border-0 w-100 h-100 ms-5 me-5">
                            <h3 className="pt-1 text-primary">Your details</h3>

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

                        <div className="card bg-black text-center text-white border-secondary w-100 h-75 ms-5 me-5 mt-5 p-5 pt-2">
                            <h3 className="">QR Code</h3>

                            <div
                                className="card bg-white justify-content-center align-items-center mt-1 ms-auto me-auto border border-primary p-3"
                                style={{ width: "220px", height: "220px" }} >
                                <QRCode id="profile-qr-svg" value={qrValue} size={300} />
                            </div>

                            <div className="w-100 mt-2">
                                <button onClick={handleDownload} className="btn btn-primary px-4 py-2 mt-3 me-3 pe-auto ps-auto w-50">
                                    <i className="fa-solid fa-download"></i> Download
                                </button>
                                <button onClick={handlePrint} className="btn btn-dark border-white px-4 py-2 text-center mt-2 w-50 mb-5 ms-auto me-2">
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