const projects = [
  {
    bg: 'linear-gradient(135deg, #4a0080 0%, #7c3aed 100%)',
    logo: '/pudu-logo-new.png',
    name: 'Pudú Tecnología',
    url: 'https://pudutecnologia.cl',
    tags: ['Web Corporativa', 'SEO'],
  },
  {
    bg: 'linear-gradient(135deg, #001f4d 0%, #003580 100%)',
    logo: '/logooficials.png',
    name: 'Repacmar',
    url: 'https://repacmar.cl',
    tags: ['E-Commerce', 'Web'],
  },
  {
    bg: 'linear-gradient(135deg, #7c4a00 0%, #c47a00 100%)',
    logo: '/fidaltec.png',
    name: 'FidalTec',
    url: 'https://fidaltec.cl',
    tags: ['Web Corporativa', 'App'],
  },
  {
    bg: 'linear-gradient(135deg, #0a1628 0%, #1e3a5f 100%)',
    logo: '/image3.png',
    name: 'Proyecto 6',
    url: 'https://cvera1.pythonanywhere.com/',
    tags: ['Python', 'Web App'],
  },
]

export default function Portfolio() {
  return (
    <section className="portfolio_section layout_padding" id="portafolio">
      <div className="container">
        <div className="heading_container heading_center reveal">
          <h2>Nuestro <span className="gradient-text">Portafolio</span></h2>
          <p>Proyectos reales que generan resultados reales</p>
        </div>
        <div className="row mt-4">
          {projects.map((p, i) => (
            <div key={i} className="col-sm-6 col-lg-3 reveal" style={{ padding: 12 }}>
              <div className="portfolio-card">
                <div className="pf-bg" style={{ background: p.bg }}>
                  <img src={p.logo} alt={p.name} className="pf-logo" />
                </div>
                <div className="pf-footer">
                  <span className="pf-name">{p.name}</span>
                  <div className="pf-tags">
                    {p.tags.map((t, j) => <span key={j} className="pf-tag">{t}</span>)}
                  </div>
                </div>
                <a href={p.url} target="_blank" rel="noreferrer" className="pf-hover">
                  <i className="fa fa-external-link"></i>
                  <span>Ver Proyecto</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
