import { useState } from "react";

function Form() {
    const [num, setNum] = useState(0);
    const checkAge = () => {
       setNum(num+1)
        if (num > 18) {
            alert("Valid")
        } else {
            alert("In Valid")
        }
    }
    return (
        <>
            <div class="card border-dark m-5 p3 text-center"> <form action="">
                <label class="p-2">Name:</label>
                <input type="text" value={num} onChange={(e) => {
                    setNum(e.target.value)
                }} class="p-1 w-50" placeholder="Enter a name" />

                <button onClick={() => { checkAge(); }} class="btn btn-primary m-5 ">Submit</button>
            </form>
            </div>
        </>
    )
};
export default Form;