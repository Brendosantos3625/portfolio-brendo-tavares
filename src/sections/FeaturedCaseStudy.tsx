import { ArrowUpRight, GitBranch } from 'lucide-react'
import { featuredProject } from '../data/projects'

export default function FeaturedCaseStudy() {
  return (
    <section className="case-section" id="projeto-destaque" aria-labelledby="case-title">
      <div className="section-shell">
        <div className="case-heading">
          <p className="eyebrow"><span className="eyebrow-index">03</span> Case técnico</p>
          <span className="case-label">Flutter · Supabase</span>
        </div>

        <div className="case-layout">
          <div className="case-intro">
            <h2 id="case-title">
              {featuredProject.title}
              <span className="accent-mark">.</span>
            </h2>
            <p className="case-category">{featuredProject.category}</p>
            <p className="case-description">{featuredProject.description}</p>
            <p className="case-origin">{featuredProject.sourceNote}</p>

            <a className="button button-primary" href={featuredProject.repository} target="_blank" rel="noreferrer">
              Ver código no GitHub <GitBranch size={15} aria-hidden="true" /> <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>

          <div className="case-evidence">
            <div className="evidence-block">
              <p className="evidence-label">Arquitetura documentada</p>
              <ol className="architecture-flow" aria-label="Camadas do projeto AVESSO X GO">
                {featuredProject.architecture.map((layer, index) => (
                  <li key={layer}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {layer}
                  </li>
                ))}
              </ol>
            </div>

            <div className="case-detail-grid">
              <div className="case-detail-block">
                <h3>Problema</h3>
                <p>{featuredProject.problem}</p>
              </div>

              <div className="case-detail-block">
                <h3>O que foi desenvolvido</h3>
                <ul>
                  {featuredProject.solution.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="case-detail-block">
                <h3>Stack</h3>
                <ul>
                  {featuredProject.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="case-detail-block">
                <h3>Desafios técnicos</h3>
                <ul>
                  {featuredProject.challenges.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="case-detail-block">
                <h3>Decisões técnicas</h3>
                <ul>
                  {featuredProject.decisions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="case-detail-block">
                <h3>Resultado</h3>
                <p>{featuredProject.result}</p>
              </div>
            </div>

            <dl className="evidence-list">
              {featuredProject.evidence.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}