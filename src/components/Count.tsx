import React from 'react'
interface ICountProps{
    label: number;
}
export default function Count({label}:ICountProps) {
    return (
        <div>
            <h3>{label}</h3>
        </div>
    )
}
