import React from "react";
import {Portal} from "../index";





import './Modal.css'

interface ModalProps{
    container?:string
    children?:JSX.Element | JSX.Element[]
    open?:boolean,
    action?:()=>void,
    hasTransitioned?:boolean
}

const Modal:React.FC<ModalProps> = (props)=>{

    const {
        children,
        action,
        hasTransitioned,
    }= props


    return(
        <Portal
            wrapperId="modal-root"
        >
            <div 
                className={"modal_wrapper"}
                style={{
                    opacity:!hasTransitioned?0:1
                }}
            >
                <div
                    onClick={action}
                    style={{
                        position:'absolute',
                        height:'100%',
                        width:'100%',
                        zIndex:'-1'
                    }}
                />
                {children}
            </div>
            </Portal>
    )
}

export default Modal;


