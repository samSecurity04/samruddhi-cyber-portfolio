import { about, site } from '../content'
import { useReveal } from '../hooks/useReveal'

export function About() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section id="about" className="section section--alt" ref={ref}>
      <div className="section__inner">
        <div className={`about reveal ${visible ? 'is-visible' : ''}`}>
          <div className="about__visual">
            <div className="about__photo-wrap">
              <div className="about__photo-crop">
                <img src={about.photo} alt={`${site.name} — cybersecurity professional`} className="about__photo" />
              </div>
              <div className="about__photo-frame" aria-hidden />
            </div>
            <ul className="about__chips">
              {about.statChips.map((chip) => (
                <li key={chip} className="about__tile font-mono">{chip}</li>
              ))}
            </ul>
          </div>
          <div className="about__content">
            <span className="section__label font-mono">01 — About</span>
            <h2 className="section__title">{about.title}</h2>
            <p className="about__lead">{about.lead}</p>
            <p className="about__extended">{about.extended}</p>
            <div className="about__focus">
              <span className="about__focus-label font-mono">{about.focusLabel}</span>
              <p>{about.focusValue}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
