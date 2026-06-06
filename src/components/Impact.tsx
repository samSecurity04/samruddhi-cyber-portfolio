import { impactStats } from '../content'
import { useReveal } from '../hooks/useReveal'

export function Impact() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section id="impact" className="section" ref={ref}>
      <div className="section__inner">
        <div className={`impact-grid reveal reveal--stagger ${visible ? 'is-visible' : ''}`}>
          {impactStats.map((stat) => (
            <article key={stat.label} className="impact-card">
              <span className="impact-card__value font-mono">{stat.value}</span>
              <h3 className="impact-card__label">{stat.label}</h3>
              <p className="impact-card__sub">{stat.sub}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
