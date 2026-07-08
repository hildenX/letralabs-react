export default function About() {
  return (
    <section className="about_section layout_padding" id="nosotros">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 reveal text-center">
            <div className="img-box">
              <img src="/logos/PNGH.png" alt="LetraLabs" style={{ maxWidth: '100%', borderRadius: 20 }} />
            </div>
          </div>
          <div className="col-md-6 reveal">
            <div className="detail-box">
              <div className="heading_container">
                <h2>Somos <span style={{ color: '#ffbe33' }}>LetraLabs</span></h2>
              </div>
              <p>
                En LetraLabs nos especializamos en crear experiencias digitales que impulsan negocios. Nuestro equipo está compuesto por desarrolladores full-stack, diseñadores UX/UI, especialistas en SEO y consultores digitales que trabajan juntos para llevar tu proyecto al siguiente nivel.
              </p>
              <p>
                Desde landing pages efectivas hasta aplicaciones empresariales completas, transformamos ideas en soluciones digitales exitosas.
              </p>
              <a href="#contacto" className="btn" style={{
                display: 'inline-block',
                padding: '12px 45px',
                background: 'linear-gradient(135deg, #ffbe33 0%, #f5a623 100%)',
                color: '#ffffff',
                borderRadius: 45,
                fontWeight: 600,
                marginTop: 20,
              }}>
                Conoce Más
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
