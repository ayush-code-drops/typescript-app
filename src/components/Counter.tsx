import React, { useState } from 'react'
import { Button } from './Button'
import Count from './Count'

export default function Counter() {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count+1)
    }
    return (
        <div>
            <Count label={count} /> 
            <Button label="+" onClick={()=>setCount(count+1)}></Button>
            <Button label="-" onClick={()=>count>0?setCount(count-1):setCount(count)}></Button>

        </div>
    )
}
