import React, {useEffect, useRef, useState} from 'react';
import cn from "classnames";
function Magnifier({ zoom, src, largeSrc, className }) {
  let w, h, bw;
  const imageRef = useRef(null);
  const glassRef = useRef(null);
  const [ insideBoundry, setInsideBoundry ] = useState(false);
  
  const getCursorPos = (e) => {
    let a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = imageRef.current.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x, y};
  }
  const moveMagnifier = (e) => {
    let pos;
    const { clientWidth: width, clientHeight: height } = imageRef.current
    glassRef.current.style.backgroundSize = `${width * zoom}px ${height * zoom}px`
    glassRef.current.style.backgroundImage = `url(${largeSrc})`,
    
    bw = 3;
    w = glassRef.current.offsetWidth / 2;
    h = glassRef.current.offsetHeight / 2;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    let {x , y} = getCursorPos(e);
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > width - (w / zoom)) {x = width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > height - (h / zoom)) {y = height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /* Set the position of the magnifier glass: */
    glassRef.current.style.left = (x - w) + "px";
    glassRef.current.style.top = (y - h) + "px";
    /* Display what the magnifier glass "sees": */
    glassRef.current.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }
  const removeMagnifier = () => {
    setInsideBoundry(false);
  }
  const addMagnifier = () => {
    setInsideBoundry(true);
  }
  useEffect(() => {
    if (imageRef && imageRef.current) {
      imageRef.current.addEventListener('mousemove', moveMagnifier)
      imageRef.current.addEventListener('mouseenter', addMagnifier)
      imageRef.current.addEventListener('mouseleave', removeMagnifier)
      return () => {
        imageRef.current.removeEventListener('mousemove', moveMagnifier)
        imageRef.current.removeEventListener('mouseenter', addMagnifier)
        imageRef.current.removeEventListener('mouseleave', removeMagnifier)
      }
    }
  })
  return (
    <>
      <div ref={imageRef} className={cn("relative", className)}>
        { insideBoundry ? <div ref={glassRef} style={{
          cursor: 'none'
        }} className={"bg-no-repeat w-80 h-80 cursor-none absolute rounded-full"} /> : null}
        <img src={src} alt={""}/>
      </div>
    </>
  );
}

export default Magnifier;
