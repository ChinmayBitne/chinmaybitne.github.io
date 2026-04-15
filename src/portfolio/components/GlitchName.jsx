import React from "react";

/* ── GLITCH ── */
function GlitchName(){
  return(
    <div className="glitch-wrap">
      {/* Line 1: CHINMAY OMKAR */}
      <span className="g-line">
        <span className="g-base">CHINMAY OMKAR</span>
        <span className="g-layer g-r" aria-hidden>CHINMAY OMKAR</span>
        <span className="g-layer g-b" aria-hidden>CHINMAY OMKAR</span>
      </span>
      {/* Line 2: BITNE — same font, red, own glitch offset */}
      <span className="g-line">
        <span className="g-base red">BITNE</span>
        <span className="g-layer g-r2" aria-hidden style={{color:"#d03030"}}>BITNE</span>
        <span className="g-layer g-b2" aria-hidden style={{color:"#3050d0"}}>BITNE</span>
      </span>
    </div>
  );
}

export default GlitchName;
