import {Card} from '../index'

import React from 'react'

interface ContainerProps{
    styles?:{}
    children?:JSX.Element[] | JSX.Element
    title?:string
    className?: string
}

const Container:React.FC<ContainerProps>=(props)=>{

    const {
        styles,
        children,
        title,
        className =""
    } = props

    return(
        <Card
            title={title}
            styles={{...styles,boxShadow:'none'}}
            className={className}
        >
            {children}
        </Card>
    )
}

export default Container;