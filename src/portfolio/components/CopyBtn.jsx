import { useCallback, useState } from "react";

/* ── COPY ── */
function CopyBtn({text}){
  const [ok,setOk]=useState(false);
  const copy=useCallback(()=>{navigator.clipboard.writeText(text).then(()=>{setOk(true);setTimeout(()=>setOk(false),2000)});},[text]);
  return <button className={`copy-btn${ok?" ok":""}`} onClick={copy}>{ok?"✓ Copied!":"Copy"}</button>;
}

export default CopyBtn;
