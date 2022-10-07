import React,{CSSProperties, useState} from 'react'
import {Container,Card} from '../index'
import TabLabel from './TabLabel'


import  './Tab.css'


export type TabItem={
    label:string,
    key:number ,
    content:JSX.Element,
    disabled?:boolean
}

export interface TabProps{
    defaultActiveKey?:number
    items:TabItem[]
    styles?:CSSProperties
}

const Tab:React.FC<TabProps> =(props)=>{

    

    const {
        defaultActiveKey = 0,
        items,
        styles
    } = props

    const [activeTab,setActiveTab] = useState<number >(defaultActiveKey)

    const getActiveTab =(a:number)=>{
        if(a>items.length - 1 || a<0) return items[0].content
        return items[a].content
    }


    const isActive =(a:number)=>a-1 ==activeTab
    
    const handleClick =(a:number)=>setActiveTab(a)

    return(
        <Card
            styles={{
                ...styles
            }}
            className={'tab'}
        >
            <Container
                className='tab_header'        
            >
                
            {items?.map((i,index)=>{
                    return (
                        <TabLabel
                            action={()=>handleClick(i.key - 1)}
                            active={isActive(i.key)}
                            disabled={i.disabled}
                            key={index}
                        >
                         {i.label}   
                        </TabLabel>
                    )
                })}
                
            </Container>
            <Container
                styles={{
                    justifyContent:'center',
                    alignItems:'center',
                    marginTop:'10px'
                }}
            >
                
                {getActiveTab(activeTab)}
            </Container>
        </Card>
    )
}

export default Tab;