import { CSSProperties } from "react";



interface installRippleInterface{
    clickedElement:EventTarget,
    clickPosition:{
        top:number,
        left:number
    },
    options?:{
        duration?:number,
        color?:string
    }
}

interface applyStylesInterface{
    element:HTMLElement,
    styles:CSSProperties
}


const applyStyles = ({ element, styles }:applyStylesInterface) => {
  const stylesPx = Object.entries(styles).reduce(
    (accumulated, [property, value]) => {
      if (!["string", "number"].includes(typeof value)) {
        console.warn("applyStyles was provided style with unexpected type");
      }
      const formattedValue = typeof value === "number" ? value + "px" : value;
      return {
        ...accumulated,
        [property]: formattedValue
      };
    },
    {}
  );
  return Object.assign(element.style, stylesPx);
};

const installRipple = (props:installRippleInterface) => {
    const {
        clickedElement, 
        clickPosition: { top, left },
        options ={
            color:'white',
            duration:200
        }
    } = props
  
    const Element = clickedElement as HTMLElement
    const clickedElementRect = Element.getBoundingClientRect();

  const child = document.createElement("div");

  Element.append(child);

  const computedStyles = window.getComputedStyle(Element);

  const clickedElementPosition = computedStyles.getPropertyValue("position");

  if (clickedElementPosition === "static") {
    Element.style.position = "relative";
  }

  Element.style.overflow = "hidden";

  const circleRadius = 30;

  applyStyles({
    element: child,
    styles: {
      position: "absolute",
      top: top - circleRadius,
      left: left - circleRadius,
      width: circleRadius * 2,
      height: circleRadius * 2,
      borderRadius: "50%",
      background: options.color,
      pointerEvents: "none"
    }
  });

  const encompassingCircleRadius = Math.sqrt(
    Math.pow(clickedElementRect.width, 2) +
      Math.pow(clickedElementRect.height, 2)
  );
  const scaleFactor = encompassingCircleRadius / circleRadius;

  const animation = child.animate(
    [
      { transform: "scale(0)", opacity: 0.7 },
      { transform: `scale(${scaleFactor})`, opacity: 0 }
    ],
    {
      duration: options.duration,
      fill: "both"
    }
  );

  animation.onfinish = () => Element.removeChild(child);
};



export default installRipple;
