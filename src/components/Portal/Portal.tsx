import { useEffect, useState } from "react"
import { createPortal } from "react-dom"


interface PortalProps{
    children:JSX.Element | JSX.Element[]
    container: HTMLElement
}


const Portal= (props:PortalProps) => {

    const {
        children,
        container
    } = props
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)

      return () => setMounted(false)
   }, [])

   return mounted
      ? createPortal(children, 
        container)
      : null
}

export default Portal;