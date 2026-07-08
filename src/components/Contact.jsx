import { useState, useRef } from 'react'

export default function Contact() {
  const [charCount, setCharCount] = useState(0)
  const [sending, setSending] = useState(false)
  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const widget = document.querySelector('.cf-turnstile iframe')
    if (widget) {
      const token = document.querySelector('[name="cf-turnstile-response"]')
      if (!token || !token.value) {
        document.querySelector('.cf-turnstile-wrapper').classList.add('turnstile-error')
        setTimeout(() => document.querySelector('.cf-turnstile-wrapper').classList.remove('turnstile-error'), 3000)
        return
      }
    }
    setSending(true)
    fetch('https://formspree.io/f/mwpkgjvz', {
      method: 'POST',
      body: new FormData(formRef.current),
      headers: { Accept: 'application/json' },
    }).then(r => {
      setSending(false)
      if (r.ok) {
        alert('¡Mensaje enviado! Te contactaremos pronto.')
        formRef.current.reset()
        setCharCount(0)
      } else {
        alert('Error al enviar. Intenta de nuevo.')
      }
    }).catch(() => { setSending(false); alert('Error de red.') })
  }

  return (
    <section className="contact_new_section" id="contacto">
      <div className="contact-inner">
        <div className="contact-info-col">
          <div className="contact-info-content">
            <h2>Hablemos de<br />tu Proyecto</h2>
            <div className="contact-divider"></div>
            <p>¿Tienes una idea? Cuéntanosla. Respondemos en menos de 24 horas con una propuesta personalizada sin costo.</p>
            <div className="contact-details">
              <div className="contact-item"><span className="ci-icon"><i className="fa fa-envelope"></i></span><div><span className="ci-label">EMAIL</span><span className="ci-value">contacto@letraslabs.cl</span></div></div>
              <div className="contact-item"><span className="ci-icon ci-icon--wa"><i className="fa fa-whatsapp"></i></span><div><span className="ci-label">WHATSAPP</span><span className="ci-value">+56 9 8492 1045</span></div></div>
              <div className="contact-item"><span className="ci-icon"><i className="fa fa-map-marker"></i></span><div><span className="ci-label">UBICACIÓN</span><span className="ci-value">Puerto Montt, Chile — Servicio Global</span></div></div>
            </div>
            <div className="contact-services-tags">
              {['Desarrollo Web','Apps Móviles','SEO','E-Commerce','Landing Pages'].map(t => <span key={t} className="cs-tag">{t}</span>)}
            </div>
          </div>
        </div>

        <div className="contact-form-col">
          <div className="contact-form-inner">
            <form id="contactForm" ref={formRef} onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="Nuevo contacto LetraLabs" />
              <div className="row">
                <div className="col-md-6">
                  <div className="cf-group">
                    <label>Tu Nombre <span>*</span></label>
                    <input type="text" name="name" placeholder="Juan Pérez" required minLength="2" maxLength="100" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cf-group">
                    <label>Tu Email <span>*</span></label>
                    <input type="email" name="email" placeholder="tu@email.com" required maxLength="254" />
                  </div>
                </div>
              </div>
              <div className="cf-group">
                <label>Teléfono <small>(opcional)</small></label>
                <input type="tel" name="phone" placeholder="+56 9 1234 5678" />
              </div>
              <div className="cf-group">
                <label>¿Qué necesitas? <span>*</span></label>
                <select name="servicio">
                  <option value="" disabled defaultValue="">Selecciona un servicio</option>
                  <option>Desarrollo Web</option>
                  <option>App Móvil</option>
                  <option>Landing Page</option>
                  <option>E-Commerce</option>
                  <option>SEO & Marketing</option>
                  <option>Correos Corporativos</option>
                  <option>Consultoría Digital</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="cf-group">
                <label>Tu Mensaje <span>*</span></label>
                <textarea name="message" rows="4" placeholder="Cuéntanos sobre tu proyecto..." required minLength="10" maxLength="2000" onChange={e => setCharCount(e.target.value.length)}></textarea>
                <div className="cf-char-counter"><span>{charCount}</span> / 2000</div>
              </div>
              <div className="cf-turnstile-wrapper">
                <div className="cf-turnstile" data-sitekey="0x4AAAAAADrUqpXR0UZxH-pF" data-theme="light" data-language="es"></div>
              </div>
              <button type="submit" className="cf-submit" disabled={sending}>
                {sending
                  ? <><i className="fa fa-spinner fa-spin"></i> Enviando...</>
                  : <><i className="fa fa-paper-plane"></i> Enviar Mensaje</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
