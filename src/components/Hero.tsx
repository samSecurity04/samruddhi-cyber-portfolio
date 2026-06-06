import { useEffect, useState } from 'react'
import { hero, site } from '../content'
import { SOCDashboard } from './SOCDashboard'

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    const current = hero.roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayText === current) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayText === '') {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % hero.roles.length)
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          deleting ? current.slice(0, displayText.length - 1) : current.slice(0, displayText.length + 1),
        )
      }, deleting ? 40 : 80)
    }

    return () => clearTimeout(timeout)
  }, [displayText, deleting, roleIndex])

  return (
    <section id="home" className={`hero ${mounted ? 'hero--mounted' : ''}`}>
      <div className="hero__scanline" aria-hidden />
      <div className="hero__grid-bg" aria-hidden />
      <div className="hero__inner">
        <div className="hero__layout">
          <div className="hero__copy">
            {site.openToWork && (
              <div className="hero__otw font-mono">
                <span className="hero__otw-dot" aria-hidden />
                #OPENTOWORK
              </div>
            )}
            <p className="hero__eyebrow font-mono">{site.title}</p>
            <h1 className="hero__headline">
              {hero.headline}
            </h1>
            <p className="hero__role font-mono">
              <span className="hero__role-prefix">&gt; role:</span>{' '}
              <span className="hero__role-text">{displayText}</span>
              <span className="hero__cursor" aria-hidden>|</span>
            </p>
            <p className="hero__sub">{hero.subheading}</p>
            <div className="hero__actions">
              <a href="#projects" className="btn btn--primary">
                {hero.ctaPrimary}
              </a>
              <a href={site.resumePdf} className="btn btn--ghost" download="Samruddhi_Patil_Resume.pdf">
                {hero.ctaSecondary}
              </a>
              <a href={site.linkedin} className="btn btn--ghost" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
            <p className="hero__seeking font-mono">{hero.seeking}</p>
            <p className="hero__location font-mono">
              <span aria-hidden>📍</span> {site.location}
            </p>
          </div>
          <div className="hero__dash">
            <SOCDashboard />
          </div>
        </div>
      </div>
    </section>
  )
}
