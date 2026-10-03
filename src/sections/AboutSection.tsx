import { buildSolutions, projectEvolution } from '../data/projects'

export default function AboutSection() {
  return (
    <section className="about-section section-shell section-rule" id="sobre" aria-labelledby="about-title">
      <div className="about-header">
        <p className="eyebrow"><span className="eyebrow-index">02</span> Sobre</p>
        <h2 id="about-title">Foco em interfaces e soluções úteis<span className="accent-mark">.</span></h2>
      </div>

      <div className="about-layout">
        <div className="about-story">
          <p>
            Sou um desenvolvedor front-end em formação, com interesse em construir interfaces digitais claras,
            responsivas e fáceis de manter. Meu foco é transformar requisitos em experiências que funcionem bem em
            diferentes telas e contextos.
          </p>
          <p>
            Trabalhando com HTML, CSS, JavaScript, React, TypeScript, Node.js, APIs e automação, procuro construir
            soluções com boa organização, boa comunicação e atenção aos detalhes que impactam a experiência do usuário.
          </p>
        </div>

        <div className="about-panels">
          <div className="info-panel">
            <h3>O que eu construo</h3>
            <div className="solution-grid">
              {buildSolutions.map((solution) => (
                <div key={solution.title} className="solution-card">
                  <p>{solution.title}</p>
                  <ul>
                    {solution.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="info-panel compact-panel">
            <h3>Projetos que acompanham minha evolução</h3>
            <div className="evolution-grid">
              {projectEvolution.map((item) => (
                <div key={item.project} className="evolution-step">
                  <span>{item.title}</span>
                  <strong>{item.project}</strong>
                  <p>{item.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}