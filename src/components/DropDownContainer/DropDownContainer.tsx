
import React from "react";



import './DropDownContainer.css'
import DropDownItem from "./DropDownItem";

interface DropDOwnContainerProps{
   open:boolean
}

const DropDownContainer:React.FC<DropDOwnContainerProps> =(props)=>{


   const {
      open
   } = props

   const animationClassName = open?'dropDown_in':'dropDown_out'

   return(
   <div  className={`dropdown_container ${animationClassName}`}>
      <DropDownItem>
         <p>fsagasgasgsagagsagsagasgagagsagagas</p>
      </DropDownItem>
      <DropDownItem>
         <p>fsagasgasgas</p>
      </DropDownItem>
      <DropDownItem>
         <p>fsagasgasgas</p>
      </DropDownItem>
    </div>
   )
}

export default DropDownContainer;