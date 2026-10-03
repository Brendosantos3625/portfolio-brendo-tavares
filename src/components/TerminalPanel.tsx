import { Terminal } from 'lucide-react'

const terminalLines = [
  { command: 'perfil', output: 'Brendo Santos Tavares' },
  { command: 'objetivo', output: 'Desenvolvedor Front-End Júnior' },
  { command: 'foco', output: 'interfaces · APIs · responsividade' },
  { command: 'status', output: 'buscando primeira oportunidade' },
]

export default function TerminalPanel() {
  return (
    <aside className="terminal-panel" aria-label="Terminal visual com resumo profissional">
      <div className="terminal-header">
        <span className="terminal-title"><Terminal size={15} aria-hidden="true" /> perfil.local</span>
        <span className="terminal-state">READ ONLY</span>
      </div>
      <div className="terminal-body">
        {terminalLines.map((line) => (
          <div className="terminal-entry" key={line.command}>
            <p className="terminal-command"><span aria-hidden="true">$</span> {line.command}</p>
            <p className="terminal-output">{line.output}</p>
          </div>
        ))}
      </div>
      <div className="terminal-footer"><span>UTF-8</span><span>PERFIL / 01</span></div>
    </aside>
  )
}