import { useState, useEffect, useCallback } from "react";
import Styles from "./portfolio/components/Styles";
import Cursor from "./portfolio/components/Cursor";
import GlitchName from "./portfolio/components/GlitchName";
import CopyBtn from "./portfolio/components/CopyBtn";
import useReveal from "./portfolio/hooks/useReveal";
import useActiveNav from "./portfolio/hooks/useActiveNav";
import { D, MQ, NAV_IDS, CERT_SHOW, SITE_PARTICLES, HERO_PARTICLES } from "./portfolio/config/data";
import { CERT_DRIVE_LINKS } from "./portfolio/config/certDriveLinks";

function IconGitHub(){
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.8-.25.8-.56v-2.17c-3.2.7-3.88-1.35-3.88-1.35-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.71.08-.71 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.17a10.95 10.95 0 0 1 5.78 0c2.2-1.48 3.17-1.17 3.17-1.17.63 1.58.24 2.75.12 3.04.73.8 1.18 1.82 1.18 3.07 0 4.41-2.7 5.39-5.27 5.67.41.35.78 1.03.78 2.08v3.08c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
    </svg>
  );
}

function IconLinkedIn(){
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3ZM8.2 18H5.6V9.7h2.6V18Zm-1.3-9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM18 18h-2.6v-4c0-1-.02-2.3-1.4-2.3-1.41 0-1.62 1.1-1.62 2.23V18H9.8V9.7h2.5v1.13h.03c.35-.66 1.2-1.35 2.47-1.35 2.65 0 3.14 1.75 3.14 4.01V18Z"/>
    </svg>
  );
}

function IconMail(){
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.2.11 6.26 4.7a.9.9 0 0 0 1.08 0l6.26-4.7a1.25 1.25 0 0 0-.55-.11H5.75c-.2 0-.39.04-.55.11ZM19 8.45l-5.56 4.17a2.4 2.4 0 0 1-2.88 0L5 8.45v8.8c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75v-8.8Z"/>
    </svg>
  );
}

function IconPhone(){
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M6.6 2.5h2.7c.52 0 .97.36 1.08.87l.62 2.88c.09.42-.04.86-.34 1.16L9.2 8.87a13.2 13.2 0 0 0 5.93 5.93l1.46-1.46c.3-.3.74-.43 1.16-.34l2.88.62c.51.11.87.56.87 1.08v2.7A2.1 2.1 0 0 1 19.4 21.5h-.9C9.88 21.5 2.5 14.12 2.5 5.5v-.9A2.1 2.1 0 0 1 4.6 2.5h2Z"/>
    </svg>
  );
}

function IconExternal(){
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M14 3h7v7h-2V6.41l-8.3 8.3-1.4-1.42 8.29-8.29H14V3Zm-8 4h6v2H6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6h2v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3Z"/>
    </svg>
  );
}

function IconCertificate(){
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M7 3h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.5L12 21l-1.5-6H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm1.5 4v2h7V7h-7Zm0 4v2H13v-2H8.5Z"/>
    </svg>
  );
}

function IconGlobe(){
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2Zm7.86 9h-3.02a15.8 15.8 0 0 0-1.27-5.07A8.03 8.03 0 0 1 19.86 11ZM12 4.15c.97 1.25 2.2 3.7 2.8 6.85H9.2C9.8 7.85 11.03 5.4 12 4.15ZM4.14 13h3.02c.2 1.78.66 3.5 1.27 5.07A8.02 8.02 0 0 1 4.14 13Zm3.02-2H4.14a8.02 8.02 0 0 1 4.29-5.07A15.7 15.7 0 0 0 7.16 11ZM12 19.85c-.97-1.25-2.2-3.7-2.8-6.85h5.6c-.6 3.15-1.83 5.6-2.8 6.85ZM16.84 13h3.02a8.03 8.03 0 0 1-4.29 5.07A15.8 15.8 0 0 0 16.84 13Z"/>
    </svg>
  );
}

function IconChevronDown(){
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M12 15.4 5.3 8.7l1.4-1.4L12 12.6l5.3-5.3 1.4 1.4Z"/>
    </svg>
  );
}

function IconProjectAI(){
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M9 3h6v2h2.5A2.5 2.5 0 0 1 20 7.5V10h-2V8a1 1 0 0 0-1-1h-2v2H9V7H7a1 1 0 0 0-1 1v2H4V7.5A2.5 2.5 0 0 1 6.5 5H9V3Zm-5 9h2v4a1 1 0 0 0 1 1h2v-2h6v2h2a1 1 0 0 0 1-1v-4h2v4.5A2.5 2.5 0 0 1 17.5 19H15v2H9v-2H6.5A2.5 2.5 0 0 1 4 16.5V12Zm7 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/>
    </svg>
  );
}

function IconProjectData(){
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M4 20V6h2v12h14v2H4Zm4-3V9h2v8H8Zm4 0V5h2v12h-2Zm4 0v-6h2v6h-2Z"/>
    </svg>
  );
}

function IconProjectSystem(){
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H4V5Zm0 6h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Zm4 4h2v2H8v-2Zm4 0h2v2h-2v-2Z"/>
    </svg>
  );
}

function IconProjectCode(){
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="m9.4 16.6-1.4 1.4L2 12l6-6 1.4 1.4L4.8 12l4.6 4.6ZM16 18l-1.9-.6L18 6l1.9.6L16 18Zm-.1-1.4L14.6 15l4.6-4.6-4.6-4.6L15.9 4l6 6-6 6.6Z"/>
    </svg>
  );
}

function projectLeadIcon(project, index){
  const cat=(project?.cat||"").toLowerCase();
  const text=`${cat} ${(project?.title||"").toLowerCase()}`;
  if(text.includes("ai")||text.includes("llm")||text.includes("rag")||text.includes("nlp")) return <IconProjectAI/>;
  if(text.includes("data")||text.includes("analytics")||text.includes("predict")) return <IconProjectData/>;
  if(text.includes("cloud")||text.includes("backend")||text.includes("api")||text.includes("system")) return <IconProjectSystem/>;
  return index%2===0?<IconProjectCode/>:<IconProjectAI/>;
}

/* ── MAIN ── */
export default function Portfolio(){
  useReveal();
  const act=useActiveNav();
  const [scrollProgress,setScrollProgress]=useState(0);
  const [loaded,setLoaded]=useState(false);
  const [loaderGone,setLoaderGone]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  const [menuOpen,setMenuOpen]=useState(false);
  const [skTab,setSkTab]=useState(0);
  const [openExp,setOpenExp]=useState(0);
  const [openProj,setOpenProj]=useState(null);
  const [openAch,setOpenAch]=useState(null);
  const [openCert,setOpenCert]=useState(null);
  const [credExp,setCredExp]=useState(false);
  const [credF,setCredF]=useState("All");
  const [credQ,setCredQ]=useState("");

  /* loader: start fade-out after bar animation completes (~1.7s) */
  useEffect(()=>{
    const t1=setTimeout(()=>setLoaded(true),1700);
    const t2=setTimeout(()=>setLoaderGone(true),2350);
    return()=>{ clearTimeout(t1); clearTimeout(t2); };
  },[]);

  useEffect(()=>{
    const sections=Array.from(document.querySelectorAll(".sec, .contact-sec"));
    let rafId=null;
    let lastScrolled=false;
    let lastProgress=-1;
    const fn=()=>{
      rafId=null;
      const y=window.scrollY;
      const isScrolled=y>40;
      if(isScrolled!==lastScrolled){lastScrolled=isScrolled;setScrolled(isScrolled)}
      const max=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
      const p=Math.min(1,Math.max(0,y/max));
      if(Math.abs(p-lastProgress)>.003){lastProgress=p;setScrollProgress(p)}
      document.documentElement.style.setProperty("--sy",`${y}px`);
      const vh=window.innerHeight||1;
      sections.forEach(sec=>{
        const rect=sec.getBoundingClientRect();
        const center=rect.top+rect.height/2;
        const delta=(center-vh/2)/vh;
        const shift=Math.max(-18,Math.min(18,-delta*18));
        const glow=Math.max(0,1-Math.abs(delta)*1.6);
        sec.style.setProperty("--secShift",`${shift.toFixed(2)}px`);
        sec.style.setProperty("--secGlow",glow.toFixed(3));
      });
    };
    const schedule=()=>{if(rafId===null)rafId=requestAnimationFrame(fn)};
    fn();
    window.addEventListener("scroll",schedule,{passive:true});
    window.addEventListener("resize",schedule);
    return()=>{
      window.removeEventListener("scroll",schedule);
      window.removeEventListener("resize",schedule);
      if(rafId!==null)cancelAnimationFrame(rafId);
    };
  },[]);

  const navTo = useCallback((id)=>{
    setMenuOpen(false);
    setTimeout(()=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"});},80);
  },[]);

  /* Resume URL can be overridden via VITE_RESUME_URL in deployment env */
  const RESUME_URL =
    import.meta.env.VITE_RESUME_URL ||
    "https://drive.google.com/file/d/1PFFBURk3KHghJeIInqcGr_9uahTfuwxz/view?usp=sharing";

  const HIRE_MAILTO = `mailto:${D.email}?subject=${encodeURIComponent("Hiring Opportunity - Portfolio Inquiry")}&body=${encodeURIComponent("Hi Chinmay,\n\nI came across your portfolio and would like to discuss a potential opportunity with you. Please let me know when you are available to talk.\n\nBest regards,")}`;

  const credTypes=["All",...Array.from(new Set(D.certs.map(c=>c.type)))];
  const allCreds=D.certs.filter(c=>(credF==="All"||c.type===credF)&&c.name.toLowerCase().includes(credQ.toLowerCase()));
  const visCreds=credExp?allCreds:allCreds.slice(0,CERT_SHOW);
  const getCertificateLink=(cert)=>{
    const drive=(CERT_DRIVE_LINKS[cert.name]||"").trim();
    return drive||cert.link||"";
  };
  const siteParticleField=[
    ...SITE_PARTICLES,
    ...SITE_PARTICLES.map((p,i)=>(
      {
        ...p,
        x:(p.x+7+(i%7)*2)%100,
        y:(p.y+11+(i%5)*3)%100,
        s:Math.max(2.6,Number((p.s*.82).toFixed(1))),
        o:Math.min(.62,Number((p.o+.12).toFixed(2))),
        t:Math.max(14,p.t-2),
        d:Number((p.d*1.18).toFixed(3)),
      }
    )),
    ...SITE_PARTICLES.map((p,i)=>(
      {
        ...p,
        x:(p.x+15+(i%6)*3)%100,
        y:(p.y+19+(i%4)*4)%100,
        s:Math.max(2.3,Number((p.s*.74).toFixed(1))),
        o:Math.min(.76,Number((p.o+.2).toFixed(2))),
        t:Math.max(12,p.t-3),
        d:Number((p.d*1.34).toFixed(3)),
      }
    )),
  ];
  const heroParticleField=[
    ...HERO_PARTICLES,
    ...HERO_PARTICLES.map((p,i)=>(
      {
        ...p,
        x:(p.x+6+(i%4)*3)%100,
        y:Math.min(48,p.y+6+(i%3)*2),
        s:Math.max(3.8,Number((p.s*.9).toFixed(1))),
        o:Math.min(.9,Number((p.o+.12).toFixed(2))),
        t:Math.max(7,p.t-1),
        d:Number((p.d*1.22).toFixed(3)),
      }
    )),
  ];

  return(
    <>
      <Styles/>
      <Cursor/>
      <div className="scroll-progress" style={{transform:`scaleX(${scrollProgress})`}} />

      <div className="site-shell">
        <div className="site-particles" aria-hidden="true">
          {siteParticleField.map((p,i)=>(
            <span
              key={`${p.x}-${p.y}-${i}`}
              className={`site-particle${i%2?" alt":""}`}
              style={{"--x":p.x,"--y":p.y,"--s":p.s,"--o":p.o,"--t":p.t,"--d":p.d,"--mx":(i%2?22:-22),"--i":i}}
            />
          ))}
        </div>

      {/* ═════ PAGE LOADER ═════ */}
      {!loaderGone && (
        <div className={`loader${loaded?" out":""}`}>
          <div className="loader-logo">C<em>B</em></div>
          <div className="loader-bar-wrap"><div className="loader-bar"/></div>
          <div className="loader-label">Loading Portfolio</div>
        </div>
      )}

      <div className="site-content">

      {/* NAV */}
      <nav className={`nav${scrolled?" sc":""}`}>
        <div className="nav-logo">CB<span>.</span></div>
        <div className="nav-links">
          {NAV_IDS.map(id=>(
            <a key={id} href={`#${id}`}
              className={`nav-a${act===id?" act":""}`}
              onClick={e=>{ e.preventDefault(); navTo(id); }}
            >
              {id.charAt(0).toUpperCase()+id.slice(1)}
            </a>
          ))}
        </div>
        <div className="nav-right">
          <a href={RESUME_URL} target="_blank" rel="noreferrer" className="nav-resume">↓ Resume</a>
          <a href={HIRE_MAILTO} className="nav-hire"><span>Hire Me</span></a>
          <button
            className={`nav-burger${menuOpen?" open":""}`}
            onClick={()=>setMenuOpen(v=>!v)}
            aria-label="Toggle menu"
          >
            <span/><span/><span/>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-drawer${menuOpen?" open":""}`}>
        {NAV_IDS.map(id=>(
          <a key={id} href={`#${id}`}
            className={`nav-drawer-a${act===id?" act":""}`}
            onClick={e=>{ e.preventDefault(); navTo(id); }}
          >
            {id.charAt(0).toUpperCase()+id.slice(1)}
          </a>
        ))}
        <a href={RESUME_URL} target="_blank" rel="noreferrer" className="nav-drawer-a" style={{color:"var(--red)"}}>↓ Download Resume</a>
        <a href={HIRE_MAILTO} className="nav-drawer-hire">Hire Me</a>
      </div>

      {/* ═════ HERO ═════ */}
      <section id="home" className="hero">
        <div className="hero-grid"/>
        <div className="hero-particles" aria-hidden="true">
          {heroParticleField.map((p,i)=>(
            <span
              key={`${p.x}-${p.y}-${i}`}
              className={`hero-particle${i%2?" alt":""}`}
              style={{"--x":p.x,"--y":p.y,"--s":p.s,"--o":p.o,"--t":p.t,"--d":p.d,"--dx":(i%2?24:-24),"--i":i}}
            />
          ))}
        </div>

        <div className="hero-inner-cap">
          <div className="avail-badge"><div className="av-dot"/>Open to Roles</div>
          <GlitchName/>
          <p className="hero-role">AI Engineer &nbsp;·&nbsp; RAG Systems &nbsp;·&nbsp; LLM Applications</p>
          <p className="hero-desc">
            Graduate student at ASU building production-ready intelligent systems —<br/>
            LLM apps, RAG pipelines, cloud ML, and backend engineering that actually ships.
          </p>
          <div className="hero-badges">
            <a href={D.github} target="_blank" rel="noreferrer" className="h-badge">
              <span className="h-badge-icon"><IconGitHub/></span> GitHub — ChinmayBitne
            </a>
            <a href={D.linkedin} target="_blank" rel="noreferrer" className="h-badge">
              <span className="h-badge-icon"><IconLinkedIn/></span> LinkedIn — chinmaybitne
            </a>
          </div>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary" onClick={e=>{e.preventDefault();navTo("contact");}}>Let's Connect →</a>
            <a href="#projects" className="btn-outline" onClick={e=>{e.preventDefault();navTo("projects");}}>View Projects</a>
          </div>
          <div className="hero-stats">
            {[{v:"3+",l:"Internships"},{v:"12+",l:"Certifications"},{v:"May 2026",l:"Masters Graduation"}].map(s=>(
              <div key={s.l} className="hs"><div className="hs-v">{s.v}</div><div className="hs-l">{s.l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="mq-sec">
        <div className="mq-track">
          {[...MQ,...MQ].map((t,i)=><div key={i} className="mq-item">{t}<span className="mq-dot">•</span></div>)}
        </div>
      </div>

      {/* ═════ ABOUT ═════ */}
      <section id="about" className="sec">
        <div className="sec-inner">
          <div className="sec-head" style={{marginBottom:24}}>
            <div className="sec-pill rv">About Me</div>
            <div className="sec-h rv d1" style={{marginBottom:0}}>Who I <em>Am</em></div>
          </div>

          {/* About content */}
          <div className="about-top-cols">
            <div className="about-copy-col">
              <div className="about-body-wrap rv d2">
                <p className="about-body">
                  I&apos;m a graduate student at <strong>Arizona State University</strong> with deep focus on applied AI, machine learning systems, and retrieval-augmented generation. I work at the intersection of research and engineering — turning ambitious ideas into <span className="red">production-ready products</span> through rigorous technical execution and clean system design.
                  <br/><br/>
                  My work spans end-to-end: model selection, embedding pipelines, backend APIs, cloud infrastructure, and user-facing interfaces. I care about building things that are not just technically sound — but genuinely useful.
                </p>
              </div>

              {/* Highlights stay grouped with the body in the left column */}
              <div className="hl-list-full rv d3" style={{marginTop:12}}>
                {D.highlights.map((h,i)=>(
                  <div key={h} className="hl-row rv" style={{transitionDelay:`${(i+3)*.07}s`}}>
                    <div className="hl-n">0{i+1}</div><div>{h}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═════ SKILLS ═════ */}
      <section id="skills" className="sec">
        <div className="sec-inner">
          <div className="sec-head">
            <div className="sec-pill rv">Capabilities</div>
            <div className="sec-h rv d1">Technical <em>Skills</em></div>
            <p className="sec-sub rv d2">End-to-end intelligent systems — model features, retrieval pipelines, APIs, and cloud deployment.</p>
          </div>
          <div className="sk-tabs rv d3">
            {D.skills.map((g,i)=><button key={g.tab} className={`sk-tab${skTab===i?" on":""}`} onClick={()=>setSkTab(i)}>{g.tab}</button>)}
          </div>
          <div className="sk-grid rv d4">
            {D.skills[skTab].items.map((item,i)=>(
              <div key={item} className="sk-chip" style={{transitionDelay:`${i*.03}s`}}><span>{item}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════ EXPERIENCE ═════ */}
      <section id="experience" className="sec">
        <div className="sec-inner">
          <div className="sec-head">
            <div className="sec-pill rv">Work History</div>
            <div className="sec-h rv d1"><em>Experience</em> & Exposure</div>
            <p className="sec-sub rv d2">Internships and professional exposure that shaped my engineering approach.</p>
          </div>
          <div className="exp-items rv d3">
            {D.experience.map((e,i)=>(
              <div key={e.role} className={`exp-item${openExp===i?" open":""}`}>
                <button className="exp-btn" onClick={()=>setOpenExp(openExp===i?-1:i)}>
                  <div>
                    <div className="exp-period">{e.period}</div>
                    <div className="exp-role-t">{e.role}</div>
                    <div className="exp-co">{e.company}</div>
                  </div>
                  <div className="exp-toggle">+</div>
                </button>
                <div className="exp-body">
                  <div className="exp-pts">
                    {e.pts.map(p=><div key={p} className="exp-pt"><div className="ep-dot"/><span>{p}</span></div>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════ PROJECTS — Accordion list ═════ */}
      <section id="projects" className="sec">
        <div className="sec-inner">
          <div className="sec-head">
            <div className="sec-pill rv">Selected Work</div>
            <div className="sec-h rv d1">Featured <em>Projects</em></div>
            <p className="sec-sub rv d2">Click any project to see the full breakdown — stack, approach, and what makes it meaningful.</p>
          </div>
          <div className="proj-acc rv d3">
            {D.projects.map((p,i)=>(
              <div key={p.title} className={`pacc-item${openProj===i?" open":""}`}>
                <button className="pacc-trigger" onClick={()=>setOpenProj(openProj===i?-1:i)}>
                  <div className="pacc-num">0{i+1}</div>
                  <div className="pacc-mid">
                    <div className="pacc-cat">{p.cat}</div>
                    <div className="pacc-title">{p.title}</div>
                    {openProj!==i && <div className="pacc-short">{p.short}</div>}
                  </div>
                  <div className="pacc-right">
                    <span className="pacc-em">{projectLeadIcon(p,i)}</span>
                    <div className="pacc-icon"><IconChevronDown/></div>
                  </div>
                </button>
                <div className="pacc-body">
                  <div className="pacc-inner">
                    <div>
                      <div className="pacc-desc">{p.desc}</div>
                      <div className="pacc-detail">{p.detail}</div>
                      <div className="pacc-pills">{p.pills.map(pl=><div key={pl} className="proj-pill">{pl}</div>)}</div>
                      <div className="pacc-links">
                        {p.github&&<a href={p.github} target="_blank" rel="noreferrer" className="plink pri"><span className="plink-ico"><IconGitHub/></span>GitHub <span className="plink-ico"><IconExternal/></span></a>}
                        {p.live&&<a href={p.live} target="_blank" rel="noreferrer" className="plink sec"><span className="plink-ico"><IconGlobe/></span>Live Demo <span className="plink-ico"><IconExternal/></span></a>}
                      </div>
                    </div>
                    <div className="pacc-aside">
                      <div className="pacc-aside-bar" style={{background:p.bar}}/>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="explore-projects rv d4">
            <a href={D.github} target="_blank" rel="noreferrer" className="explore-projects-btn">
              <span className="plink-ico"><IconGitHub/></span>Explore More Projects on GitHub <span className="plink-ico"><IconExternal/></span>
            </a>
          </div>
        </div>
      </section>

      {/* ═════ CREDENTIALS ═════ */}
      <section id="credentials" className="sec">
        <div className="sec-inner">
          <div className="sec-head">
            <div className="sec-pill rv">Continuous Learning</div>
            <div className="sec-h rv d1"><em>Certifications</em></div>
            <p className="sec-sub rv d2">Click any certificate to see what I learned and the skills I gained.</p>
          </div>
          <div className="cred-bar rv d3">
            <div className="cred-fs">
              {credTypes.map(t=><button key={t} className={`cf${credF===t?" on":""}`} onClick={()=>{setCredF(t);setCredExp(false);setOpenCert(null);}}>{t}</button>)}
            </div>
            <input className="cfs" placeholder="Search…" value={credQ} onChange={e=>{setCredQ(e.target.value);setCredExp(false);setOpenCert(null);}}/>
          </div>
          <div className="cred-grid">
            {visCreds.map((c,i)=>{
              const isActive = openCert===c.name;
              const certLink = getCertificateLink(c);
              return (
                <div key={c.name}
                  className={`cred-card rv${isActive?" active":""}`}
                  style={{transitionDelay:`${(i%3)*.05}s`}}
                  onClick={()=>setOpenCert(isActive?null:c.name)}
                >
                  <div className="cc-head">
                    <div className="cc-row1">
                      <div className="cc-type">{c.type}</div>
                      <div className="cc-yr">{c.year}</div>
                    </div>
                    <div className="cc-name">{c.name}</div>
                    <div className="cc-tap">
                      <span className="cc-tap-icon">{isActive?"−":"+"}</span>
                      <span>{isActive?"Collapse":"See skills & details"}</span>
                    </div>
                  </div>
                  <div className="cc-expand">
                    <div className="cc-exp-inner">
                      <div className="cc-exp-layout">
                        <div>
                          <div className="cc-summary">{c.summary}</div>
                          {certLink && (
                            <a
                              href={certLink}
                              target="_blank"
                              rel="noreferrer"
                              className="cc-cert-link cc-summary-link"
                              onClick={(e)=>e.stopPropagation()}
                            >
                              <span className="plink-ico"><IconCertificate/></span>
                              View Certificate
                              <span className="plink-ico"><IconExternal/></span>
                            </a>
                          )}
                        </div>
                        <div className="cc-skills-side">
                          {c.skills?.length>0 && <>
                            <div className="cc-skills-lbl">Skills Gained</div>
                            <div className="cc-skills-wrap">
                              {c.skills.map(s=><span key={s} className="cc-skill">{s}</span>)}
                            </div>
                          </>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {allCreds.length>CERT_SHOW&&(
            <div className="show-more-wrap rv">
              <button className={`show-more${credExp?" open":""}`} onClick={()=>setCredExp(v=>!v)}>
                <span>{credExp?"Show Fewer":`View All ${allCreds.length} Certificates`}</span>
                <span className="sm-icon">↓</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ═════ EDUCATION ═════ */}
      <section id="education" className="sec">
        <div className="sec-inner">
          <div className="sec-head">
            <div className="sec-pill rv">Academic Journey</div>
            <div className="sec-h rv d1">Education & <em>Achievements</em></div>
          </div>
          <div className="edu-grid rv d2">
            {D.edu.map(e=>(
              <div key={e.school} className="edu-card">
                <div className="edu-badge"><div className="edu-dot"/>{e.badge}</div>
                <div className="edu-school">{e.school}</div>
                <div className="edu-deg">{e.deg}</div>
                <div className="edu-meta">{e.meta}</div>
                <div className="edu-note">{e.note}</div>
              </div>
            ))}
          </div>
          <div style={{marginTop:8}}>
            <div style={{fontFamily:"'Fira Code',monospace",fontSize:10,letterSpacing:".18em",textTransform:"uppercase",color:"var(--red)",marginBottom:22,display:"flex",alignItems:"center",gap:8}}>
              <span style={{width:16,height:1,background:"var(--red)",display:"block"}}/>Honors & Recognition
            </div>
            <div className="ach-acc">
              {D.achievements.map((a,i)=>(
                <div key={a.title} className={`aacc-item rv${openAch===i?" open":""}`} style={{transitionDelay:`${i*.07}s`}}>
                  <button className="aacc-trigger" onClick={()=>setOpenAch(openAch===i?-1:i)}>
                    <div className="aacc-n">0{i+1}</div>
                    <div className="aacc-title">{a.title}<br/><span style={{fontSize:12,color:"var(--ink3)",fontWeight:300}}>{a.short}</span></div>
                    <div className="aacc-icon">+</div>
                  </button>
                  <div className="aacc-body">
                    <div className="aacc-content">{a.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═════ CONTACT ═════ */}
      <section id="contact" className="contact-sec">
        <div className="contact-inner">
          <div>
            <div className="ct-eyebrow rv">Get In Touch</div>
              <div className="ct-big rv d1">Let's build<br/><em>something</em><br/>great.</div>
              <p className="ct-desc rv d2">Open to AI engineering, machine learning, LLM systems, RAG platforms, and cloud-oriented data engineering roles. Expected graduation May 2026.</p>
              <div className="ct-avail rv d3"><div className="ct-gr-dot"/>Available · May 2026</div>
              <div style={{marginTop:24}} className="rv d3">
                <a href={RESUME_URL} target="_blank" rel="noreferrer"
                  style={{display:"inline-flex",alignItems:"center",gap:8,fontFamily:"'Fira Code',monospace",fontSize:11,letterSpacing:".09em",textTransform:"uppercase",color:"#fff",background:"var(--red)",padding:"12px 24px",borderRadius:"40px",transition:"all .3s",textDecoration:"none"}}>
                  ↓ Download Resume
                </a>
              </div>
            </div>
            <div className="rv d2">
              <div className="email-block">
                <div className="email-lbl">Primary Email</div>
                <div className="email-row">
                  <a href={`mailto:${D.email}`} className="email-addr">{D.email}</a>
                  <CopyBtn text={D.email}/>
                </div>
              </div>
              <div className="ct-links">
                {[
                  {ico:<IconMail/>,name:"Send Email",sub:D.email,href:`mailto:${D.email}`},
                  {ico:<IconLinkedIn/>,name:"LinkedIn",sub:"chinmaybitne",href:D.linkedin},
                  {ico:<IconGitHub/>,name:"GitHub",sub:"ChinmayBitne",href:D.github},
                  {ico:<IconPhone/>,name:"Phone",sub:D.phone,href:`tel:${D.phone}`},
                ].map(l=>(
                  <a key={l.name} href={l.href} target={l.href.startsWith("http")?"_blank":undefined} rel="noreferrer" className="ct-lnk">
                    <div className="ct-ll"><div className="ct-ico">{l.ico}</div><div><div className="cln">{l.name}</div><div className="cls">{l.sub}</div></div></div>
                    <div className="cla">↗</div>
                  </a>
                ))}
              </div>
            </div>
        </div>
      </section>

      <footer className="footer">
        <div className="sec-inner" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div className="footer-l">© 2026 <em>Chinmay Omkar Bitne</em></div>
          <button className="footer-up" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>Back to Top ↑</button>
        </div>
      </footer>

      </div>
      </div>
    </>
  );
}
