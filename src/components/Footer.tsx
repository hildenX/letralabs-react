export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row footer-col">
          <div className="col-md-4 footer_contact">
            <h4>Contacto</h4>
            <div className="contact_link_box">
              <a href="mailto:contacto@letraslabs.cl">
                <i className="fa fa-envelope"></i> contacto@letraslabs.cl
              </a>
              <a href="#contacto">
                <i className="fa fa-commenting"></i> Formulario de Contacto
              </a>
              <a href="https://wa.me/56984921045" target="_blank" rel="noreferrer">
                <i className="fa fa-map-marker"></i> Servicios Globales
              </a>
            </div>
          </div>
          <div className="col-md-4 text-center footer_brand">
            <div className="footer-logo">LetraLabs</div>
            <p className="footer-tagline">Innovación Digital sin Límites</p>
          </div>
          <div className="col-md-4 footer_hours">
            <h4>Horario de Atención</h4>
            <p><strong>Lunes a Viernes</strong></p>
            <p>9:00 AM - 6:00 PM</p>
            <p className="timezone">Zona Horaria Local</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {year} LetraLabs. Todos los Derechos Reservados.</p>
        </div>
      </div>
    </footer>
  )
}
