import  { useState } from "react"


const useModal =()=>{
    const [drawerOpen,setDrawerOpen] = useState<boolean>(false)
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const openDrawer =()=>{
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
        openDrawer,
        closeDrawer,
        startLoader,
        stopLoader,
        isLoading
    }
}

export default useModal;