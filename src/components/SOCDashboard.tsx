import { useEffect, useState } from 'react'

const alerts = [
  { time: '14:32:01', severity: 'high', msg: 'SSH brute force detected — T1110.001', host: 'kali-endpoint' },
  { time: '14:31:44', severity: 'medium', msg: 'File integrity change — /etc/passwd', host: 'ubuntu-server' },
  { time: '14:30:12', severity: 'low', msg: 'Nmap scan completed — T1046', host: 'kali-endpoint' },
  { time: '14:28:55', severity: 'high', msg: 'SQL injection blocked by WAF — T1190', host: 'dvwa-lab' },
  { time: '14:27:03', severity: 'medium', msg: 'Rate limit triggered — HTTP flood', host: 'safeline-waf' },
  { time: '14:25:18', severity: 'info', msg: 'FIM baseline sync complete', host: 'wazuh-manager' },
]

const endpoints = [
  { name: 'wazuh-manager', status: 'online', ip: '192.168.56.10' },
  { name: 'kali-endpoint', status: 'online', ip: '192.168.56.20' },
  { name: 'ubuntu-dvwa', status: 'online', ip: '192.168.56.30' },
]

export function SOCDashboard() {
  const [tick, setTick] = useState(0)
  const [events, setEvents] = useState(847)

  useEffect(() => {
    const id = setInterval(() => {
      setTick((t) => t + 1)
      if (Math.random() > 0.6) setEvents((e) => e + 1)
    }, 2000)
    return () => clearInterval(id)
  }, [])

  const visibleAlerts = [...alerts, ...alerts].slice(tick % alerts.length, (tick % alerts.length) + 5)

  return (
    <div className="soc-dash">
      <div className="soc-dash__header">
        <div className="soc-dash__title font-mono">
          <span className="soc-dash__pulse" aria-hidden />
          LIVE SOC MONITOR
        </div>
        <div className="soc-dash__status font-mono">
          THREAT LEVEL: <span className="soc-dash__level">ELEVATED</span>
        </div>
      </div>

      <div className="soc-dash__metrics">
        <div className="soc-dash__metric">
          <span className="soc-dash__metric-val font-mono">{events.toLocaleString()}</span>
          <span className="soc-dash__metric-label">Events / 24h</span>
        </div>
        <div className="soc-dash__metric">
          <span className="soc-dash__metric-val font-mono">3</span>
          <span className="soc-dash__metric-label">Endpoints</span>
        </div>
        <div className="soc-dash__metric">
          <span className="soc-dash__metric-val font-mono">12</span>
          <span className="soc-dash__metric-label">Scenarios Run</span>
        </div>
        <div className="soc-dash__metric">
          <span className="soc-dash__metric-val font-mono soc-dash__metric-val--green">98.7%</span>
          <span className="soc-dash__metric-label">Detection Rate</span>
        </div>
      </div>

      <div className="soc-dash__grid">
        <div className="soc-dash__panel">
          <h3 className="soc-dash__panel-title font-mono">Alert Feed</h3>
          <ul className="soc-dash__alerts">
            {visibleAlerts.map((a, i) => (
              <li key={`${a.time}-${i}`} className={`soc-dash__alert soc-dash__alert--${a.severity}`}>
                <span className="soc-dash__alert-time font-mono">{a.time}</span>
                <span className="soc-dash__alert-msg">{a.msg}</span>
                <span className="soc-dash__alert-host font-mono">{a.host}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="soc-dash__panel">
          <h3 className="soc-dash__panel-title font-mono">Endpoints</h3>
          <ul className="soc-dash__endpoints">
            {endpoints.map((ep) => (
              <li key={ep.name} className="soc-dash__endpoint">
                <span className={`soc-dash__ep-dot soc-dash__ep-dot--${ep.status}`} aria-hidden />
                <span className="soc-dash__ep-name font-mono">{ep.name}</span>
                <span className="soc-dash__ep-ip font-mono">{ep.ip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
