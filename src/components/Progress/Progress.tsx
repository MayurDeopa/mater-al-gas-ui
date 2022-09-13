import React from 'react'

import './Progress.css'

interface ProgressProps{
    width?:string
    bgColor?:string
    loaderColor?:string
    styles?:{}
}

const Progress:React.FC<ProgressProps>=(props)=>{

    const {
        width,
        bgColor,
        loaderColor,
        styles
    } = props
    return(
        <div
            style={{...styles,width:width}}
            className={`progress_wrapper`}
        >
            <div className={"progress"} style={{backgroundColor:bgColor}}>
                <div 
                    style={{backgroundColor:loaderColor}}
                    className={'indeterminate'}>

                </div>             
            </div>
        </div>
    )

}

export default Progress;