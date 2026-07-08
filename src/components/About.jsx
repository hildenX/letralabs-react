export default function About() {
  return (
    <section className="about_section layout_padding" id="nosotros">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 reveal">
            <div className="detail-box">
              <div className="heading_container">
                <h2>Sobre <span className="gradient-text">LetraLabs</span></h2>
              </div>
              <p>Somos una agencia digital con sede en Puerto Montt, Chile, especializada en crear soluciones web y móviles que impulsan el crecimiento de tu negocio. Combinamos diseño moderno con tecnología de punta.</p>
              <p>Nuestro equipo trabaja de forma remota con clientes en todo Chile y Latinoamérica, entregando proyectos de calidad en tiempos récord.</p>
              <ul className="about-list">
                <li><i className="fa fa-check-circle"></i> Desarrollo Web Profesional</li>
                <li><i className="fa fa-check-circle"></i> Apps Móviles iOS & Android</li>
                <li><i className="fa fa-check-circle"></i> SEO & Marketing Digital</li>
                <li><i className="fa fa-check-circle"></i> Soporte y Mantención</li>
              </ul>
              <a href="#contacto" className="btn order_btn mt-3">Contáctanos</a>
            </div>
          </div>
          <div className="col-md-6 reveal">
            <div className="img-box text-center">
              <img src="/logos/PNGH.png" alt="LetraLabs" style={{ maxWidth: '100%', borderRadius: 20 }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
