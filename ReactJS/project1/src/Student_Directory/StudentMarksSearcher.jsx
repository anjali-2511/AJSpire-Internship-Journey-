{/*Project 1: "Student Directory"  

What it does: A page that displays a list of students as cards.

Structure to build:

App component holds an array of student objects (name, roll no, course, marks)
StudentList component receives the array as props and loops (.map()) over it
StudentCard component receives one student's data as props and displays it
Use a Fragment (<>...</>) inside StudentCard to group elements without adding extra <div>s

Expected output:

A grid/list of cards, each showing name, roll number, course, and marks
Each card should have a unique key prop (no console warning)
Bonus: color the marks green if ≥ 60, red if < 60 (this previews conditional rendering, useful for your later useState topics)*/}



import data from "../api/miniprojectdata.json"
import StudentCard from "../Basic_Content/StudentCard";
import { useState } from "react";

function MiniProject() {
    const [search, setSearch] = useState("");

    // sort so students whose marks match the search text come first
    const sortedData = [...data].sort((a, b) => {
        const aMatch = a.marks.toString().includes(search);
        const bMatch = b.marks.toString().includes(search);
        if (aMatch && !bMatch) return -1;
        if (!aMatch && bMatch) return 1;
        return 0;
    });

    return (
        <>
            <div className="card m-4 p-3 border bg-light rounded">
                <input
                    type="text"
                    className="form-control w-50 h-50 m-5 p-3 bg-light border-dark"
                    placeholder="Search by marks"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div className="d-flex flex-wrap">
                    {sortedData.map((curElem) => {
                        return (
                            <StudentCard key={curElem.id} curElem={curElem} />
                        )
                    })}
                </div>
            </div>
        </>
    )
};
export default MiniProject;