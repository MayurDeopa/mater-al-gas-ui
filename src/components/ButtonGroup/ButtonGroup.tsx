import React, { useState } from "react";
import Button from "../Button/Button";
import Container from "../Container";
import {ChevronDown} from 'react-feather'
import DropDownContainer from "../DropDownContainer";
import { useTransition } from "../../hooks";


interface ButtonGroupProps{
    text?:string
    action?:()=>void
    disableAction?:boolean
    disableDrop?:boolean
    loadingAction?:boolean
    loadingDrop?:boolean
}


const ButtonGroup:React.FC<ButtonGroupProps> =(props)=>{
    const{
        text,
        disableAction,
        disableDrop,
        loadingAction,
        loadingDrop,
        action
    } = props

    const [open,setOpen] = useState<boolean>(false)

    const hasTransitioned = useTransition(open,300)

    const handleClick = ()=>{
        setOpen(!open)
    }

    return(
        <Container styles={{gap:0,position:'relative',overFlow:'visible'}}>
            <Button 
                styles={{borderRadius:' 4px 0  0 4px',width:'auto'}} text={text} 
                action={action} 
                loading={loadingAction}
                disabled={disableAction}
            />
            <Button 
                styles={{width:'3rem',borderRadius:'0 4px 4px 0'}} 
                icon={<ChevronDown/>} 
                action={handleClick} 
                disabled={disableDrop}
                loading={loadingDrop}
            />
            <React.Fragment>
                {hasTransitioned && <DropDownContainer open={open}/>}
            </React.Fragment>
        </Container>
    )
}

export default ButtonGroup;