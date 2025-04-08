import { useState } from 'react'

export const useCounter = (initialCount = 0,value) => {
    const [count, setCount] = useState(initialCount);

    const doIncrement = () => {
        setCount(count+value);
    }
    const doDecrement = () => {
        setCount(count-value);
    }
    const doreset = () => {
        setCount(initialCount);
    }

    return [count,doIncrement,doDecrement,doreset];
}
