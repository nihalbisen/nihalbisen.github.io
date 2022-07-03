import { useState } from "react";
export default function Quantity(){
    let [num, setNum] = useState(1);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }
    return(
        <div className="quantity">
            <button type="button" onClick={decNum}>-</button>
            <input type="text" value={num} onChange={handleChange} />
            <button type="button" onClick={incNum}>+</button>
        </div>
    );
}