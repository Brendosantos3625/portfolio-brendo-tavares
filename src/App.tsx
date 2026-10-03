import { useEffect, useState } from 'react'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import FeaturedCaseStudy from './sections/FeaturedCaseStudy'
import HeroSection from './sections/HeroSection'
import MethodSection from './sections/MethodSection'
import ProjectsSection from './sections/ProjectsSection'
import SiteFooter from './sections/SiteFooter'
import SkillsSection from './sections/SkillsSection'
import SiteHeader from './components/SiteHeader'
import './site.css'

type Theme = 'dark' | 'light'

function getInitialTheme(): Theme {
  const savedTheme = window.localStorage.getItem('brendo-theme')
  if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('brendo-theme', theme)
  }, [theme])

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <SiteHeader theme={theme} onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} />
      <main id="conteudo">
        <HeroSection />
        <AboutSection />
        <FeaturedCaseStudy />
        <ProjectsSection />
        <SkillsSection />
        <MethodSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
