import { ScrollProgress } from './components/ScrollProgress'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Certifications } from './components/Certifications'
import { Projects } from './components/Projects'
import { Impact } from './components/Impact'
import { Terminal } from './components/Terminal'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Impact />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Projects />
        <Terminal />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
