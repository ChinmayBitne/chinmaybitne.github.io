import { useEffect } from "react";

/* ── REVEAL ── */
function useReveal() {
  useEffect(()=>{
    const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in")})},{threshold:.08});
    document.querySelectorAll(".rv").forEach(el=>obs.observe(el));
    return()=>obs.disconnect();
  });
}

export default useReveal;
