interface Step {
  icon: string
  num: string
  title: string
  desc: string
}

const steps: Step[] = [
  {
    icon: 'fa-comments',
    num: '01',
    title: 'Consulta Inicial',
    desc: 'Conversamos sobre tu proyecto, objetivos y necesidades. Entendemos tu visión y definimos el alcance del trabajo.',
  },
  {
    icon: 'fa-file-text',
    num: '02',
    title: 'Propuesta & Cotización',
    desc: 'Te presentamos una propuesta detallada con cronograma, tecnologías a usar y presupuesto transparente.',
  },
  {
    icon: 'fa-code',
    num: '03',
    title: 'Desarrollo',
    desc: 'Nuestro equipo trabaja en tu proyecto con actualizaciones constantes. Podrás ver el progreso en tiempo real.',
  },
  {
    icon: 'fa-rocket',
    num: '04',
    title: 'Entrega & Soporte',
    desc: 'Lanzamos tu proyecto y te brindamos capacitación. Incluye soporte técnico continuo post-lanzamiento.',
  },
]

export default function Process() {
  return (
    <section className="process_section">
      <div className="container">
        <div className="heading_container heading_center reveal">
          <h2>Nuestro Proceso de Trabajo</h2>
          <p>Transformamos tu visión en realidad digital en 4 pasos simples</p>
        </div>
        <div className="row mt-5">
          {steps.map((s, i) => (
            <div key={i} className="col-sm-6 col-lg-3 reveal">
              <div className="process-box">
                <div className="step-number">{s.num}</div>
                <div className="icon-box">
                  <i className={`fa ${s.icon}`}></i>
                </div>
                <h5>{s.title}</h5>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
