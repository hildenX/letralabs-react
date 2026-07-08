interface Plan {
  icon: string
  name: string
  desc: string
  price: string
  currency: string
  features: [boolean, string][]
  btn: string
  btnText: string
  featured: boolean
  badge?: string
}

const plans: Plan[] = [
  {
    icon: 'fa-rocket', name: 'Landing Page', desc: 'Ideal para campañas y emprendimientos',
    price: '$150.000', currency: 'CLP',
    features: [
      [true, 'Diseño personalizado'], [true, 'Responsive mobile'], [true, 'Formulario de contacto'],
      [true, 'SEO básico'], [true, 'Entrega en 5-7 días'], [false, 'Panel de administración'], [false, 'Blog / Noticias'],
    ],
    btn: '#contacto', btnText: 'Solicitar Cotización', featured: false,
  },
  {
    icon: 'fa-globe', name: 'Sitio Web Pro', desc: 'Para empresas y negocios en crecimiento',
    price: '$350.000', currency: 'CLP',
    features: [
      [true, 'Todo lo de Landing'], [true, 'Panel de administración'], [true, 'Blog / Noticias'],
      [true, 'SEO avanzado'], [true, 'Correo corporativo'], [true, 'Entrega en 10-15 días'], [true, '1 mes de soporte gratis'],
    ],
    btn: '#contacto', btnText: 'Solicitar Cotización', featured: true, badge: '⭐ Más Popular',
  },
  {
    icon: 'fa-code', name: 'A Medida', desc: 'Apps, e-commerce y sistemas complejos',
    price: 'Personalizado', currency: '',
    features: [
      [true, 'Todo lo del Plan Pro'], [true, 'App móvil iOS / Android'], [true, 'E-Commerce completo'],
      [true, 'Integraciones API'], [true, 'Sistema a medida'], [true, 'Soporte prioritario'], [true, 'Reunión de briefing gratis'],
    ],
    btn: 'https://wa.me/56984921045', btnText: 'Hablar por WhatsApp', featured: false,
  },
]

export default function Pricing() {
  return (
    <section className="pricing_section layout_padding" id="precios">
      <div className="container">
        <div className="heading_container heading_center reveal">
          <h2>Planes y <span className="gradient-text">Precios</span></h2>
          <p>Soluciones para cada etapa de tu negocio. Sin costos ocultos.</p>
        </div>
        <div className="row pricing-row mt-5 justify-content-center">
          {plans.map((p, i) => (
            <div key={i} className="col-md-6 col-lg-4 reveal">
              <div className={`pricing-card ${p.featured ? 'pricing-card--featured' : ''}`}>
                {p.badge && <div className="pricing-badge-top">{p.badge}</div>}
                <div className="pricing-header">
                  <span className="pricing-icon"><i className={`fa ${p.icon}`}></i></span>
                  <h4>{p.name}</h4>
                  <p>{p.desc}</p>
                </div>
                <div className="pricing-price">
                  <span className="price-desde">desde</span>
                  <span className="price-amount" style={p.price === 'Personalizado' ? { fontSize: '2rem' } : {}}>{p.price}</span>
                  {p.currency && <span className="price-currency">{p.currency}</span>}
                </div>
                <ul className="pricing-features">
                  {p.features.map(([ok, text], j) => (
                    <li key={j} className={ok ? '' : 'disabled'}>
                      <i className={`fa ${ok ? 'fa-check' : 'fa-times'}`}></i> {text}
                    </li>
                  ))}
                </ul>
                <a href={p.btn} className={`pricing-btn ${p.featured ? 'pricing-btn--featured' : ''}`}>{p.btnText}</a>
              </div>
            </div>
          ))}
        </div>
        <p className="pricing-note reveal">* Precios en pesos chilenos (CLP). Incluye IVA. Hosting y dominio se cotizan por separado.</p>
      </div>
    </section>
  )
}
