const skillGroups = [
  { label: 'Front-end', items: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'] },
  { label: 'Back-end', items: ['Node.js', 'APIs'] },
  { label: 'Ferramentas', items: ['Git', 'GitHub', 'VS Code'] },
  { label: 'Automação', items: ['n8n', 'Python'] },
  { label: 'IA', items: ['Integrações', 'APIs de IA'] },
]

export default function SkillsSection() {
  return (
    <section className="skills-section section-shell section-rule" id="habilidades" aria-labelledby="skills-title">
      <div className="section-heading-row">
        <div>
          <p className="eyebrow"><span className="eyebrow-index">05</span> Skills</p>
          <h2 id="skills-title">Tecnologias e ferramentas do meu stack<span className="accent-mark">.</span></h2>
        </div>
        <p className="section-aside">
          Trabalho com frontend e também exploro integrações, automações e APIs para ampliar a qualidade das soluções.
        </p>
      </div>

      <div className="skill-list" aria-label="Lista de tecnologias por área">
        {skillGroups.map((group, index) => (
          <div className="skill-row" key={group.label}>
            <dt>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {group.label}
            </dt>
            <dd>
              {group.items.map((item) => (
                <span className="skill-item" key={item}>{item}</span>
              ))}
            </dd>
          </div>
        ))}
      </div>
    </section>
  )
}