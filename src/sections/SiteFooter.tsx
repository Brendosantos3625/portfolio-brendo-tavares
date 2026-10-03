import { ArrowUpRight, GitBranch } from 'lucide-react'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner section-shell">
        <div className="footer-identity"><strong>Brendo Santos Tavares</strong><span>Front-End Developer</span></div>
        <p>Construído com React + TypeScript</p>
        <div className="footer-links">
          <a href="https://github.com/Brendosantos3625" target="_blank" rel="noreferrer"><GitBranch size={14} aria-hidden="true" /> GitHub</a>
          <a href="https://linkedin.com/in/brendo-tavares-5678b0393" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  )
}