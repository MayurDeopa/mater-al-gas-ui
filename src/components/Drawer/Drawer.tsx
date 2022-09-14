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
    loading:boolean

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
    const hasTransitioned = useTransition(open,300)

    return(
       <React.Fragment>
        {
            open
            &&
            <Modal
            container={container}
            open={hasTransitioned}
            action={action}

        >
            
                <div className={hasTransitioned?'drawer ':'drawer drawer_hidden'}>
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