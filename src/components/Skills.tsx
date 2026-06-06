import { skillCategories } from '../content'
import { useReveal } from '../hooks/useReveal'

const icons: Record<string, string> = {
  shield: '🛡',
  network: '⬡',
  code: '⟨/⟩',
  ops: '⚙',
}

export function Skills() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="section__inner">
        <span className="section__label font-mono">02 — Defense Matrix</span>
        <h2 className="section__title">Technical Capabilities</h2>
        <p className="section__intro">
          Layered security skills spanning detection, application security, network analysis, and security operations.
        </p>
        <div className={`skills-grid reveal reveal--stagger ${visible ? 'is-visible' : ''}`}>
          {skillCategories.map((cat) => (
            <article key={cat.layer} className="skill-card">
              <div className="skill-card__header">
                <span className="skill-card__icon font-mono" aria-hidden>{icons[cat.icon]}</span>
                <h3 className="skill-card__title">{cat.layer}</h3>
              </div>
              <ul className="skill-card__tags">
                {cat.tags.map((tag) => (
                  <li key={tag} className="skill-card__tag font-mono">{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
