export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 footer-col text-center text-md-left">
            <img src="/logos/mediano.png" alt="LetraLabs" style={{ width: 140, marginBottom: 10 }} />
            <p style={{ color: '#aaa', fontSize: 13 }}>Desarrollo web y apps móviles.<br />Puerto Montt, Chile.</p>
          </div>
          <div className="col-md-4 footer-col text-center">
            <ul className="footer-nav" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['#servicios','#portafolio','#precios','#faq','#nosotros','#contacto'].map((href, i) => (
                <li key={i} style={{ display: 'inline', margin: '0 8px' }}>
                  <a href={href} style={{ color: '#aaa', fontSize: 13 }}>
                    {href.replace('#','')}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4 footer-col text-center text-md-right">
            <div className="footer-social">
              <a href="https://wa.me/56984921045" target="_blank" rel="noreferrer"><i className="fa fa-whatsapp"></i></a>
              <a href="mailto:contacto@letraslabs.cl"><i className="fa fa-envelope"></i></a>
            </div>
            <p style={{ color: '#666', fontSize: 12, marginTop: 10 }}>© {year} LetraLabs. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
