import React from 'react'
import { useState } from 'react';

export const Calculator = () => {
    const [result, setResult] = useState("");

    const handleClick = (value) => {
        setResult(result.concat(value.target.name));
    };

    const Clear = () => {
        setResult("");
    };

    const backspace = () => {
        setResult(result.slice(0, -1));
    };

    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (err) {
            setResult("Error");
        }
    };

    const handleDecimal = () => {
        if (!result.includes('.')) {
            setResult(result.concat('.'));
        }
    };

    const handlePercentage = () => {
        setResult((parseFloat(result) / 100).toString());
    };



    return (
        
            <div className="container">
           <h2 id="text">Let's do some MATH!</h2>
            <div  className="calculator">
                <form>
                    <input type="text" value={result} id="result-display" readOnly />
                </form>
                <div className="keypad">
                    <button className="clear" onClick={Clear}>
                        AC
                    </button>
                    <button className="bkspc" onClick={backspace}>
                        ⌫
                    </button>
                    <button name="/" className="oper" onClick={handleClick}>
                        &divide;
                    </button>
                    <button name="7" onClick={handleClick}>
                        7
                    </button>
                    <button name="8" onClick={handleClick}>
                        8
                    </button>

                    <button name="*" className="oper" onClick={handleClick}>
                        &times;
                    </button>
                    <button name="9" onClick={handleClick}>
                        9
                    </button>

                    <button name="4" onClick={handleClick}>
                        4
                    </button>
                    <button name="-" className="oper" onClick={handleClick}>
                        &ndash;
                    </button>
                    <button name="5" onClick={handleClick}>
                        5
                    </button>
                    <button name="6" onClick={handleClick}>
                        6
                    </button>
                    <button name="+" className="oper" onClick={handleClick}>
                        +
                    </button>
                    <button name="1" onClick={handleClick}>
                        1
                    </button>
                    <button name="2" onClick={handleClick}>
                        2
                    </button>
                    <button name="." className="oper" onClick={handleDecimal}>
                        .
                    </button>

                    <button name="0" onClick={handleClick}>
                        0
                    </button>
                    <button name="3" onClick={handleClick}>
                        3
                    </button>
                    <button className="oper" onClick={handlePercentage}>
                        %
                    </button>
                    <button className="equal" onClick={calculate}>
                        =
                    </button>
                </div>
                </div>
            </div>


    )
}
