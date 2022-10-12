import React, { CSSProperties } from 'react'
import {installRipple} from '../index'

import './Tab.css'


export interface TabLabelProps{
    children:JSX.Element | string
    active:boolean
    disabled?:boolean
    action:()=>void
    styles?:CSSProperties
}

const TabLabel:React.FC<TabLabelProps> =(props)=>{

    const {
        children,
        active,
        action,
        styles,
        disabled = false
    }= props

    return(
            <button
                disabled={disabled}
                className={active?'tab_label active':'tab_label'}
                onClick={action}
                style={{...styles}}
                onMouseDown={({ target, nativeEvent }) =>
                        installRipple({
                            clickedElement: target,
                            clickPosition: {
                            top: nativeEvent.offsetY,
                            left: nativeEvent.offsetX
                            },
                            options:{
                                'color':'rgb(2, 122, 192)',
                                duration:500
                            }
                        })
            }
            >
                {children}
            </button>
    )
}

export default TabLabel;