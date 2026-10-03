import { useEffect, useRef, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'

type SiteHeaderProps = {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

const links = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'projeto-destaque', label: 'Case' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'habilidades', label: 'Stack' },
  { id: 'como-penso', label: 'Processo' },
  { id: 'contato', label: 'Contato' },
]

export default function SiteHeader({ theme, onToggleTheme }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top)[0]

        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-20% 0px -65% 0px' },
    )

    links.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  function handleMenuKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === 'Escape') {
      closeMenu()
      menuButtonRef.current?.focus()
    }
  }

  return (
    <header className="site-header">
      <nav className="navigation section-shell" aria-label="Navegação principal" onKeyDown={handleMenuKeyDown}>
        <a className="wordmark" href="#inicio" onClick={closeMenu}>
          <span className="wordmark-icon" aria-hidden="true">b.</span>
          <span>brendo santos tavares</span>
        </a>

        <button
          ref={menuButtonRef}
          className="menu-toggle icon-button"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>

        <div className={`navigation-panel${menuOpen ? ' is-open' : ''}`} id="primary-menu">
          <div className="navigation-links">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={activeSection === link.id ? 'location' : undefined}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            className="theme-toggle icon-button"
            type="button"
            aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
            title={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
            onClick={onToggleTheme}
          >
            {theme === 'dark' ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  )
}