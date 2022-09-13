import React, { useState } from "react"


const useModal =()=>{
    const [drawerOpen,setDrawerOpen] = useState<boolean>(false)
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const [drawerContent,setDrawerContent] = useState<JSX.Element>(<React.Fragment/>)
    const openDrawer =(component:JSX.Element)=>{
        if(component) setDrawerContent(component)
        setDrawerOpen(true)
    }

    const closeDrawer =()=>{
        if(isLoading)return
        setDrawerOpen(false)
    }
    
    const startLoader =()=>{
        setIsLoading(true)
    }

    const stopLoader =()=>{
        setIsLoading(false)
    }
    return {
        drawerOpen,
        drawerContent,
        openDrawer,
        closeDrawer,
        startLoader,
        stopLoader,
        isLoading
    }
}

export default useModal;