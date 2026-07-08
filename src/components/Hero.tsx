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
    title: 'SEO y Marketing Digital',
    desc: 'Mejoramos tu posicionamiento en buscadores y diseñamos landing pages de alto impacto. Aumenta tu visibilidad online y convierte más visitantes en clientes.',
    btn: 'Mejora tu SEO',
  },
]

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#portafolio', label: 'Portafolio' },
  { href: '#precios', label: 'Precios' },
  { href: '#faq', label: 'FAQ' },
  { href: '#nosotros', label: 'Nosotros' },
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

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

      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="#inicio">
              <img src="/logos/mediano.png" alt="LetraLabs" style={{ height: 65, width: 'auto' }} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              <span></span>
            </button>
            <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
              <ul className="navbar-nav mx-auto">
                {navLinks.map(l => (
                  <li key={l.href} className="nav-item">
                    <a className="nav-link" href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
                  </li>
                ))}
              </ul>
              <div className="user_option">
                <a href="#contacto" className="order_online btn" onClick={() => setMenuOpen(false)}>
                  Solicitar Cotización
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section className="slider_section">
        <div className="container">
          {slides.map((s, i) => (
            <div key={i} style={{ display: i === active ? 'block' : 'none' }}>
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
          <div style={{ display: 'flex', gap: 8, marginTop: 20 }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? 20 : 12,
                  height: 12,
                  borderRadius: '50%',
                  border: 'none',
                  background: i === active ? '#ffbe33' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
