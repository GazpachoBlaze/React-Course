import React, {useEffect, useState} from "react"

function Counter() {

    const [count, setCount] = useState(0);
    const [counting, setCounting] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }


    useEffect(() => {
        document.title = `Count: ${counting} ${color}`;
    });

    const [color, setColor] = useState("green");

    function addCount() {
        setCounting(c => c + 1);

    }

    function subtractCount() {
        setCounting(c => c - 1);

    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }

    return (
        <>

        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Decrease</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increase</button>
        </div>

        <div>
            <p style={{color: color}}>Count: {counting} </p>
            <button className="addCounter" onClick={addCount}>Add</button>
            <button className="subtractCounter" onClick={subtractCount}>Subtract</button>
            <br/>
            <button onClick={changeColor}>Change Color</button>
        </div>
        
        </>
        
    );



}


export default Counter