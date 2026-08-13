// UseSate Hook:
// The useState hook is a built-in React hook that allows functional components to have state. It takes an initial state value as an argument and returns an array with two elements: the current state value and a function to update that state value. When the state is updated using the provided function, React will re-render the component to reflect the new state. This is essential for creating interactive components that respond to user input or other events.
import { useState } from "react";
function UseState(){
    // Without using useState, the value of count will not be updated and the component will not re-render when the button is clicked. This is because React does not track changes to regular variables, so it will not know that the value of count has changed and will not trigger a re-render of the component. As a result, the displayed value of count will always remain 0, even when the button is clicked multiple times.
    const [count, setCount] = useState(0);
    const handleButtonClick = () => {
         setCount(() => count + 1);
    };
    return (
        <>
        <div className="text-center"> <h1>{count}</h1>
        <button className="btn btn-success" onClick={handleButtonClick} >Increment</button>
        </div>
        </>
    )

};
export default UseState;