import React from 'react'
import {Card} from '../index'


import './Input.css'
import '../index.css'


type inputType = 'textarea' | 'text' | 'password' | 'search' | 'number' | 'url'|'date'

type inputValue = string | number

interface InputProps{
    type?:inputType
    maxWidth?:string
    autoFocus?:boolean
    action?:React.FormEventHandler<HTMLInputElement> |undefined
    value?:inputValue
    label?:string
    disabled?:boolean
    required?:boolean
    isValid?:boolean | (()=>boolean) 
    title?:string
    placeholder?:string
    errMsg?:string
}

const Input:React.FC<InputProps> =(props)=>{
    

    const {
        type = "text",
        maxWidth,
        autoFocus = false,
        value,
        action,
        disabled = false,
        required = true,
        placeholder = "Text",

    } = props



    const containerStyles ={
        flexDirection:'column',
        maxWidth:maxWidth,
        boxShadow:'none'
     
     }

    if(type==='textarea'){
        return(
            <Card
                styles={containerStyles}
            >
                <div 
                        className={`group`}>
                        <textarea
                            className={`input`}
                            value={value}
                            disabled={disabled}   
                            required={required}  
                            placeholder={placeholder}     
                        />
                    </div>
            </Card>
        )
    }
    return(
        <Card
            styles={containerStyles}
        >
            <div 
                    className={`group `}>
                    <input
                        type={type}
                        autoFocus={autoFocus}
                        onChange={action}
                        className={`input`}
                        value={value}
                        disabled={disabled}   
                        required={required}   
                        placeholder={placeholder}       
                    />
                </div>
        </Card>
    )
}

export default Input;