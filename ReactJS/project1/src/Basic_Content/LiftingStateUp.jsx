import { useState } from "react";

function LiftingStateUp() {
    const [inputValue , SetInputValue] = useState("");
    return(
        <>
        <InputComponent inputValue={inputValue} SetInputValue={SetInputValue}/>
        <DisplayComponent inputValue={inputValue} />
        
        </>
    );
};
export  default LiftingStateUp;
 
 
const InputComponent = ({inputValue, SetInputValue}) => {
    return(
        <>
        <div className="card m-5 p-2 border-dark"> <input type="text" placeholder="Enter Your Name" value={inputValue} onChange={(e) => SetInputValue(e.target.value)}>
        </input>
        </div>
        </>
    )
};
 

const DisplayComponent = ({inputValue}) => {
    return(
        <>
        <h3 className="pr-5 text-success">The current input value is: {inputValue}</h3>
        </>
    )
};
 
export {InputComponent, DisplayComponent};

 
