import { ArrowRight, ArrowUpRight, GitBranch } from 'lucide-react'
import profilePhoto from '../assets/profile.png'
import TerminalPanel from '../components/TerminalPanel'

export default function HeroSection() {
  return (
    <section className="hero-section section-shell" id="inicio" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="hero-identity">
          <p className="eyebrow"><span className="eyebrow-index">01</span> Portfólio / Front-end</p>
        </div>

        <h1 className="hero-title" id="hero-title">
          <span>Brendo Santos Tavares</span>
          <small>Desenvolvedor Front-End Júnior</small>
        </h1>

        <p className="hero-description">
          Construo interfaces web modernas, responsivas e funcionais, com foco em clareza, performance e boa experiência de uso.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projetos">
            Ver projetos <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="https://github.com/Brendosantos3625" target="_blank" rel="noreferrer">
            <GitBranch size={15} aria-hidden="true" /> Ver GitHub <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <a className="button button-tertiary" href="https://linkedin.com/in/brendo-tavares-5678b0393" target="_blank" rel="noreferrer">
            <ArrowUpRight size={15} aria-hidden="true" /> LinkedIn <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>

        <ul className="hero-badges" aria-label="Principais tecnologias">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>TypeScript</li>
        </ul>
      </div>

      <div className="hero-visual" aria-label="Foto profissional de Brendo Santos Tavares">
        <div className="photo-card">
          <div className="photo-frame">
            <img src={profilePhoto} alt="Retrato profissional de Brendo Santos Tavares" fetchPriority="high" />
          </div>
        </div>
        <div className="hero-floating-card">
          <span>Foco</span>
          <strong>Interfaces · APIs · automação</strong>
        </div>
      </div>

      <TerminalPanel />
    </section>
  )
}