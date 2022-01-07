import React, { useState } from 'react'
import TodoInput from './TodoInput'
interface Todos{
    title: string;
    id: number;
    status: boolean;
}
export default function Todo() {
    const [data, setData] = useState<Todos[]>([])
    const handleClick = (title:string) => {
        const payload: Todos = {
            title,
            id: data.length + 1,
            status:false
        }
        setData([...data,payload])
}
    
    return (
        <div>
            <TodoInput onClick={handleClick} />
            {data?.map((item) => {
                return (
                    <div>
                       { `${item.title} - ${item.status} - ${item.id}`}
                    </div>
                )
            })}
        </div>
    )
}

