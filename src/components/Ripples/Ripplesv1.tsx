import React,{useLayoutEffect,useState} from "react"

import './Ripples.css'

export interface RippleType{
    x:number
    y:number
    size:number
}

export interface RipplesProps{
    children?:JSX.Element 
    timeout:number
    color?:string
    styles?:React.CSSProperties
    type?:string
}

const useDebouncedRippleCleanUp = (rippleCount:number, duration:number, cleanUpFunction:()=>void) => {
    useLayoutEffect(() => {
      let bounce:any
      if (rippleCount > 0) {
        window.clearTimeout(bounce);
  
        bounce = window.setTimeout(() => {
          cleanUpFunction();
          window.clearTimeout(bounce);
        }, duration * 4);
      }
  
      return () => clearTimeout(bounce);
    }, [rippleCount, duration, cleanUpFunction]);
  };
  
  const Ripple = ({ duration = 850, color = "#fff" }) => {
    const [rippleArray, setRippleArray] = useState<RippleType[]>([]);
  
    useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
      setRippleArray([]);
    });
  
    const addRipple = (event:React.MouseEvent<HTMLElement>) => {
      const rippleContainer = event.currentTarget.getBoundingClientRect();
      const size =
        rippleContainer.width > rippleContainer.height
          ? rippleContainer.width
          : rippleContainer.height;
      const x = event.pageX - rippleContainer.x - size / 2;
      const y = event.pageY - rippleContainer.y - size / 2;
      const newRipple = {
        x,
        y,
        size
      };
  
      setRippleArray([...rippleArray, newRipple]);
    };
  
    return (
      <div className="ripple_container" onMouseDown={addRipple}>
        {rippleArray.length > 0 &&
          rippleArray.map((ripple, index) => {
            return (
              <span
                className="ripple"
                key={"span" + index}
                style={{
                  top: ripple.y,
                  left: ripple.x,
                  width: ripple.size,
                  height: ripple.size,
                  backgroundColor:color,
                  animationDuration:`${duration}ms`
                }}
              />
            );
          })}
      </div>
    );
  };
  

  
  export default Ripple;
  