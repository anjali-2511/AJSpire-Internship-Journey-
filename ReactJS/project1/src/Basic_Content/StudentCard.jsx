function StudentCard(props) {
    const borderClass = props.curElem.marks >= 60 ? "border-success" : "border-danger";

    return (
        <div className="col-6 p-2">
            <div className={`card m-1 p-3 d-flex justify-content-between border border-3 ${borderClass}`}>
                <h2>Name: {props.curElem.name}</h2>
                <h3>Roll No: {props.curElem.rollNo}</h3>
                <h3>Course Name: {props.curElem.course}</h3>
                <h3>Marks: {props.curElem.marks}</h3>
            </div>
        </div>
    )
};
export default StudentCard;