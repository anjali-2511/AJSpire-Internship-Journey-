import profileData from "../api/profile.json";
function Profile(){
    return(
        <>
        <div className="card m-5 p-5 gap-3 border bg-secondary text-white">
            <h1 className="text-dark bolder ">PROFILE CARD</h1>
                <ol className="list-group-numbered text-dark">
                    {profileData.map((curElem) => {
                        return(
                         <li key={curElem.id}>
                              <h2>Name: {curElem.name}</h2>
                              <p>Age: {curElem.age}</p>
                              <p><strong>Greeting: {curElem.greeting}</strong></p>
                              <p>Hobbies: {curElem.hobbies.join(", ")}</p>
                               <a href={curElem.hasContactButton} target="_blank" rel="noopener noreferrer">
                                    <button class="btn btn-secondary btn-outline-dark m-3">Contact</button>
                                </a>
                        </li>
                        ) 
                    })}
                </ol>
                 </div>
        </>
    )
};
export default Profile;