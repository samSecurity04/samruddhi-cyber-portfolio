import { useEffect, useState } from 'react'
import { site } from '../content'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Labs' },
  { href: '#terminal', label: 'Terminal' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__brand font-mono">
          <span className="nav__brand-icon" aria-hidden>◈</span>
          {site.name.split(' ')[0]}
          <span className="nav__brand-dot">.</span>
        </a>

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`} aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          {site.openToWork && (
            <span className="nav__badge font-mono">#OPENTOWORK</span>
          )}
          <a href={site.resumePdf} className="btn btn--sm btn--ghost" download="Samruddhi_Patil_Resume.pdf">
            CV
          </a>
          <a href={site.linkedin} className="btn btn--sm btn--primary" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
