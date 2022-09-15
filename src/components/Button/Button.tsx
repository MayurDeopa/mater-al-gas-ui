import React from "react";

import './Button.css'


type type= 'submit' | 'reset' | 'button'
type variant= 'primary' | 'secondary'

interface ButtonProps{
    href?:string
    text?:string
    action?:React.MouseEventHandler<HTMLButtonElement> | undefined
    loading?:boolean
    icon?:React.ReactNode
    type?:type
    variant?:variant
    styles?:{}
    
}



const Button:React.FC<ButtonProps>=(props)=>{
    const {
        href,
        text ="BUTTON",
        action,
        loading = false,
        icon,
        type='button',
        variant='primary',
        styles
    } = props
    if(href){
        return(
            <button 
                style={{...styles}}
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
            style={{...styles}}
                className={"primary_button"}
                type={type}
                disabled={loading}
                onClick={action}
            >
                {text}
                {icon}
            </button>
        )
    }

    return(
        <button
                style={{...styles}}
                className="secondary_button"
                type={type}
                disabled={loading}
                
                onClick={action}
            >
                {text}
                {icon}
            </button>
    )
}

export default Button;