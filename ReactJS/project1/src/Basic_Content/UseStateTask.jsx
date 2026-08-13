// Without using UseSate: 
// const users = [
//     { name: "Rahul", age: 20 },
//     { name: 'Rohit', age: 35 },
//     { name: 'Ramesh', age: 15 },
//     { name: 'Rakesh', age: 25 },
// ];
// function UseStateTask() {
//     return (
//         <>
//             <div className="card m-5 p-5 gap-3 border bg-black text-white">
//                  <h1>Users List</h1>
//                 <ol className="list-group-numbered">
//                     {users.map((curElem) => {
//                         return (   
//                         <li key={curElem.id}>

//                             <div>
//                                 <h2>Name: {curElem.name}</h2>
//                                 <p>Age: {curElem.age}</p>
//                             </div>
//                         </li>
//                         )

//                     })}
//                 </ol>
//             </div>
//         </>
//     )
// };
// export default UseStateTask;



// With using UseSate:
import { useState } from "react";
function UseStateTask() {
    const [users, setUsers] = useState([
        { name: "Rahul", age: 20 },
        { name: 'Rohit', age: 35 },
        { name: 'Ramesh', age: 15 },
        { name: 'Rakesh', age: 25 },
    ]);
    return (
        <>
            <div className="card m-5 p-5 gap-3 border bg-black text-white">
                <h1>Users List</h1>
                <ol className="list-group-numbered">
                    {users.map((curElem) => {
                        return (
                            <li key={curElem.id}>
                                <div>
                                    <h2>Name: {curElem.name}</h2>
                                    <p>Age: {curElem.age}</p>
                                </div>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </>
    )
};
export default UseStateTask;