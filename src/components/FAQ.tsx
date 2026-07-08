import { useState } from 'react'

interface FaqItem {
  q: string
  a: string
}

const faqs: FaqItem[] = [
  { q: '¿Cuánto cuesta hacer una página web?', a: 'Depende del tipo de proyecto. Una landing page parte desde $150.000 CLP, un sitio web profesional desde $350.000 CLP, y proyectos más complejos como apps o e-commerce tienen precio personalizado. Contáctanos para una cotización sin costo.' },
  { q: '¿Cuánto tiempo tarda el desarrollo?', a: 'Una landing page está lista en 5-7 días hábiles. Un sitio web profesional tarda entre 10 y 20 días. Proyectos más complejos dependen del alcance y se definen en la propuesta inicial.' },
  { q: '¿El precio incluye dominio y hosting?', a: 'El dominio y hosting se cotizan por separado ya que tienen renovación anual. Te ayudamos a contratarlos y configurarlos. Un hosting básico parte desde $30.000 CLP/año.' },
  { q: '¿Pueden mantener mi sitio después de entregarlo?', a: 'Sí. Ofrecemos planes de mantención mensual que incluyen actualizaciones, backups, seguridad y cambios menores. El Plan Pro incluye 1 mes de soporte gratis después de la entrega.' },
  { q: '¿Trabajan con clientes fuera de Puerto Montt?', a: '¡Por supuesto! Trabajamos 100% de forma remota con clientes en todo Chile y Latinoamérica. Todo el proceso se coordina por videollamada, WhatsApp y email.' },
  { q: '¿Mi sitio va a aparecer en Google?', a: 'Todos nuestros sitios incluyen SEO básico (meta tags, sitemap, velocidad optimizada). Para posicionamiento avanzado ofrecemos un servicio de SEO continuo por separado.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="faq_section layout_padding" id="faq">
      <div className="container">
        <div className="heading_container heading_center reveal">
          <h2>Preguntas <span className="gradient-text">Frecuentes</span></h2>
          <p>Todo lo que necesitas saber antes de empezar</p>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <div className="faq-accordion reveal">
              {faqs.map((f, i) => (
                <div key={i} className="faq-item">
                  <div className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                    <span>{f.q}</span>
                    <i
                      className="fa fa-plus faq-icon"
                      style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                    ></i>
                  </div>
                  {open === i && (
                    <div className="faq-answer">
                      <p>{f.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
