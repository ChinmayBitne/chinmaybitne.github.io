import { useEffect, useState } from "react";
import { NAV_IDS } from "../config/data";

/* ── ACTIVE NAV ── */
function useActiveNav() {
  const [act,setAct]=useState("home");
  useEffect(()=>{
    const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)setAct(e.target.id)})},{threshold:.3});
    NAV_IDS.forEach(id=>{const el=document.getElementById(id);if(el)obs.observe(el)});
    return()=>obs.disconnect();
  },[]);
  return act;
}

export default useActiveNav;
