import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <a className="navbar-brand" href="#inicio">
            <img src="/logos/mediano.png" alt="LetraLabs Logo" style={{ width: 200, height: 'auto' }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <span></span>
          </button>
          <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><a className="nav-link" href="#inicio" onClick={() => setOpen(false)}>Inicio</a></li>
              <li className="nav-item"><a className="nav-link" href="#servicios" onClick={() => setOpen(false)}>Servicios</a></li>
              <li className="nav-item"><a className="nav-link" href="#portafolio" onClick={() => setOpen(false)}>Portafolio</a></li>
              <li className="nav-item"><a className="nav-link" href="#precios" onClick={() => setOpen(false)}>Precios</a></li>
              <li className="nav-item"><a className="nav-link" href="#faq" onClick={() => setOpen(false)}>FAQ</a></li>
              <li className="nav-item"><a className="nav-link" href="#nosotros" onClick={() => setOpen(false)}>Nosotros</a></li>
            </ul>
            <div className="user_option">
              <a href="#contacto" className="order_btn btn" onClick={() => setOpen(false)}>Solicitar Cotización</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
