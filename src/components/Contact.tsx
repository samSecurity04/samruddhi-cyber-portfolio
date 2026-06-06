import { contact, site } from '../content'
import { useReveal } from '../hooks/useReveal'
import { EmailIcon, GitHubIcon, LinkedInIcon, ResumeIcon } from './ContactIcons'

const links = [
  {
    href: site.linkedin,
    label: contact.linkedinCta,
    shortLabel: 'LinkedIn',
    icon: LinkedInIcon,
    external: true,
    accent: 'linkedin',
  },
  {
    href: site.github,
    label: contact.githubCta,
    shortLabel: 'GitHub',
    icon: GitHubIcon,
    external: true,
    accent: 'github',
  },
  {
    href: site.resumePdf,
    label: contact.resumeCta,
    shortLabel: 'Resume',
    icon: ResumeIcon,
    download: 'Samruddhi_Patil_Resume.pdf',
    accent: 'resume',
  },
  {
    href: `mailto:${site.email}`,
    label: contact.emailCta,
    shortLabel: 'Email',
    icon: EmailIcon,
    accent: 'email',
  },
] as const

export function Contact() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section id="contact" className="section section--contact" ref={ref}>
      <div className="section__inner">
        <div className={`contact reveal ${visible ? 'is-visible' : ''}`}>
          <span className="section__label font-mono">08 — Connect</span>
          <h2 className="section__title contact__heading">{contact.heading}</h2>
          <p className="contact__body">{contact.body}</p>
          <div className="contact__bar" role="list">
            {links.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.shortLabel}
                  href={link.href}
                  className={`contact__item contact__item--${link.accent}`}
                  role="listitem"
                  {...('download' in link ? { download: link.download } : {})}
                  {...('external' in link ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <span className="contact__icon-wrap" aria-hidden>
                    <Icon className="contact__icon" />
                  </span>
                  <span className="contact__label">{link.shortLabel}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
