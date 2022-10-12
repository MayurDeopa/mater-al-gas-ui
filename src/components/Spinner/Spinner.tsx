import React from "react";


import './Spinner.css'

interface SpinnerProps{
    size?:number
    strokeWidth?:number
    color?:string
}

const Spinner:React.FC<SpinnerProps> = (props)=>{

    const {
        size = 20,
        strokeWidth  = 3,
        color = 'white'
    }= props

    return(
        <svg className={'spinner'} viewBox="0 0 50 50" height={size} width={size}>
             <circle style={{stroke:color}} className="path" cx="25" cy="25" r="20" fill="none" strokeWidth={strokeWidth}></circle>
        </svg>
    )
}

export default Spinner;