import { site } from '../content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy font-mono">
          © {year} {site.name} · Secured with purpose
        </p>
        <div className="footer__links">
          <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={site.resumePdf} download="Samruddhi_Patil_Resume.pdf">Resume</a>
          <a href="#home">Back to top</a>
        </div>
      </div>
    </footer>
  )
}
