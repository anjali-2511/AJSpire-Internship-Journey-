import { useState } from "react";
function Calculator() {
    const [num, setNum] = useState("");
    const one = () => {
        setNum(num + document.getElementById("1").innerText);

    }
    const two = () => {
        setNum(num + document.getElementById("2").innerText);

    }
    const three = () => {
        setNum(num + document.getElementById("3").innerText);
    }
    const four = () => {
        setNum(num + document.getElementById("4").innerText);
    }
    const five = () => {
        setNum(num + document.getElementById("5").innerText);
    }
    const six = () => {
        setNum(num + document.getElementById("6").innerText);
    }
    const seven = () => {
        setNum(num + document.getElementById("7").innerText);
    }
    const eight = () => {
        setNum(num + document.getElementById("8").innerText);
    }
    const nine = () => {
        setNum(num + document.getElementById("9").innerText);
    }
    const zero = () => {
        setNum(num + document.getElementById("0").innerText);
    }

    const add = () => {
        setNum(num + "+");
    }
    const sub = () => {
        setNum(num + "-");
    }
    const multi = () => {
        setNum(num + "*");
    }
    const div = () => {
        setNum(num + "/");
    }
    const mod = () => {
        setNum(num + "%");
    }
    const dot = () => {
        setNum(num + ".");
    }
    const addsub = () => {
        if (num.charAt(0) === "-") {
            setNum(num.substring(1));
        } else {
            setNum("-" + num);
        }
    }
    const back = () => {
        setNum(num.slice(0, -1));
    }
    const equal = () => {
        try {
            setNum(eval(num));
        } catch (error) {
            setNum("Error");
        }
    }
    const clear = () => {
        setNum("");
    }


    return (
        <>
            <h1 class="text-center">Calculator</h1>
            < div class="card w-25 m-auto  text-center text-dark bg-light border border-dark rounded">


                <div>
                    <div class="w-50 m-4  text-center text-dark">
                        <input type="text" value={num} onChange={(e) => {
                            setNum(e.target.value)
                        }} class="p-2  w-100 bg-outline-info rounded form-control" />

                    </div>
                    <table border='2' class="bg-light w-25 m-auto text-center border-0 text-white">
                        <tr class=" ">
                            <td><button type="btn" id="c" class="btn btn-dark text-primary rounded-circle p-4 fs-6" onClick={() => { clear(); }}>AC</button></td>
                            <td><button type="btn" id="b" class="btn btn-dark text-primary rounded-circle p-4 fs-6" onClick={() => { back(); }}><i class="fa-sharp-duotone fa-solid fa-delete-left"></i></button></td>
                            <td><button type="btn" id="as" class="btn btn-dark text-primary rounded-circle p-4 fs-6" onClick={() => { addsub(); }}>+/-</button></td>
                            <td><button type="btn" id="d" class="btn btn-dark text-primary rounded-circle p-4 fs-6" onClick={() => { div(); }}>/</button></td>
                        </tr>


                        <tr class=" ">
                            <td><button type="btn" id="7" class="btn btn-outline-primary rounded-circle p-4 fs-6" onClick={() => { seven(); }} >7</button></td>
                            <td><button type="btn" id="8" class="btn btn-outline-primary rounded-circle p-4 fs-6" onClick={() => { eight(); }} >8</button></td>
                            <td><button type="btn" id="9" class="btn btn-outline-primary rounded-circle p-4 fs-6" onClick={() => { nine(); }} >9</button></td>
                            <td><button type="btn" id="m" class="btn btn-dark text-primary rounded-circle p-4 fs-6" onClick={() => { multi(); }}>*</button></td>
                        </tr>


                        <tr class=" ">
                            <td><button type="btn" id="4" class="btn btn-outline-primary rounded-circle p-4 fs-6" onClick={() => { four(); }} >4</button></td>
                            <td><button type="btn" id="5" class="btn btn-outline-primary rounded-circle p-4 fs-6" onClick={() => { five(); }} >5</button></td>
                            <td><button type="btn" id="6" class="btn btn-outline-primary rounded-circle p-4 fs-6" onClick={() => { six(); }}>6</button></td>
                            <td><button type="btn" id="s" class="btn btn-dark text-primary rounded-circle p-4 fs-6" onClick={() => { sub(); }} >-</button></td>
                        </tr>
                        <tr class="">
                            <td ><button type="btn" id="1" class="btn btn-outline-primary rounded-circle p-4 fs-6" onClick={() => { one(); }}>1</button></td>
                            <td><button type="btn" id="2" class="btn btn-outline-primary rounded-circle p-4 fs-6" onClick={() => { two(); }}>2</button></td>
                            <td><button type="btn" id="3" class="btn btn-outline-primary rounded-circle p-4 fs-6" onClick={() => { three(); }}>3</button></td>
                            <td><button type="btn" id="a" class="btn btn-dark  text-primary rounded-circle p-4 fs-6" onClick={() => { add(); }}>+</button></td>
                        </tr>
                        <tr class="">
                            <td ><button type="btn" id="mod" class="btn btn-outline-primary  rounded-circle p-4 fs-6" onClick={() => { mod(); }}>%</button></td>
                            <td><button type="btn" id="0" class="btn btn-outline-primary rounded-circle p-4 fs-6" onClick={() => { zero(); }}>0</button></td>
                            <td><button type="btn" id="dot" class="btn btn-outline-primary rounded-circle p-4 fs-6" onClick={() => { dot(); }}>.</button></td>
                            <td><button type="btn" id="=" class="btn btn-info rounded-circle p-4 fs-6" onClick={() => { equal(); }}>=</button></td>
                        </tr>

                    </table>
                </div>
            </div>
        </>
    )
};
export default Calculator;