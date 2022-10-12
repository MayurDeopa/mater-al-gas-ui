import React from "react";

interface DropDownItemProps{
    children:JSX.Element | string
}

import './DropDownContainer.css'

const DropDownItem:React.FC<DropDownItemProps> =(props)=>{
    
    const {
        children
    } = props

    return(
        <div className="dropDown_item">
            {children}
        </div>
    )
}

export default DropDownItem;