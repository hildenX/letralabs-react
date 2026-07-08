import { useState, useEffect } from 'react'

const slides = [
  {
    title: 'Innovación en Desarrollo Digital',
    desc: 'En LetraLabs desarrollamos soluciones digitales completas: aplicaciones web y móviles, landing pages de alto impacto, optimización SEO y correos corporativos profesionales.',
    btn: 'Impulsa tu Presencia Digital',
  },
  {
    title: 'Aplicaciones Web y Móviles',
    desc: 'Creamos aplicaciones robustas y escalables para web y móviles (iOS/Android). Desde sitios corporativos hasta plataformas complejas optimizadas para máximo rendimiento.',
    btn: 'Desarrolla tu App',
  },
  {
    title: 'Diseño que Convierte',
    desc: 'Landing pages y sitios web con diseño moderno, orientados a resultados. Cada pixel cuenta para transformar visitantes en clientes.',
    btn: 'Ver Portafolio',
  },
]

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="hero_area" id="inicio">
      <div className="bg-box">
        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src="/logos/12.mp4" type="video/mp4" />
        </video>
      </div>
      <section className="slider_section">
        <div className="container">
          {slides.map((s, i) => (
            <div key={i} className={`slider-item ${i === active ? 'active' : ''}`} style={{ display: i === active ? 'block' : 'none' }}>
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <h1>{s.title}</h1>
                    <p>{s.desc}</p>
                    <a href="#contacto" className="order_btn btn">{s.btn}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="carousel-indicators" style={{ position: 'static', marginTop: 20 }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: 12, height: 12, borderRadius: '50%', border: 'none',
                  background: i === active ? '#ffbe33' : 'rgba(255,255,255,0.5)',
                  margin: '0 4px', cursor: 'pointer', padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
