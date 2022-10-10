import React, {useState} from "react";

function Counter(){
    const [number, setNumber] = useState(0);

    const Increase = () => {
        setNumber(prevNumber => prevNumber + 1);
    }

    const Decrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    }

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={Increase}>+1</button>
            <button onClick={Decrease}>-1</button>
        </div>
    );
}

export default Counter;