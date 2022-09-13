import React from "react";

import Portal from "../Portal";

import './Modal.css'

interface ModalProps{
    container?:string
    children?:JSX.Element | JSX.Element[]
    hidden?:boolean,
    action?:()=>void
}

const Modal:React.FC<ModalProps> = (props)=>{

    const {
        container = 'modal-root',
        children,
        hidden=false,
        action
    }= props


    return(
        <Portal
            container={document.getElementById(container) as HTMLElement}
        >
            <div 
                className={hidden?`modal_wrapper modal_hidden`:'modal_wrapper'}
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