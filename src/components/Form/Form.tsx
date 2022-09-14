import React from "react"

import './Form.css'

interface FormProps {
    title?:string
    children?:JSX.Element | JSX.Element[]
    styles?:{}
    action?:()=>void

}

const Form:React.FC<FormProps> =(props)=>{

    const {
        title ,
        children,
        styles,
        action = ()=>alert("Submit")
    } = props

    const onSubmit = (e:React.FormEvent)=>{
        e.preventDefault()
        action()
    }

    return(
        <form
            className="form_wrapper"
            onSubmit={onSubmit}
            style={{...styles}}
        >
           {title &&  <h3 className="form_header">{title}</h3>}  
            {children}
        </form>
    )
}

export default Form;