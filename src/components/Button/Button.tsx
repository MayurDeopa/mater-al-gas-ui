import React from "react";
import {installRipple} from '../index'

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
    rippleColor?:'string'
    rippleTimeout?:number
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
        styles,
        rippleColor ='black',
        rippleTimeout =400
    } = props
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
                    {icon}
                </button>
        )
    }

    return(
        
                <button
                    style={{...styles}}
                    className={"secondary_button"}
                    type={type}
                    disabled={loading}
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
                    {icon}
                </button>
    )
}

export default Button;