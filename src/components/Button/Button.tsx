import React from "react";
import {installRipple} from '../index'

import {Spinner} from "../index";

import './Button.css'


type type= 'submit' | 'reset' | 'button'
type variant= 'primary' | 'secondary'

interface ButtonProps{
    href?:string
    text?:string
    action?:React.MouseEventHandler<HTMLButtonElement> | undefined
    disabled?:boolean
    loading?:boolean
    icon?:React.ReactNode
    type?:type
    variant?:variant
    styles?:{}
    rippleColor?:'string'
    rippleTimeout?:number
}



const Button:React.FC<ButtonProps>=(props)=>{
    const {
        href,
        text ,
        action,
        loading = false,
        disabled,
        icon,
        type='button',
        variant='primary',
        styles,
        rippleColor ='black',
        rippleTimeout =400
    } = props

    const extraClasses = disabled?'disabled':''

    const Icon = loading?<Spinner/>:icon

    if(href){
        return(

                <button 
                onMouseDown={({ target, nativeEvent }) =>
                        installRipple({
                            clickedElement: target,
                            clickPosition: {
                            top: nativeEvent.offsetY,
                            left: nativeEvent.offsetX
                            },
                            options:{
                                'color':rippleColor,
                                duration:rippleTimeout
                            }
                        })
            }
                    style={{...styles}}
                    className="primary_button">
                    <a href={href}>
                        {text}
                        {Icon}
                    </a>
                </button>

        )
    }

    if(variant==='primary'){
        return(

                <button
                    style={{...styles}}
                    className={`primary_button ${extraClasses}`}
                    type={type}
                    disabled={disabled || loading}
                    onClick={action}
                    onMouseDown={({ target, nativeEvent }) =>
                        installRipple({
                            clickedElement: target,
                            clickPosition: {
                            top: nativeEvent.offsetY,
                            left: nativeEvent.offsetX
                            },
                            options:{
                                'color':rippleColor,
                                duration:rippleTimeout
                            }
                        })
            }
                >
                    {text}
                    {Icon}
                </button>
        )
    }

    return(
        
                <button
                    style={{...styles}}
                    className={`secondary_button ${extraClasses}`}
                    type={type}
                    disabled={disabled || loading}
                    onClick={action}
                    onMouseDown={({ target, nativeEvent }) =>
                        installRipple({
                            clickedElement: target,
                            clickPosition: {
                            top: nativeEvent.offsetY,
                            left: nativeEvent.offsetX
                            },
                            options:{
                                'color':rippleColor,
                                duration:rippleTimeout
                            }
                        })}
                >
                    {text}
                    {Icon}
                </button>
    )
}

export default Button;