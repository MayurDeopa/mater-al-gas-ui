import React, { CSSProperties } from "react"
import Modal from "../Modal"
import Progress from "../Progress"

import './Drawer.css'

interface DrawerProps{
    container?:string
    children?:JSX.Element | JSX.Element[]
    hidden?:boolean,
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
        hidden=true,
        action,
        loading = false
    } = props

    return(
        <Modal
            container={container}
            hidden={hidden}
            action={action}
        >
            <div className={hidden?'drawer drawer_hidden':'drawer'}>
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
    )
}

export default Drawer;