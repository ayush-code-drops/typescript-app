import React from "react"


interface IButtonProps{
    label: string;
    onClick: () => void;
}

export function Button({ label, onClick }: IButtonProps) {
    return (
        <button onClick={onClick}>
{label}
        </button>
    )
}