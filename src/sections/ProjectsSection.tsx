import { ArrowUpRight, GitBranch } from 'lucide-react'
import { projects } from '../data/projects'

function ProjectEntry({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <article className="project-entry">
      <div className="project-card-top">
        <p className="project-index">{String(index + 1).padStart(2, '0')} <span>/</span> {project.category}</p>
        <h3>{project.title}</h3>
      </div>

      <div className="project-entry-main">
        <p>{project.description}</p>

        <div className="project-stack" aria-label={`Tecnologias de ${project.title}`}>
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <ul className="project-proof-list" aria-label={`O que foi construído em ${project.title}`}>
          {project.whatBuilt.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p className="project-note">{project.note}</p>
      </div>

      <div className="project-entry-links">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            Ver demo <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        )}
        <a href={project.repository ?? 'https://github.com/Brendosantos3625'} target="_blank" rel="noreferrer">
          <GitBranch size={14} aria-hidden="true" /> Ver código <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}

export default function ProjectsSection() {
  return (
    <section className="projects-section section-shell section-rule" id="projetos" aria-labelledby="projects-title">
      <div className="projects-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow-index">04</span> Projetos</p>
          <h2 id="projects-title">Trabalhos que mostram meu foco e evolução<span className="accent-mark">.</span></h2>
        </div>
        <a className="text-link" href="https://github.com/Brendosantos3625" target="_blank" rel="noreferrer">
          Ver GitHub <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectEntry key={project.slug} project={project} index={index + 1} />
        ))}
      </div>

      <p className="projects-count">2 projetos públicos apresentados · 1 estudo de caso aprofundado</p>
    </section>
  )
}