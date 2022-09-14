import React from 'react'
import Card from '../Card/Card'
import './Input.css'
import '../index.css'




interface InputProps extends HTMLInputElement{
    maxWidth?:string
    isValid?:boolean | (()=>boolean) 
    placeholderText?:string
    errMsg?:string
}

const Input:React.FC<InputProps> =(props)=>{

    const {
        type,
        maxWidth,
        isValid = true,
        placeholderText = 'placeholder',
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
                            className={`input`}      
                        />
                        <p className={`label`}>{placeholderText }</p>
                    </div>
                    <React.Fragment>
                    {!isValid &&<p className={'error_message'}>{errMsg || `${placeholderText} is required`}</p>}
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
                        className={`input`}    
                    />
                    <p className={`label`}>{placeholderText}</p>
                </div>
                <React.Fragment>
                {!isValid &&<p className={'error_message'}>{errMsg || `${placeholderText} is required`}</p>}
                </React.Fragment>
        </Card>
    )
}

export default Input;