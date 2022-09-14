import React, { CSSProperties, } from "react"
import {useTransition} from "../../index"
import Modal from "../Modal"
import Progress from "../Progress"

import './Drawer.css'

interface DrawerProps{
    container?:string
    children?:JSX.Element | JSX.Element[]
    open?:boolean,
    action?:()=>void,
    loading?:boolean

}

const progressStyles:CSSProperties={
    position:'absolute',
    top:0,
    left:0,
    right:0
}

const Drawer:React.FC<DrawerProps> =(props)=>{

    const {
        container = 'modal-root',
        children,
        open=true,
        action,
        loading = false
    } = props
    const hasTransitioned = useTransition(open,600)
    const mountAnimation = {animation: "slideIn 0.6s ease-in-out"}
    const unMountAnimation ={animation: "slideOut 0.6s ease-in-out"}
    return(
       <React.Fragment>
        {
            hasTransitioned
            &&
            <Modal
            container={container}
            action={action}
            open={hasTransitioned}

        >
            
                <div className={'drawer'} style={open?mountAnimation:unMountAnimation}>
                <React.Fragment>
                    {loading && (
                        <Progress
                            styles={progressStyles}
                        />
                    )}
                </React.Fragment>
                {children}
            </div>
            
        </Modal>
        }
       </React.Fragment>
    )
}

export default Drawer;