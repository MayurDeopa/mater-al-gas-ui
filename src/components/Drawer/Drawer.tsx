import React, { CSSProperties, } from "react"
import {useTransition} from "../../hooks"
import {Modal,Progress,Card} from '../index'

import './Drawer.css'

type position = 'right' | 'left' | 'bottom' | 'top'

interface DrawerProps{
    container?:string
    children?:JSX.Element | JSX.Element[]
    open?:boolean,
    action?:()=>void,
    loading?:boolean,
    width?:string,
    title?:string,
    position?:position,
    height?:string,
    styles?:CSSProperties,

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
        width='30rem',
        height='100%',
        loading = false,
        title,
        position='right',
        styles
    } = props


    const hasTransitioned = useTransition(open,300)
    return(
       <React.Fragment>
        {
            hasTransitioned
            &&
            <Modal
                container={container}
                action={action}
                open={hasTransitioned}
                hasTransitioned={open}

            >
            
                    <div 
                        className={'drawer'} 
                        style={{
                            width:width,
                            height:height,
                            [position]:open?0:`-${width}`,
                            animationName:`${position}Slide`,
                            ...styles
                        }}
                    >
                    <React.Fragment>
                        {loading && (
                            <Progress
                                styles={progressStyles}
                            />
                        )}
                    </React.Fragment>
                    <React.Fragment>
                        {title && (
                            <Card>
                                <h2>{title}</h2>
                            </Card>
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