import { useRef } from "react";

function UseRef() {
    const username = useRef(null);
    const password = useRef(null);
    console.log(username)


    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(username.current.value, password.current.value);


    };
    return (
        <>
            <form onSubmit={handleFormSubmit} className="card m-3 p-3 border-dark">
                Name: <input className="form-control" type="text" id="username" ref={username} /><br /><br />
                Password: <input className="form-control" type="text" id="password" ref={password} />
                <br /><br />
                <button className="btn btn-primary">Submit</button>
            </form>
        </>
    )
};
export default UseRef;