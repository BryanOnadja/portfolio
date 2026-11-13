import { Bullet } from '../components/Charts.jsx'

const img = (name) => `${import.meta.env.BASE_URL}images/${name}`

export default function Iot({ t, lang }) {
  const s = t.iot
  const dec = (n) => (lang === 'fr' ? String(n).replace('.', ',') : String(n))
  const pct = (n) => (lang === 'fr' ? `${n} %` : `${n}%`)
  // Résultats de la présentation finale GNG 1503 (équipe FA51), tableau des tests sur les prototypes.
  const specs = [
    { name: s.specs[0], value: 96, max: 100, lo: 95, measured: pct(96), target: `≥ ${pct(95)}` },
    { name: s.specs[1], value: 4, max: 6, hi: 5, measured: '4 s', target: '≤ 5 s' },
    { name: s.specs[2], value: 6, max: 12, hi: 10, measured: '6 s', target: '≤ 10 s' },
    { name: s.specs[3], value: 485, max: 600, hi: 500, measured: '485 g', target: '≤ 500 g' },
    { name: s.specs[4], value: 1.5, max: 2.5, hi: 2, measured: `${dec(1.5)} A`, target: '≤ 2 A' },
  ]
  const protoImgs = ['iot_p1.jpg', 'iot_p2.jpg', 'iot_p3.jpg']

  return (
    <>
      <section className="hero hero--dark">
        <p className="eyebrow eyebrow--light">{s.eyebrow}</p>
        <h1 className="hero__title">{s.title}</h1>
        <p className="hero__sub">{s.sub}</p>
        <img className="hero__img hero__img--flush" src={img('iot_proto.jpg')} alt={s.heroImg} />
      </section>

      <div className="container stack">
        <section className="card">
          <h2 className="chart-title">{s.howTitle}</h2>
          <p className="chart-sub">{s.howSub}</p>
          <ol className="steps">
            {s.steps.map(([title, desc], i) => (
              <li key={title}><span className="steps__n">{i + 1}</span><strong>{title}</strong><span>{desc}</span></li>
            ))}
          </ol>
          <img className="card__img card__img--contain" src={img('iot_schema.jpg')} alt={s.schemaImg} loading="lazy" />
        </section>

        <figure className="card">
          <figcaption className="chart-title">{s.cTitle}</figcaption>
          <p className="chart-sub">{s.cSub}</p>
          <div className="bullets">
            {specs.map((sp) => <Bullet key={sp.name} spec={sp} t={t} />)}
          </div>
          <div className="legend legend--inline">
            <span><span className="legend__swatch" style={{ background: 'var(--accent)' }} aria-hidden="true" />{s.lgMeasured}</span>
            <span><span className="legend__tick" aria-hidden="true" />{s.lgTarget}</span>
          </div>
        </figure>

        <section className="card">
          <h2 className="chart-title">{s.dashTitle}</h2>
          <p className="chart-sub">{s.dashSub}</p>
          <img className="card__img" src={img('iot_dash.jpg')} alt={s.dashImg} loading="lazy" />
        </section>

        <section className="card">
          <h2 className="chart-title">{s.protoTitle}</h2>
          <p className="chart-sub">{s.protoSub}</p>
          <div className="protos">
            {s.protos.map(([name, desc, alt], i) => (
              <figure key={name}>
                <img src={img(protoImgs[i])} alt={alt} loading="lazy" />
                <figcaption><strong>{name}</strong><span>{desc}</span></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="card split">
          <div>
            <h2 className="chart-title">{s.boxTitle}</h2>
            <p className="chart-sub">{s.boxText}</p>
            <h2 className="chart-title split__gap">{s.futureTitle}</h2>
            <p className="chart-sub">{s.futureText}</p>
          </div>
          <img className="card__img" src={img('iot_box.jpg')} alt={s.boxImg} loading="lazy" />
        </section>

        <section className="role">
          <h2>{t.common.role}</h2>
          <p>{s.roleText}</p>
        </section>
      </div>
    </>
  )
}
