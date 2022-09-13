import React from 'react'
import Card from '../Card/Card'
import './Input.css'
import '../index.css'


type inputType = 'textarea' | 'text' | 'password' | 'search' | 'number' | 'url'

type inputValue = string | number

interface InputProps{
    type?:inputType
    maxWidth?:string
    autoFocus?:boolean
    action?:()=>void
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
        isValid = true,
        title = "Title",
        placeholder = 'placeholder',
        errMsg = "This is a required field"

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
                        className={`group ${!isValid && 'error_shadow'}`}>
                        <textarea
                            autoFocus={autoFocus}
                            onChange={action}
                            className={`input`}
                            value={value}
                            disabled={disabled}   
                            required={required}       
                        />
                        <p className={`label`}>{placeholder || title}</p>
                    </div>
                    <React.Fragment>
                    {!isValid &&<p className={'error_message'}>{errMsg || `${placeholder} is required`}</p>}
                    </React.Fragment>
            </Card>
        )
    }
    return(
        <Card
            styles={containerStyles}
        >
            <div 
                    className={`group ${!isValid && 'error_shadow'}`}>
                    <input
                        type={type}
                        autoFocus={autoFocus}
                        onChange={action}
                        className={`input`}
                        value={value}
                        disabled={disabled}   
                        required={required}       
                    />
                    <p className={`label`}>{placeholder || title}</p>
                </div>
                <React.Fragment>
                {!isValid &&<p className={'error_message'}>{errMsg || `${placeholder} is required`}</p>}
                </React.Fragment>
        </Card>
    )
}

export default Input;