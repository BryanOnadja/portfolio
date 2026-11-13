import { HBars } from '../components/Charts.jsx'

const img = (name) => `${import.meta.env.BASE_URL}images/${name}`

export default function ParcoursLibre({ t }) {
  const p = t.pl
  const h = t.home
  return (
    <>
      <section className="hero">
        <p className="eyebrow">{p.eyebrow}</p>
        <h1 className="hero__title">{p.title}</h1>
        <p className="hero__sub">{p.sub}</p>
        <img className="hero__img" src={img('pl_carte.jpg')} alt={h.imgMap} />
      </section>

      <div className="container stack">
        <section className="card">
          <h2 className="chart-title">{p.problemTitle}</h2>
          <p className="lead">{p.problem}</p>
        </section>

        <figure className="card">
          <figcaption className="chart-title">{p.dataTitle}</figcaption>
          <p className="chart-sub">{p.dataSub}</p>
          <HBars
            labelWidth={200}
            items={[
              { label: h.plBar1, value: 41, display: `41 ${t.common.perHour}` },
              { label: h.plBar2, value: 12, display: `12 ${t.common.perHour}`, color: '#a1a1a6' },
            ]}
          />
          <div className="stat-row">
            <div><p className="big-stat">0 / 130</p><p>{p.stat1}</p></div>
            <div><p className="big-stat">48 / 145</p><p>{p.stat2}</p></div>
          </div>
          <p className="source">{h.plSource}</p>
        </figure>

        <section className="card">
          <h2 className="chart-title">{p.conceptsTitle}</h2>
          <div className="concepts">
            {p.concepts.map(([tag, name, desc], i) => (
              <div key={tag} className={i === 2 ? 'concept concept--chosen' : 'concept'}>
                <p className="tag">{tag}</p>
                <h3>{name}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="card">
          <h2 className="chart-title">{p.appTitle}</h2>
          <p className="chart-sub">{p.appSub}</p>
          <div className="chips">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
          <div className="gallery">
            <img src={img('pl_dashboard.jpg')} alt={h.imgDash} loading="lazy" />
            <img src={img('pl_311.jpg')} alt={h.img311} loading="lazy" />
          </div>
        </section>

        <section className="card">
          <h2 className="chart-title">{p.sdgTitle}</h2>
          <div className="sdgs">
            {p.sdgs.map(([n, name]) => <div key={n}><strong>{n}</strong><span>{name}</span></div>)}
          </div>
        </section>

        <section className="role">
          <h2>{t.common.role}</h2>
          <p>{p.roleText}</p>
        </section>
      </div>
    </>
  )
}
