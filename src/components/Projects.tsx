import { useState } from 'react'
import { projects } from '../content'
import { useReveal } from '../hooks/useReveal'

export function Projects() {
  const { ref, visible } = useReveal<HTMLElement>()
  const [activeView, setActiveView] = useState<Record<string, 'attack' | 'defense'>>({})

  const getView = (id: string) => activeView[id] ?? 'defense'

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="section__inner">
        <span className="section__label font-mono">06 — Homelabs</span>
        <h2 className="section__title">Security Projects</h2>
        <p className="section__intro">
          Production-grade homelabs on Apple Silicon. Toggle between red team and blue team perspectives.
        </p>
        <div className={`projects-grid reveal reveal--stagger ${visible ? 'is-visible' : ''}`}>
          {projects.map((project) => {
            const view = getView(project.id)
            return (
              <article
                key={project.id}
                className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
              >
                {project.featured && (
                  <span className="project-card__badge font-mono">FEATURED LAB</span>
                )}
                <div className="project-card__header">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__tagline font-mono">{project.tagline}</p>
                </div>
                <p className="project-card__desc">{project.description}</p>

                <div className="project-card__toggle">
                  <button
                    type="button"
                    className={`project-card__toggle-btn font-mono ${view === 'attack' ? 'is-active project-card__toggle-btn--attack' : ''}`}
                    onClick={() => setActiveView({ ...activeView, [project.id]: 'attack' })}
                  >
                    🔴 Red Team
                  </button>
                  <button
                    type="button"
                    className={`project-card__toggle-btn font-mono ${view === 'defense' ? 'is-active project-card__toggle-btn--defense' : ''}`}
                    onClick={() => setActiveView({ ...activeView, [project.id]: 'defense' })}
                  >
                    🔵 Blue Team
                  </button>
                </div>

                <p className={`project-card__view project-card__view--${view}`}>
                  {view === 'attack' ? project.attackView : project.defenseView}
                </p>

                <ul className="project-card__highlights">
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className="project-card__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="chip chip--sm font-mono">{t}</span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
