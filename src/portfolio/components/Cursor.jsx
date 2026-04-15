import { useEffect, useRef } from "react";

/* ── CURSOR ── */
function Cursor() {
  const dot=useRef(null),ring=useRef(null),pos=useRef({x:0,y:0}),lag=useRef({x:0,y:0}),raf=useRef(null);
  useEffect(()=>{
    document.body.style.cursor="none";
    const mv=e=>{pos.current={x:e.clientX,y:e.clientY}};
    const ov=e=>{if(e.target.closest("a,button,.sk-chip,.pacc-trigger,.aacc-trigger,.cc,.ct-lnk,.hl-row,.edu-card,.exp-btn,.h-badge")){dot.current?.classList.add("hov");ring.current?.classList.add("hov")}};
    const ou=()=>{dot.current?.classList.remove("hov");ring.current?.classList.remove("hov")};
    window.addEventListener("mousemove",mv);
    document.addEventListener("mouseover",ov);
    document.addEventListener("mouseout",ou);
    const tick=()=>{
      if(dot.current){dot.current.style.left=pos.current.x+"px";dot.current.style.top=pos.current.y+"px"}
      if(ring.current){lag.current.x+=(pos.current.x-lag.current.x)*.12;lag.current.y+=(pos.current.y-lag.current.y)*.12;ring.current.style.left=lag.current.x+"px";ring.current.style.top=lag.current.y+"px"}
      raf.current=requestAnimationFrame(tick)
    };
    tick();
    return()=>{window.removeEventListener("mousemove",mv);document.removeEventListener("mouseover",ov);document.removeEventListener("mouseout",ou);cancelAnimationFrame(raf.current);document.body.style.cursor=""};
  },[]);
  return <><div id="cd" ref={dot}/><div id="cr" ref={ring}/></>;
}

export default Cursor;
