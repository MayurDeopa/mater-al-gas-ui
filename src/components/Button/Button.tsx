import React from "react";

import './Button.css'


type variant= 'primary' | 'secondary'

interface ButtonProps extends HTMLButtonElement{
    href?:string
    text?:string
    loading?:boolean
    icon?:React.ReactNode
    variant?:variant

    
}



const Button:React.FC<ButtonProps>=(props)=>{
    const {
        href,
        text ="Button",
        loading = false,
        icon,
        variant='primary',
    } = props
    if(href){
        return(
            <button 
                className="primary_button">
                <a href={href}>
                    {text}
                    {icon}
                </a>
            </button>
        )
    }

    if(variant==='primary'){
        return(
            <button
                className={"primary_button"}
                disabled={loading}
            >
                {text}
                {icon}
            </button>
        )
    }

    return(
        <button
                className="secondary_button"
                disabled={loading}
            >
                {text}
                {icon}
            </button>
    )
}

export default Button;