import React from 'react'

import './Card.css'


interface CardProps{
    styles?:{}
    children?:JSX.Element[] | JSX.Element
    title?:string
    className?: string

}

const Card:React.FC<CardProps> =(props)=>{

    const {
        styles,
        children,
        className =""
    } = props
    return(
        <div
            style={{...styles}}
            className={'card ' + className}
        >
            {children}
        </div>
    )
}

export default Card;