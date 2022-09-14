import { useEffect, useState } from "react"

export interface TransitionProps{
    isMounted:boolean
    delay:number
}

const useTransition =(isMounted:boolean,delay:number)=>{
    const [hasTransitioned,setTransitional] = useState(false)
    useEffect(()=>{
        let timeoutId
        if(isMounted && !hasTransitioned){
            setTransitional(true)
        }
        else if(!isMounted && hasTransitioned){
            timeoutId = setTimeout(()=>setTransitional(false),delay)
        }
        return clearTimeout(timeoutId)
    },[isMounted,hasTransitioned,delay])
    
    return hasTransitioned
}

export default useTransition;

