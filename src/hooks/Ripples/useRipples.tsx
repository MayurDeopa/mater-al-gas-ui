import React,{useState,useEffect} from 'react'

interface RippleType{
    left:number
    top:number
    color:string

}

const useRipples =(timeout:number,color:string)=>{
    const [ripples,setRipples] = useState<RippleType[]>([])
    const [ripplesLength,setLength] = useState<number>(0)
    
    
    const removeRipple =()=>{
        let temp = ripples
        temp.shift()
        setRipples([])
    }

    

    const getPosition = (event:React.MouseEvent<HTMLElement>)=>{
        let rect = (event.target as HTMLElement).getBoundingClientRect()
        let left  = event.clientX - rect.left
        let top = event.clientY - rect.top
        return {
            left:left,
            top:top,
            color:color
        } 
    }


    const addRipple =(event:React.MouseEvent<HTMLElement>)=>{
        let newRipple = getPosition(event)
        setRipples([...ripples,newRipple])
    }
    useEffect(()=>{

        let intervalId = window.setTimeout(()=>{
            setLength(prev=>prev + 1)
            removeRipple()
        },timeout)
        return ()=>window.clearTimeout(intervalId)
    },[ripples])


   const getRipples =()=>{
    return(
        <React.Fragment>
            {ripples.map((r,index)=>{
                return(
                    <div className="ripple" style={{right:r.left,top:r.top,left:r.left,bottom:r.top,backgroundColor:r.color}} key={index}/>
                )
            })}
        </React.Fragment>
    )
   }


    return {ripples,addRipple,ripplesLength,getRipples}
}

export default useRipples;