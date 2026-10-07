export function Logo(){return <a className="brand" href="/"><span className="mark">GV</span><span>GANVESYS <b>TECHNOLOGIES</b></span></a>}

export function Nav(){
 return <header className="nav">
  <div className="navin">
   <Logo/>
   <nav className="links">
    <a href="/services">Services</a><a href="/projects">Projects</a><a href="/solutions">Solutions</a><a href="/about">About</a><a href="/careers">Careers</a>
   </nav>
   <div className="navActions"><a className="navContact" href="/contact">Start a project <span>↗</span></a><a className="adminLink" href="/admin">Admin</a></div>
  </div>
 </header>
}

export function Footer(){
 return <footer className="footer">
  <div className="wrap footerGrid">
   <div><Logo/><p className="footerLead">Engineering the future. Delivering intelligence.</p></div>
   <div><small>EXPLORE</small><a href="/services">Services</a><a href="/projects">Projects</a><a href="/solutions">Solutions</a><a href="/about">About</a></div>
   <div><small>COMPANY</small><a href="/careers">Careers</a><a href="/contact">Contact</a><a href="/admin">Control Center</a></div>
  </div>
  <div className="wrap footerBottom"><span>© {new Date().getFullYear()} GANVESYS TECHNOLOGIES</span><span>Built for engineering. Designed for scale.</span></div>
 </footer>
}

export function Shell({children}){return <><Nav/>{children}<Footer/></>}

export function NetworkVisual(){
 return <div className="networkVisual" aria-hidden="true">
   <div className="glow g1"/><div className="glow g2"/>
   <svg viewBox="0 0 700 560" className="networkSvg">
    <defs><linearGradient id="line" x1="0" x2="1"><stop offset="0" stopColor="#60a5fa"/><stop offset="1" stopColor="#8b5cf6"/></linearGradient></defs>
    <g className="lines">
      <path d="M350 280 L150 130 M350 280 L550 125 M350 280 L130 410 M350 280 L570 420 M350 280 L350 70 M350 280 L350 490"/>
      <path d="M150 130 L350 70 L550 125 M130 410 L350 490 L570 420"/>
    </g>
    <g className="nodes">
      <circle cx="350" cy="280" r="58" className="core"/><text x="350" y="286" textAnchor="middle">GV AI</text>
      <circle cx="150" cy="130" r="18"/><circle cx="550" cy="125" r="18"/><circle cx="130" cy="410" r="18"/><circle cx="570" cy="420" r="18"/><circle cx="350" cy="70" r="18"/><circle cx="350" cy="490" r="18"/>
    </g>
   </svg>
   <div className="floatingCard c1"><b>AI ENGINE</b><span>ACTIVE</span></div>
   <div className="floatingCard c2"><b>QA AUTOMATION</b><span>99.2%</span></div>
   <div className="floatingCard c3"><b>CLOUD</b><span>SCALABLE</span></div>
 </div>
}

export function RevealCard({tag,title,text,icon="✦",slug}){
 return <a href={slug?`/services/${slug}`:"#"} className="serviceCard serviceCardLink"><div className="serviceIcon">{icon}</div><div className="tag">{tag}</div><h3>{title}</h3><p>{text}</p><span className="arrow">Explore capability <b>↗</b></span></a>
}
