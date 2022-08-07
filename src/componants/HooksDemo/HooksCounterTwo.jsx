import React, { useState } from 'react'

function HooksCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            count: {count}
            <button onClick={() => setCount(initialCount)}>Clear</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive}>increment Five</button>
        </div>
  )
}

export default HooksCounterTwo
