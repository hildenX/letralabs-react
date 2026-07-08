interface Tech {
  name: string
  color: string
  text?: string
}

const techs: Tech[] = [
  { name: 'HTML5', color: '#e34f26' }, { name: 'CSS3', color: '#1572b6' },
  { name: 'JavaScript', color: '#f7df1e', text: '#222' }, { name: 'TypeScript', color: '#3178c6' },
  { name: 'React', color: '#61dafb', text: '#222' }, { name: 'Angular', color: '#dd0031' },
  { name: 'Bootstrap', color: '#7952b3' }, { name: 'Python', color: '#3776ab' },
  { name: 'Django', color: '#092e20' }, { name: 'Flask', color: '#444444' },
  { name: 'FastAPI', color: '#009688' }, { name: 'PHP', color: '#777bb4' },
  { name: 'Node.js', color: '#339933' }, { name: 'MySQL', color: '#4479a1' },
  { name: 'PostgreSQL', color: '#336791' }, { name: 'MariaDB', color: '#003b57' },
  { name: 'MongoDB', color: '#47a248' }, { name: 'Docker', color: '#2496ed' },
  { name: 'Kubernetes', color: '#326ce5' }, { name: 'Git', color: '#f05032' },
  { name: 'GitHub', color: '#24292e' }, { name: 'Google Cloud', color: '#4285f4' },
  { name: 'Cloudflare', color: '#f38020' }, { name: 'Linux', color: '#fcc624', text: '#222' },
  { name: 'WordPress', color: '#21759b' }, { name: 'Figma', color: '#f24e1e' },
  { name: 'API REST', color: '#ff6b35' },
]

export default function TechStack() {
  return (
    <section className="techstack_section layout_padding" id="tecnologias">
      <div className="container">
        <div className="heading_container heading_center reveal">
          <h2>Tecnologías que <span className="gradient-text">Dominamos</span></h2>
          <p>Usamos las herramientas correctas para cada proyecto</p>
        </div>
        <div className="techstack-grid reveal">
          {techs.map((t, i) => (
            <div
              key={i}
              className="tech-badge"
              style={{ '--tc': t.color, color: t.text ?? '#fff' }}
            >
              {t.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
