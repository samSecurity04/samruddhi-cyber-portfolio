import { useEffect, useRef, useState } from 'react'
import { terminalCommands } from '../content'

const WELCOME = [
  'Samruddhi Patil — Interactive Security Terminal',
  'Type "help" for available commands.',
  '',
]

export function Terminal() {
  const { ref, visible } = useRevealSection()
  const [lines, setLines] = useState<string[]>(WELCOME)
  const [input, setInput] = useState('')
  const bodyRef = useRef<HTMLDivElement>(null)
  const skipInitialScroll = useRef(true)

  useEffect(() => {
    if (skipInitialScroll.current) {
      skipInitialScroll.current = false
      return
    }
    const body = bodyRef.current
    if (body) body.scrollTop = body.scrollHeight
  }, [lines])

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase()
    const prompt = `samruddhi@melbourne-soc ~ $ ${raw}`

    if (!cmd) return

    if (cmd === 'clear') {
      setLines(WELCOME)
      return
    }

    const output = terminalCommands[cmd]
    if (output) {
      setLines((prev) => [...prev, prompt, ...output, ''])
    } else {
      setLines((prev) => [...prev, prompt, `Command not found: ${cmd}. Type "help" for options.`, ''])
    }
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    runCommand(input)
    setInput('')
  }

  return (
    <section id="terminal" className="section section--alt" ref={ref}>
      <div className="section__inner">
        <span className="section__label font-mono">07 — Interactive</span>
        <h2 className="section__title">Security Terminal</h2>
        <p className="section__intro">
          Try commands: <code className="inline-code font-mono">help</code>,{' '}
          <code className="inline-code font-mono">whoami</code>,{' '}
          <code className="inline-code font-mono">skills</code>,{' '}
          <code className="inline-code font-mono">labs</code>,{' '}
          <code className="inline-code font-mono">certs</code>,{' '}
          <code className="inline-code font-mono">contact</code>
        </p>
        <div className={`terminal reveal ${visible ? 'is-visible' : ''}`}>
          <div className="terminal__bar">
            <span className="terminal__dot terminal__dot--red" aria-hidden />
            <span className="terminal__dot terminal__dot--yellow" aria-hidden />
            <span className="terminal__dot terminal__dot--green" aria-hidden />
            <span className="terminal__bar-title font-mono">samruddhi@melbourne-soc</span>
          </div>
          <div className="terminal__body font-mono" ref={bodyRef}>
            {lines.map((line, i) => (
              <div key={`${i}-${line.slice(0, 20)}`} className="terminal__line">
                {line.startsWith('✓') ? (
                  <span className="terminal__success">{line}</span>
                ) : line.startsWith('▸') ? (
                  <span className="terminal__highlight">{line}</span>
                ) : line.startsWith('[') ? (
                  <span className="terminal__category">{line}</span>
                ) : (
                  line
                )}
              </div>
            ))}
            <form className="terminal__form" onSubmit={onSubmit}>
              <span className="terminal__prompt">samruddhi@melbourne-soc ~ $</span>
              <input
                type="text"
                className="terminal__input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                spellCheck={false}
                autoComplete="off"
                aria-label="Terminal command input"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function useRevealSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}
