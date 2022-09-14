import React from "react";
import Portal from "../Portal";



import './Modal.css'

interface ModalProps{
    container?:string
    children?:JSX.Element | JSX.Element[]
    open?:boolean,
    action?:()=>void
}

const Modal:React.FC<ModalProps> = (props)=>{

    const {
        children,
        open=false,
        action
    }= props


    return(
        <Portal
            wrapperId="modal-root"
        >
            <div 
                className={open?`modal_wrapper `:'modal_wrapper modal_hidden'}
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