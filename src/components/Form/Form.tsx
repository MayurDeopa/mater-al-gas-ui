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
        title = "Form",
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
            <h2 className="form_header">{title}</h2>  
            {children}
        </form>
    )
}

export default Form;