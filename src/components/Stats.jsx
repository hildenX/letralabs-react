import { useEffect, useRef, useState } from 'react'

const stats = [
  { target: 15, suffix: '+', label: 'Proyectos Entregados' },
  { target: 10, suffix: '+', label: 'Clientes Satisfechos' },
  { target: 3, suffix: '+', label: 'Años de Experiencia' },
  { target: 100, suffix: '%', label: 'Tasa de Satisfacción' },
]

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef()
  const done = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true
        const duration = 1600
        const step = target / (duration / 16)
        let current = 0
        const t = setInterval(() => {
          current += step
          if (current >= target) { current = target; clearInterval(t) }
          setCount(Math.floor(current))
        }, 16)
      }
    }, { threshold: 0.6 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])

  return <span ref={ref} className="stat-num">{count}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="stats_section">
      <div className="container">
        <div className="row stats-row">
          {stats.map((s, i) => (
            <div key={i} className="col-6 col-md-3">
              <div className="stat-item">
                <div className="stat-num-wrap">
                  <Counter target={s.target} suffix={s.suffix} />
                </div>
                <span className="stat-label">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
