import React, { useState } from 'react'

export default function Counter() {
    const [number,setNumber] = useState(0);
    const handleIncrease = () => {
        setNumber(number+1);
    }
    function handleDecrease() {
        setNumber(number-1);
    }

    return (
    <div>
        <h1>Counter = {number}</h1>
        <button onClick={handleIncrease} >Increase</button>
        <button on onClick={handleDecrease} >Decrease</button>
    </div>
  )
}
