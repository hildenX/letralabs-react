import { useState } from 'react'
import useReveal from '../hooks/useReveal'

interface Service {
  gif: string
  tag: string
  title: string
  desc: string
  color: string
  filter: string
}

const services: Service[] = [
  { gif: '/logos/web.gif', tag: 'Desarrollo Web', title: 'Sitios y Aplicaciones Web', desc: 'Desde sitios corporativos hasta plataformas complejas. Código limpio, rápido y escalable.', color: '#4f46e5', filter: 'web' },
  { gif: '/logos/appmobil.gif', tag: 'Apps Móviles', title: 'Apps iOS y Android', desc: 'Apps nativas y multiplataforma, optimizadas para rendimiento y experiencia de usuario excepcional.', color: '#0ea5e9', filter: 'mobile' },
  { gif: '/logos/ladingpage.gif', tag: 'Landing Pages', title: 'Landing Pages de Alto Impacto', desc: 'Diseñadas para convertir visitantes en clientes. Veloces, modernas y orientadas a resultados.', color: '#f59e0b', filter: 'landing' },
  { gif: '/logos/seo.gif', tag: 'SEO', title: 'SEO & Posicionamiento', desc: 'Mejoramos tu ranking en Google con estrategias técnicas y de contenido que atraen tráfico real.', color: '#10b981', filter: 'seo' },
  { gif: '/logos/email.gif', tag: 'Corporativo', title: 'Correos Corporativos', desc: 'Configura correos con tu dominio @tuempresa.cl. Seguridad profesional y confiabilidad garantizada.', color: '#8b5cf6', filter: 'web' },
  { gif: '/logos/ecommerce.gif', tag: 'E-Commerce', title: 'Tiendas Online', desc: 'E-commerce completo con pasarela de pagos segura, gestión de inventario y experiencia de compra optimizada.', color: '#ef4444', filter: 'web' },
  { gif: '/logos/empresariales apps.gif', tag: 'Empresarial', title: 'Apps Empresariales', desc: 'Soluciones móviles a medida: CRM, gestión de equipos, reportes en tiempo real y más funcionalidades personalizadas.', color: '#f97316', filter: 'mobile' },
  { gif: '/logos/marketing.gif', tag: 'Marketing', title: 'Marketing Digital', desc: 'Estrategias de marketing digital: redes sociales, email marketing, publicidad online y análisis de resultados.', color: '#06b6d4', filter: 'seo' },
  { gif: '/logos/consultoria.gif', tag: 'Consultoría', title: 'Consultoría Digital', desc: 'Asesoramos en estrategias digitales, arquitectura web y transformación digital para hacer crecer tu negocio.', color: '#84cc16', filter: 'web' },
]

const filters = [
  { label: 'Todos', value: 'all' },
  { label: 'Desarrollo Web', value: 'web' },
  { label: 'Apps Móviles', value: 'mobile' },
  { label: 'Landing Pages', value: 'landing' },
  { label: 'SEO', value: 'seo' },
]

export default function Services() {
  const [active, setActive] = useState('all')
  useReveal()

  const visible = active === 'all' ? services : services.filter(s => s.filter === active)

  return (
    <section className="svc_section layout_padding" id="servicios">
      <div className="container">
        <div className="heading_container heading_center reveal">
          <h2>Nuestros <span className="gradient-text">Servicios</span></h2>
          <p>Soluciones digitales completas para hacer crecer tu negocio</p>
        </div>
        <ul className="svc_filters_menu">
          {filters.map(f => (
            <li key={f.value} className={active === f.value ? 'active' : ''} onClick={() => setActive(f.value)}>
              {f.label}
            </li>
          ))}
        </ul>
        <div className="row" style={{ marginTop: 10 }}>
          {visible.map((s, i) => (
            <div key={i} className="col-sm-6 col-lg-4" style={{ padding: 12, display: 'flex' }}>
              <div className="svc-card reveal" style={{ '--svc-color': s.color }}>
                <div className="svc-img-wrap">
                  <img src={s.gif} alt={s.title} />
                </div>
                <span className="svc-tag">{s.tag}</span>
                <h5>{s.title}</h5>
                <p>{s.desc}</p>
                <a href="#contacto" className="svc-link">Cotizar <i className="fa fa-arrow-right"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
