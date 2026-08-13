function EventHandling() {
    function handleButtonClick(event) {
        alert("Button clicked!");

    }
    function handleWelcomeUser(name){
        console.log(`Welcome, ${name}!`);
    }

    return (
        <>
            <button className = "btn btn-primary" onClick= { handleButtonClick } >
             Click me</button>

             <button className = "btn btn-primary"  onClick={(event) => handleButtonClick(event)} >
             Click me 2</button>

             <button className = "btn btn-primary" onClick= {(event) => console.log(event)} >
             Inline Function Event</button>

             <button className = "btn btn-primary" onClick= {() => alert("Inline event function clicked!")} >
             Inline Array Function</button>

             <button className = "btn btn-primary"  onClick={() => handleWelcomeUser("anjali")} >
             Welcome User</button>

        </>
    )
};
export default EventHandling;