import { education } from '../content'
import { useReveal } from '../hooks/useReveal'

export function Education() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section id="education" className="section" ref={ref}>
      <div className="section__inner">
        <span className="section__label font-mono">04 — Credentials</span>
        <h2 className="section__title">Education</h2>
        <div className={`edu-grid reveal reveal--stagger ${visible ? 'is-visible' : ''}`}>
          {education.map((item) => (
            <article key={item.degree} className="edu-card">
              <div className="edu-card__period font-mono">{item.period}</div>
              <h3 className="edu-card__degree">{item.degree}</h3>
              <p className="edu-card__school">{item.school}</p>
              <p className="edu-card__highlight">{item.highlight}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
