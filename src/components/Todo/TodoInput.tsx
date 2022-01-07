import React, { useState } from 'react'
interface ITodoInput{
   
    onClick: (q:string) => void;
}
export default function TodoInput({onClick}: ITodoInput) {
    const [query,setQuery]=useState<string>("")
    return (
        <div>
            <input type="text" placeholder="add something" onChange={(e) => setQuery(e.target.value)} value={query} />  
            <button onClick={() => onClick(query)}>Add</button>
            
        </div>
    )
}
