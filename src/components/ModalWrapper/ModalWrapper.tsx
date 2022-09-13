import React, { createContext } from "react"
import { useModal } from "../../hooks";
import Drawer from "../Drawer";


export interface ModalContextProps{
    drawerOpen:boolean
    openDrawer:(c:JSX.Element)=>void
    closeDrawer:()=>void
    startLoader:()=>void
    stopLoader:()=>void
}


export interface ModalWrapperProps{
    children:JSX.Element
}

export const ModalContext = createContext<ModalContextProps | null>(null); 

let {Provider} = ModalContext

const ModalWrapper:React.FC<ModalWrapperProps> =(props)=>{
    
    const {isLoading,drawerOpen,drawerContent,openDrawer,closeDrawer,startLoader,stopLoader} = useModal()


    return(
        <Provider value={{
            drawerOpen:drawerOpen,
            openDrawer:openDrawer,
            closeDrawer:closeDrawer,
            startLoader:startLoader,
            stopLoader:stopLoader
        }}>
           <Drawer hidden={!drawerOpen} action={closeDrawer} loading={isLoading}>
            {drawerContent}
           </Drawer>
           {props.children}
        </Provider>
    )
}



export default ModalWrapper;