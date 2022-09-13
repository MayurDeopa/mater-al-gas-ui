import React from 'react'

import './Tab.css'


export interface TabLabelProps{
    children:JSX.Element | string
    active:boolean
    disabled?:boolean
    action:()=>void
}

const TabLabel:React.FC<TabLabelProps> =(props)=>{

    const {
        children,
        active,
        action,
        disabled = false
    }= props

    return(
        <button
            disabled={disabled}
            className={active?'tab_label active':'tab_label'}
            onClick={action}
        >
            {children}
        </button>
    )
}

export default TabLabel;