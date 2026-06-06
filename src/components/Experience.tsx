import { experience } from '../content'
import { useReveal } from '../hooks/useReveal'

export function Experience() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section id="experience" className="section section--alt" ref={ref}>
      <div className="section__inner">
        <span className="section__label font-mono">03 — Operations Log</span>
        <h2 className="section__title">Experience</h2>
        <p className="section__intro">
          From malware analysis platforms to high-pressure operational environments — building the foundation for SOC excellence.
        </p>
        <div className={`timeline reveal ${visible ? 'is-visible' : ''}`}>
          {experience.map((item, i) => (
            <article key={`${item.company}-${item.title}`} className="timeline__item">
              <div className="timeline__marker font-mono">{String(i + 1).padStart(2, '0')}</div>
              <div className="timeline__card">
                <div className="timeline__meta font-mono">
                  <time>{item.date}</time>
                  <span className="timeline__type">{item.type}</span>
                </div>
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__company">{item.company}</p>
                <p className="timeline__location font-mono">{item.location}</p>
                <p className="timeline__narrative">{item.narrative}</p>
                <ul className="timeline__outcomes">
                  {item.outcomes.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
                <div className="timeline__tools">
                  {item.tools.map((t) => (
                    <span key={t} className="chip chip--sm font-mono">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
