 import { useState } from "react";
 function DerivedState() {
     const [users, setUsers] = useState([
         { name: "Rahul", age: 20 },
         { name: 'Rohit', age: 35 },
         { name: 'Ramesh', age: 15 },
         { name: 'Rakesh', age: 25 },
     ]);

    //  Derived Sate: count of users:
    console.log(users);
    const userCount = users.length;   //userCount variable is a Derived State

    //  Derived Sate:  Average age of users:
    const AverageAge = (users.reduce((accum, curElem)=> accum + curElem.age, 0)) / userCount;


     return (
         <>
             <div className="card m-5 p-5 gap-3 border bg-success text-white">
                 <h1>Users List</h1>
                 <ol className="list-group-numbered">
                     {users.map((curElem) => {
                         return (
                             <li key={curElem.id}>
                                 <div>
                                     <h2>Name: {curElem.name}</h2>
                                     <p>Age: {curElem.age}</p>
                                     <p>Total Users: {userCount}</p>
                                     <p>Average Age of Users: {AverageAge}</p>
                                 </div>
                             </li>
                         )
                     })}
                 </ol>
             </div>
         </>
     )
 };
 export default DerivedState;