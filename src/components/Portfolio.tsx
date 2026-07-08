interface Project {
  bg: string
  logo: string
  name: string
  url: string
  tag: string
  tagClass: string
  desc: string
}

const projects: Project[] = [
  {
    bg: 'linear-gradient(135deg, #4a0080 0%, #7c3aed 100%)',
    logo: '/pudu-logo-new.png',
    name: 'Pudú Tecnología',
    url: 'https://pudutecnologia.cl',
    tag: 'SAAS',
    tagClass: '',
    desc: 'Plataforma SaaS para gestión de tecnología y soporte técnico empresarial.',
  },
  {
    bg: 'linear-gradient(135deg, #001f4d 0%, #003580 100%)',
    logo: '/logooficials.png',
    name: 'Repacmar',
    url: 'https://repacmar.cl',
    tag: 'E-COMMERCE',
    tagClass: '',
    desc: 'Boutique náutica con +25 años distribuyendo repuestos y accesorios para embarcaciones en Puerto Montt.',
  },
  {
    bg: 'linear-gradient(135deg, #7c4a00 0%, #c47a00 100%)',
    logo: '/fidaltec.png',
    name: 'FidalTec',
    url: 'https://fidaltec.cl',
    tag: 'INDUSTRIAL',
    tagClass: '',
    desc: 'Sitio corporativo con catálogo de productos industriales y sistema de cotizaciones online.',
  },
  {
    bg: 'linear-gradient(135deg, #0a1628 0%, #1e3a5f 100%)',
    logo: '/image3.png',
    name: 'Cia. Bomberos Nº6',
    url: 'https://cvera1.pythonanywhere.com/',
    tag: 'SISTEMA',
    tagClass: 'pf-tag-red',
    desc: 'Sistema web de gestión interna para la Compañía de Bomberos N°6 de Puerto Montt.',
  },
]

export default function Portfolio() {
  return (
    <section className="portfolio_section layout_padding" id="portafolio">
      <div className="container">
        <div className="heading_container heading_center reveal">
          <h2>Nuestro <span className="gradient-text">Portafolio</span></h2>
          <p>Proyectos que hablan por sí solos</p>
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
                  <span className={`pf-tag ${p.tagClass}`}>{p.tag}</span>
                </div>
                <a href={p.url} target="_blank" rel="noreferrer" className="pf-hover">
                  <p>{p.desc}</p>
                  <span className="pf-link">Ver sitio <i className="fa fa-external-link"></i></span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
