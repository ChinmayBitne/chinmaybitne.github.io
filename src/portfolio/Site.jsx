import { useEffect, useMemo, useState } from "react";
import ProjectVisual from "./components/ProjectVisual";
import {
  achievements,
  capabilities,
  certifications,
  coursework,
  education,
  dataExperience,
  experience,
  featuredCertificationTitles,
  focuses,
  getProject,
  industryPrograms,
  profile,
  projects,
} from "./content";
import "./styles.css";

const contactEmailHref = `mailto:${profile.email}?subject=${encodeURIComponent("Hiring Opportunity - Portfolio Inquiry")}&body=${encodeURIComponent("Hi Chinmay,\n\nI came across your portfolio and would like to discuss a potential opportunity with you. Please let me know when you are available to talk.\n\nBest regards,")}`;

function normalizePath(pathname) {
  const withoutIndex = pathname.replace(/\/index\.html$/, "");
  return withoutIndex.replace(/\/+$/, "") || "/";
}

function usePathRoute() {
  const [route, setRoute] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const onPopState = () => setRoute(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [route]);

  return route;
}

function useActiveSection(route) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (route !== "/ai-ml" && route !== "/data") {
      setActiveSection("home");
      return undefined;
    }
    const sections = [...document.querySelectorAll("main section[id]")];
    let frame;
    const update = () => {
      const anchor = window.innerHeight * .28;
      const atPageEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 48;
      const active = atPageEnd
        ? sections.at(-1)
        : sections.find((section) => {
          const bounds = section.getBoundingClientRect();
          return bounds.top <= anchor && bounds.bottom > anchor;
        });
      if (active) setActiveSection((current) => current === active.id ? current : active.id);
      frame = undefined;
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [route]);

  return activeSection;
}

function useReveals(route) {
  useEffect(() => {
    const items = [...document.querySelectorAll("[data-reveal]")];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }
    let frame;
    const reveal = (item) => {
      item.classList.add("is-visible");
      observer.unobserve(item);
    };
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) reveal(entry.target);
      }),
      { threshold: 0.08, rootMargin: "0px 0px -5%" },
    );
    const revealPassedItems = () => {
      items.forEach((item) => {
        if (!item.classList.contains("is-visible") && item.getBoundingClientRect().top < window.innerHeight) {
          reveal(item);
        }
      });
      frame = undefined;
    };
    const scheduleRevealCheck = () => {
      if (!frame) frame = window.requestAnimationFrame(revealPassedItems);
    };
    items.forEach((item) => observer.observe(item));
    revealPassedItems();
    window.addEventListener("scroll", scheduleRevealCheck, { passive: true });
    window.addEventListener("resize", scheduleRevealCheck);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scheduleRevealCheck);
      window.removeEventListener("resize", scheduleRevealCheck);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [route]);
}

function useScrollEffects(route) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    let frame;
    const update = () => {
      const range = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(window.scrollY / range, 1);
      const heroOffset = Math.min(window.scrollY, window.innerHeight * 1.1);
      document.documentElement.style.setProperty("--scroll-progress", progress);
      document.documentElement.style.setProperty("--hero-parallax-far", `${heroOffset * -.08}px`);
      document.documentElement.style.setProperty("--hero-parallax-near", `${heroOffset * .12}px`);
      document.documentElement.style.setProperty("--hero-parallax-copy", `${heroOffset * -.045}px`);
      document.documentElement.style.setProperty("--hero-parallax-portrait", `${heroOffset * .035}px`);
      document.documentElement.style.setProperty("--hero-parallax-rotate", `${heroOffset * .008}deg`);
      document.documentElement.style.setProperty("--hero-parallax-counter", `${heroOffset * -.012}deg`);
      frame = undefined;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (frame) cancelAnimationFrame(frame); };
  }, [route]);
}

function SkipLink() {
  const focusMain = (event) => {
    event.preventDefault();
    const main = document.getElementById("main-content");
    if (!main) return;
    main.setAttribute("tabindex", "-1");
    main.focus();
  };

  return <a className="skip-link" href="#main-content" onClick={focusMain}>Skip to content</a>;
}

function SectionLink({ id, className, current = false, children, onNavigate }) {
  const scrollToSection = (event) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
    onNavigate?.();
  };

  return <a className={className} href={`#${id}`} onClick={scrollToSection} aria-current={current ? "location" : undefined}>{children}</a>;
}

function Mark() {
  return <span className="brand-mark" aria-hidden="true"><b>C</b><i>B</i><em>.</em></span>;
}

function Header({ active = "ai", activeSection = "home", detail = false, theme = "dark", onThemeChange }) {
  const [open, setOpen] = useState(false);
  const navItems = [
    ["home", "Home"],
    ["about", "About"],
    ["skills", "Skills"],
    ["experience", "Experience"],
    ["selected-work", "Projects"],
    ["credentials", "Credentials"],
    ["education", "Education"],
    ["contact", "Contact"],
  ];

  useEffect(() => setOpen(false), [active]);

  return (
    <header className="site-header">
      <a className="brand" href={active === "data" ? "/data" : "/ai-ml"} aria-label="Chinmay Bitne portfolio home"><Mark /><span>Chinmay Bitne</span></a>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen((value) => !value)}>
        <span /><span /><span /><b>{open ? "Close" : "Menu"}</b>
      </button>
      <nav id="primary-navigation" className={open ? "primary-nav is-open" : "primary-nav"} aria-label="Portfolio focus">
        {detail
          ? <a href={active === "data" ? "/data" : "/ai-ml"}>← Portfolio</a>
          : navItems.map(([id, label]) => <SectionLink key={id} id={id} current={activeSection === id} onNavigate={() => setOpen(false)}>{label}</SectionLink>)}
      </nav>
      <div className="header-tools">
        <button className="theme-toggle" type="button" onClick={onThemeChange} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} aria-pressed={theme === "dark"}>
          <i aria-hidden="true"><span /></i><b>{theme === "dark" ? "Light" : "Dark"}</b>
        </button>
        <a className="header-resume" href={profile.resumes[active] || profile.resumes.ai} target="_blank" rel="noreferrer">Résumé <span>↗</span></a>
      </div>
    </header>
  );
}

function Hero({ focus }) {
  return (
    <section id="home" className="hero identity-hero" style={{ "--accent": focus.accent, "--secondary": focus.secondary }}>
      <div className="hero-parallax" aria-hidden="true">
        <span className="parallax-glow" />
        <span className="parallax-orbit orbit-one"><i /><i /></span>
        <span className="parallax-orbit orbit-two"><i /></span>
      </div>
      <div className="hero-copy">
        <p className="hero-overline"><span>Portfolio / 2026</span><b>{focus.eyebrow}</b></p>
        <h1 aria-label="Chinmay Bitne"><span data-text="Chinmay">Chinmay</span><span data-text="Bitne">Bitne</span></h1>
        <p className="eyebrow hero-identity"><span /><RoleGlitch roles={focus.roleCycle} fallback={focus.identity} /></p>
        <h2 className={focus.headlines ? "hero-capability is-typing" : "hero-capability"}>
          {focus.headlines ? <CapabilityTypewriter statements={focus.headlines} /> : focus.title}
        </h2>
        <div className="hero-tags">{focus.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className="hero-actions">
          <SectionLink className="button primary" id="selected-work">See focused work <span>↓</span></SectionLink>
          <a className="button ghost" href={contactEmailHref}>Start a conversation <span>↗</span></a>
        </div>
      </div>
      <div className="hero-portrait-panel" data-reveal>
        <div className="portrait-frame">
          <span className="portrait-label">Profile / 01</span>
          <img className="portrait-image" src="/images/chinmay-bitne-portrait.png" alt="Chinmay Bitne" width="373" height="583" fetchPriority="high" />
        </div>
        <div className="portrait-meta">
          <span>Tempe, Arizona</span>
          <strong><i aria-hidden="true" />Available</strong>
        </div>
      </div>
      <a className="hero-scroll" href="#about" onClick={(event) => { event.preventDefault(); document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); }}>Scroll to explore <span>↓</span></a>
    </section>
  );
}

function SectionHeading({ label, title, copy }) {
  return (
    <div className={copy ? "section-heading has-copy" : "section-heading no-copy"} data-reveal>
      <p className="eyebrow"><span />{label}</p>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function ProjectCard({ project, index, featured = false }) {
  return (
    <article className={featured ? "project-card featured" : "project-card"} data-reveal style={{ "--reveal-delay": `${Math.min(index, 2) * 90}ms` }}>
      <a className="project-visual-link" href={`/projects/${project.slug}`} aria-label={`Read ${project.title} case study`}>
        <ProjectVisual project={project} priority={featured} />
        <span className="visual-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="visual-status">{project.status}</span>
      </a>
      <div className="project-copy">
        <div className="project-meta"><span>{project.kicker}</span><span>{project.year}</span></div>
        <h3><a href={`/projects/${project.slug}`}>{project.title}</a></h3>
        <p>{project.summary}</p>
        <strong className="impact-line">{project.impact}</strong>
        <div className="project-footer">
          <div className="tag-row">{project.stack.slice(0, featured ? 6 : 4).map((item) => <span key={item}>{item}</span>)}</div>
          <a className="case-link" href={`/projects/${project.slug}`}>View case study <span>↗</span></a>
        </div>
      </div>
    </article>
  );
}

function ProjectSection({ focus }) {
  const selected = focus.featured.map(getProject).filter(Boolean);
  return (
    <section id="selected-work" className="page-section projects-section">
      <SectionHeading label="Selected work" title="Proof before promises." copy="Each project is presented as a problem, an engineering contribution, and a result—not a list of tools." />
      <div className="project-grid">
        {selected.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} featured={index === 0} />)}
      </div>
    </section>
  );
}

function PracticeSection({ active }) {
  const groups = capabilities[active] || capabilities.ai;
  const [selectedGroup, setSelectedGroup] = useState(0);

  useEffect(() => setSelectedGroup(0), [active]);

  const group = groups[selectedGroup] || groups[0];
  return (
    <section id="skills" className="page-section practice-section">
      <SectionHeading label="Skills" title={active === "data" ? "Analytics depth, backed by engineering." : "The complete AI engineering toolkit."} copy="Every capability from the original portfolio is retained, with additional tools selected for this portfolio’s focus." />
      <div className="practice-browser" data-reveal>
        <div className="practice-tabs" role="tablist" aria-label={`${active} skill categories`}>
          {groups.map((item, index) => <button id={`skill-tab-${active}-${index}`} key={item.title} type="button" role="tab" aria-selected={selectedGroup === index} aria-controls="skill-panel" onClick={() => setSelectedGroup(index)}><span>0{index + 1}</span>{item.title}</button>)}
        </div>
        <div key={group.title} id="skill-panel" className="practice-panel" role="tabpanel" aria-live="polite" aria-labelledby={`skill-tab-${active}-${selectedGroup}`}>
          <div><span>Selected capability</span><h3>{group.title}</h3><p>{group.items.length} skills and tools</p></div>
          <div className="skill-cloud">{group.items.map((skill, index) => <i key={skill} style={{ "--skill-index": index }}>{skill}</i>)}</div>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ focus }) {
  const about = focus.about;

  return (
    <section id="about" className="page-section about-section">
      <SectionHeading label="About" title={about.headline} copy={about.lead} />
      <div className="about-notes" data-reveal>
        {about.body.map((paragraph, index) => <article key={paragraph}><span>0{index + 1}</span><div><h3>{index === 0 ? "Profile" : "How I work"}</h3><p>{paragraph}</p></div></article>)}
      </div>
      <div className="about-principles" data-reveal>{about.principles.map((principle, index) => <p key={principle}><b>0{index + 1}</b><span>{principle}</span></p>)}</div>
    </section>
  );
}

function ExperienceSection({ active }) {
  const visibleExperience = active === "data" ? dataExperience : experience;
  return (
    <section id="experience" className="page-section experience-section">
      <SectionHeading label="Experience" title="Work shaped by delivery." />
      <div className="timeline">
        {visibleExperience.map((item, index) => (
          <article key={item.role} data-reveal>
            <div className="timeline-marker"><span>0{index + 1}</span><i /></div>
            <div className="timeline-date">{item.period}<small>{item.location}</small></div>
            <div className="timeline-copy">
              <h3>{item.role}</h3>{item.lens && <span className="experience-lens">{item.lens}</span>}<strong>{item.company}</strong><p>{item.summary}</p>
              <div className="evidence-row">{item.evidence.map((evidence) => <span key={evidence}>{evidence}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
      <div className="programs" data-reveal>
        <div className="programs-intro"><p className="eyebrow"><span />Industry simulations</p><h3>Additional enterprise exposure, clearly labeled.</h3></div>
        <div className="program-grid">{industryPrograms.map((program) => <article key={program.company}><span>{program.type}</span><h4>{program.company}</h4><strong>{program.title}</strong><p>{program.summary}</p></article>)}</div>
      </div>
    </section>
  );
}

function EducationSection({ active }) {
  const track = active === "data" ? "data" : "ai";
  return (
    <section id="education" className="page-section education-section">
      <SectionHeading label="Education" title="A technical foundation across the stack." />
      <div className="education-grid">
        {education.map((item) => (
          <article key={item.school} data-reveal><div className="education-date"><span>{item.period}</span></div><div className="education-copy"><p>{item.degree}</p><h3>{item.school}</h3><strong>{item.distinction}</strong></div></article>
        ))}
      </div>
      <div className="coursework" data-reveal>
        <h3>Relevant coursework</h3>
        <p>{coursework[track].join(" · ")}</p>
      </div>
      <div className="achievement-list" data-reveal>
        <p className="eyebrow"><span />Honors & recognition</p>
        <ol>
          {achievements.map((item, index) => (
            <li key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><small>{item.meta}</small></div><p>{item.summary}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CredentialsSection({ active }) {
  const [showAll, setShowAll] = useState(false);
  const [expandedTitle, setExpandedTitle] = useState(null);
  const featuredTitles = featuredCertificationTitles[active] || featuredCertificationTitles.ai;
  const ranked = [...certifications].sort((first, second) => {
    const firstRank = featuredTitles.indexOf(first.title);
    const secondRank = featuredTitles.indexOf(second.title);
    return (firstRank < 0 ? 99 : firstRank) - (secondRank < 0 ? 99 : secondRank);
  });
  const visibleCertifications = showAll ? ranked : ranked.slice(0, featuredTitles.length);
  const expandedCertification = visibleCertifications.find((item) => item.title === expandedTitle);

  useEffect(() => {
    setShowAll(false);
    setExpandedTitle(null);
  }, [active]);

  return (
    <section id="credentials" className="credentials-section">
      <div className="page-section">
        <SectionHeading label="Credentials" title="Continuous learning, documented." copy="Open any certificate for its learning scope, skills, and credential link." />
        <div className="credential-grid">
          {visibleCertifications.map((item, index) => (
            <article key={item.title} className={expandedTitle === item.title ? "is-active" : undefined}>
              <button className="credential-summary" type="button" aria-expanded={expandedTitle === item.title} aria-controls={expandedTitle === item.title ? "credential-detail-panel" : undefined} onClick={() => setExpandedTitle((current) => current === item.title ? null : item.title)}>
                <span>{String(index + 1).padStart(2, "0")}</span><small>{item.issuer} · {item.year}</small><h3>{item.title}</h3><i>{expandedTitle === item.title ? "−" : "+"}</i>
              </button>
            </article>
          ))}
        </div>
        {expandedCertification && (
          <div key={expandedCertification.title} id="credential-detail-panel" className="credential-expanded">
            <div><span>Selected credential</span><h3>{expandedCertification.title}</h3><small>{expandedCertification.issuer} · {expandedCertification.year}</small></div>
            <button type="button" onClick={() => setExpandedTitle(null)} aria-label="Close credential details">×</button>
            <p>{expandedCertification.summary}</p>
            <div className="tag-row">{expandedCertification.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            <a href={expandedCertification.link} target="_blank" rel="noreferrer">View certificate <span>↗</span></a>
          </div>
        )}
        <button className="certificate-toggle" type="button" aria-expanded={showAll} onClick={() => { setShowAll((value) => !value); setExpandedTitle(null); }}>
          <span>{showAll ? "Show focused certificates" : `View all ${certifications.length} certificates`}</span><i>{showAll ? "−" : "+"}</i>
        </button>
      </div>
    </section>
  );
}

function ContactSection({ accent, active = "ai" }) {
  return (
    <section id="contact" className="contact-section" style={{ "--accent": accent }}>
      <div data-reveal>
        <p className="eyebrow"><span />Open to opportunities</p>
        <h2>Let&apos;s build something useful.</h2>
        <p>{active === "data" ? "Data science and analytics roles where rigorous analysis, clear communication, and dependable engineering matter." : "AI/ML engineering roles where rigorous engineering and clear product thinking matter."}</p>
        <div className="contact-status"><i />Open to new opportunities</div>
      </div>
      <div className="contact-actions" data-reveal>
        <a href={contactEmailHref}><span>Email</span><strong>{profile.email}</strong><i>↗</i></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>chinmaybitne</strong><i>↗</i></a>
        <a href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span><strong>ChinmayBitne</strong><i>↗</i></a>
        <a href={`tel:${profile.phone.replace(/\s/g, "")}`}><span>Mobile</span><strong>{profile.phone}</strong><i>↗</i></a>
        <div className="contact-location"><span>Based in</span><strong>{profile.location}</strong></div>
      </div>
    </section>
  );
}

function PortfolioPage({ active = "ai", activeSection, theme, onThemeChange }) {
  const focus = focuses[active] || focuses.ai;

  useEffect(() => {
    document.title = `${focus.eyebrow} | ${profile.name}`;
  }, [active, focus]);

  return (
    <div className={`site-shell theme-${theme}`} style={{ "--accent": focus.accent, "--secondary": focus.secondary, "--theme-surface": focus.surface, "--theme-dark": focus.dark, "--theme-highlight": focus.highlight }}>
      <Header active={active} activeSection={activeSection} theme={theme} onThemeChange={onThemeChange} />
      <main id="main-content">
        <Hero focus={focus} />
        <AboutSection focus={focus} />
        <PracticeSection active={active} />
        <ExperienceSection active={active} />
        <ProjectSection focus={focus} />
        <CredentialsSection active={active} />
        <EducationSection active={active} />
        <ContactSection accent={focus.accent} active={active} />
      </main>
    </div>
  );
}

function ProjectDetail({ project, theme, onThemeChange }) {
  const primaryTrack = project.primaryTrack === "data" || project.tracks[0] === "data" ? "data" : "ai";
  const focus = focuses[primaryTrack] || focuses.ai;

  useEffect(() => {
    document.title = `${project.title} Case Study | ${profile.name}`;
  }, [project]);

  return (
    <div className={`site-shell theme-${theme}`} style={{ "--accent": focus.accent, "--secondary": focus.secondary, "--theme-surface": focus.surface, "--theme-dark": focus.dark, "--theme-highlight": focus.highlight }}>
      <Header active={primaryTrack} detail theme={theme} onThemeChange={onThemeChange} />
      <main id="main-content" className="case-page" style={{ "--accent": focus.accent, "--secondary": focus.secondary }}>
        <section className="case-hero">
          <img className="case-hero-image" src={project.cover} alt={project.visualAlt} fetchPriority="high" />
          <div className="case-hero-shade" aria-hidden="true" />
          <div className="case-hero-content">
            <a className="back-link" href={primaryTrack === "data" ? "/data" : "/ai-ml"}>← Back to portfolio</a>
            <p className="eyebrow"><span />{project.kicker}</p>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
            <div className="case-meta"><span>{project.year}</span><span>{project.status}</span><strong>{project.impact}</strong></div>
          </div>
          <span className="case-cover-label">Project cover · visual concept</span>
        </section>
        <section className="case-narrative page-section">
          <article data-reveal><span>01</span><div><h2>The challenge</h2><p>{project.challenge}</p></div></article>
          <article data-reveal><span>02</span><div><h2>My contribution</h2><p>{project.contribution}</p></div></article>
          <article data-reveal><span>03</span><div><h2>Key decisions</h2><ul>{project.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ul></div></article>
          <article data-reveal><span>04</span><div><h2>Evidence & outcomes</h2><ul>{project.results.map((result) => <li key={result}>{result}</li>)}</ul></div></article>
        </section>
        {project.gallery && (
          <section className="case-gallery page-section" data-reveal>
            <SectionHeading label="Project evidence" title="The real interface and output." />
            <div>{project.gallery.map((image, index) => <img key={image} src={image} alt={project.galleryAlts?.[index] || `${project.title} product view ${index + 1}`} loading="eager" decoding="async" />)}</div>
            {project.imageNote && <p className="gallery-note">{project.imageNote}</p>}
          </section>
        )}
        <section className="case-stack page-section" data-reveal>
          <p className="eyebrow"><span />Technology</p>
          <div className="large-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
          <div className="case-actions">
            {project.live && <a className="button primary" href={project.live} target="_blank" rel="noreferrer">Open live experience ↗</a>}
            {project.github && <a className="button ghost" href={project.github} target="_blank" rel="noreferrer">View source on GitHub ↗</a>}
          </div>
        </section>
        <ContactSection accent={focus.accent} active={primaryTrack} />
      </main>
    </div>
  );
}

function NotFound() {
  return <main id="main-content" className="not-found"><Mark /><h1>That page is not in this system.</h1><a className="button primary" href="/">Return to the shared-link page</a></main>;
}

function CapabilityTypewriter({ statements }) {
  const [visibleText, setVisibleText] = useState(() => statements[0] || "");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleText(statements[0]);
      return undefined;
    }

    setVisibleText(statements[0] || "");
    let statementIndex = 0;
    let characterIndex = statements[0]?.length || 0;
    let deleting = true;
    let timer;

    const advance = () => {
      const statement = statements[statementIndex];
      if (!deleting) {
        characterIndex += 1;
        setVisibleText(statement.slice(0, characterIndex));
        if (characterIndex >= statement.length) {
          deleting = true;
          timer = window.setTimeout(advance, 2100);
          return;
        }
        timer = window.setTimeout(advance, 42);
        return;
      }

      characterIndex -= 1;
      setVisibleText(statement.slice(0, Math.max(characterIndex, 0)));
      if (characterIndex <= 0) {
        deleting = false;
        statementIndex = (statementIndex + 1) % statements.length;
        timer = window.setTimeout(advance, 360);
        return;
      }
      timer = window.setTimeout(advance, 24);
    };

    timer = window.setTimeout(advance, 2400);
    return () => window.clearTimeout(timer);
  }, [statements]);

  return (
    <>
      <span className="capability-typewriter" aria-hidden="true"><em>{visibleText}</em><i /></span>
      <span className="sr-only">{statements.join(" ")}</span>
    </>
  );
}

function RoleGlitch({ roles, fallback }) {
  const enabled = Array.isArray(roles) && roles.length > 1;
  const [roleIndex, setRoleIndex] = useState(0);
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    if (!enabled || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    let swapTimer;
    let settleTimer;
    const interval = window.setInterval(() => {
      setGlitching(true);
      swapTimer = window.setTimeout(() => setRoleIndex((current) => (current + 1) % roles.length), 220);
      settleTimer = window.setTimeout(() => setGlitching(false), 640);
    }, 3800);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(swapTimer);
      window.clearTimeout(settleTimer);
    };
  }, [enabled, roles]);

  if (!enabled) return <b className="role-static">{fallback}</b>;
  const role = roles[roleIndex];
  return <b className={glitching ? "role-shift is-glitching" : "role-shift"} data-text={role}>{role}</b>;
}

function NeutralLanding({ theme }) {
  const focus = focuses.ai;

  useEffect(() => {
    window.location.replace("/ai-ml/");
  }, []);

  return (
    <div className={`site-shell theme-${theme}`} style={{ "--accent": focus.accent, "--secondary": focus.secondary, "--theme-surface": focus.surface, "--theme-dark": focus.dark, "--theme-highlight": focus.highlight }}>
      <main id="main-content" className="neutral-landing">
        <Mark />
        <p className="eyebrow"><span />Chinmay Omkar Bitne</p>
        <h1>Opening the AI/ML portfolio.</h1>
        <p>You will be redirected automatically.</p>
        <a className="button ghost" href="/ai-ml/">Continue to AI/ML <span>→</span></a>
      </main>
    </div>
  );
}

export default function Site() {
  const route = usePathRoute();
  const [theme, setTheme] = useState(() => window.localStorage.getItem("portfolio-theme") || "dark");
  const activeSection = useActiveSection(route);
  useReveals(route);
  useScrollEffects(route);

  const toggleTheme = () => setTheme((current) => current === "dark" ? "light" : "dark");

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme", theme);
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const view = useMemo(() => {
    const projectMatch = route.match(/^\/projects\/([^/]+)$/);
    if (projectMatch) {
      const project = getProject(projectMatch[1]);
      return project ? <ProjectDetail project={project} theme={theme} onThemeChange={toggleTheme} /> : <NotFound />;
    }
    if (route === "/ai-ml") return <PortfolioPage active="ai" activeSection={activeSection} theme={theme} onThemeChange={toggleTheme} />;
    if (route === "/data") return <PortfolioPage active="data" activeSection={activeSection} theme={theme} onThemeChange={toggleTheme} />;
    if (route === "/") return <NeutralLanding theme={theme} />;
    return <NotFound />;
  }, [activeSection, route, theme]);

  return <><SkipLink />{view}</>;
}
