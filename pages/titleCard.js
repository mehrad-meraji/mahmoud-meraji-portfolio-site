import {useEffect, useRef, useState} from "react";
import cn from "classnames";

export default function TitleCard({ loaded }) {
  const [ exit, setExit ] = useState(false)
  const containerRef = useRef(null);
  
  const handleOnExit = () => {
    setExit(true)
    if (exit) loaded(true)
  }
  useEffect(() => {
    if (containerRef && containerRef.current) {
      containerRef.current.addEventListener('animationend', handleOnExit)
      return () => {
        containerRef.current.removeEventListener('animationend', handleOnExit)
      }
    }
  })
  
  return (
    <div className={cn(
      "bg-white fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center",
      { "animate__animated animate__fadeOut": exit }
    )}>
      <div ref={containerRef} className={cn("text-6xl font-display font-normal uppercase", {
        "animate__animated animate__fadeInUp": !exit,
        "animate__animated animate__fadeOutUp animate__slow": exit
      })} style={{letterSpacing: '11.25px'}}>Mahmoud Meraji</div>
    </div>
  );
}
