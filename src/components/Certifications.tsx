import { certifications } from '../content'
import { useReveal } from '../hooks/useReveal'

export function Certifications() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section id="certifications" className="section section--alt" ref={ref}>
      <div className="section__inner">
        <span className="section__label font-mono">05 — Credentials</span>
        <h2 className="section__title">Certifications</h2>
        <p className="section__intro">
          Industry-validated credentials across security operations, application security, and compliance fundamentals.
        </p>
        <div className={`cert-grid reveal reveal--stagger ${visible ? 'is-visible' : ''}`}>
          {certifications.map((cert) => (
            <article key={cert.name} className="cert-card">
              <h3 className="cert-card__name">{cert.name}</h3>
              <p className="cert-card__issuer font-mono">{cert.issuer}</p>
              <div className="cert-card__skills">
                {cert.skills.map((s) => (
                  <span key={s} className="chip chip--sm font-mono">{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
