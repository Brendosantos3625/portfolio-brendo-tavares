const approachSteps = [
  { title: 'Entender o problema', detail: 'Separar requisito, público e resultado esperado.' },
  { title: 'Planejar antes de implementar', detail: 'Mapear conteúdo, estados e estrutura da interface.' },
  { title: 'Construir responsivamente', detail: 'Tratar o layout como parte da implementação, não como ajuste final.' },
  { title: 'Testar e corrigir', detail: 'Revisar comportamento, acessibilidade e erros.' },
  { title: 'Melhorar continuamente', detail: 'Usar feedback para deixar a próxima versão mais clara.' },
]

export default function MethodSection() {
  return (
    <section className="method-section section-shell section-rule" id="como-penso" aria-labelledby="method-title">
      <div className="section-heading-row">
        <div>
          <p className="eyebrow"><span className="eyebrow-index">06</span> Processo</p>
          <h2 id="method-title">Mais do que<br /><span>escrever código.</span></h2>
        </div>
        <p className="section-aside">Um processo simples ajuda a explicar decisões e encontrar problemas cedo.</p>
      </div>
      <ol className="method-list">
        {approachSteps.map((step, index) => (
          <li key={step.title}>
            <span className="method-index">{String(index + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}