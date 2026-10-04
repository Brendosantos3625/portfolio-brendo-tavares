import { ArrowUpRight, GitBranch, Mail, MessageCircle } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="contact-section section-shell" id="contato" aria-labelledby="contact-title">
      <p className="eyebrow"><span className="eyebrow-index">07</span> Contato</p>

      <div className="contact-layout">
        <div>
          <h2 id="contact-title">
            Procurando um desenvolvedor com foco em interfaces e entrega clara<span className="accent-mark">?</span>
          </h2>
          <p>
            Estou aberto a oportunidades front-end júnior para aprender, contribuir e construir projetos com boa
            organização, boa comunicação e atenção à experiência do usuário.
          </p>
        </div>

        <div className="contact-actions">
          <a className="button button-primary" href="https://wa.me/5561982112344" target="_blank" rel="noreferrer">
            <MessageCircle size={15} aria-hidden="true" /> WhatsApp: +55 61 98211-2344 <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="mailto:tavaresbrendo530@gmail.com">
            <Mail size={15} aria-hidden="true" /> tavaresbrendo530@gmail.com
          </a>
          <a className="button button-primary" href="https://linkedin.com/in/brendo-tavares-5678b0393" target="_blank" rel="noreferrer">
            <ArrowUpRight size={15} aria-hidden="true" /> Conectar no LinkedIn <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="https://github.com/Brendosantos3625" target="_blank" rel="noreferrer">
            <GitBranch size={15} aria-hidden="true" /> Ver GitHub <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}