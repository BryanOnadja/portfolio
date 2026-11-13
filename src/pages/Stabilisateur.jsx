import { Bullet } from '../components/Charts.jsx'

const img = (name) => `${import.meta.env.BASE_URL}images/${name}`

export default function Stabilisateur({ t, lang }) {
  const s = t.stab
  const dec = (n) => (lang === 'fr' ? String(n).replace('.', ',') : String(n))
  // Résultats de la présentation finale GNG 2501 (FC25 – EKBAR).
  const specs = [
    { name: s.specs[0], value: 162, max: 200, hi: 170, measured: '162 g', target: '≤ 170 g' },
    { name: s.specs[1], value: 45.33, max: 60, hi: 50, measured: lang === 'fr' ? `≈ ${dec(45.33)} $` : `≈ $${dec(45.33)}`, target: lang === 'fr' ? '≤ 50 $' : '≤ $50' },
    { name: s.specs[2], value: 22.8, max: 30, lo: 18.9, hi: 23.1, measured: `${dec(22.8)} N/m`, target: lang === 'fr' ? '≈ 21 N/m (± 10 %)' : '≈ 21 N/m (± 10%)' },
    { name: s.specs[3], value: 4, max: 5, lo: 4, measured: '4 / 5', target: '≥ 4 / 5' },
  ]
  const protoImgs = ['stab_p1.jpg', 'stab_p2.jpg', 'stab_p3.jpg']

  return (
    <>
      <section className="hero hero--dark">
        <p className="eyebrow eyebrow--light">{s.eyebrow}</p>
        <h1 className="hero__title">{s.title}</h1>
        <p className="hero__sub">{s.sub}</p>
        <img className="hero__img hero__img--flush" src={img('stab_final.jpg')} alt={t.home.stabImg} />
      </section>

      <div className="container stack">
        <figure className="card">
          <figcaption className="chart-title">{s.cTitle}</figcaption>
          <p className="chart-sub">{s.cSub}</p>
          <div className="bullets">
            {specs.map((sp) => <Bullet key={sp.name} spec={sp} t={t} />)}
            <div className="bullet__fail">
              <span className="bullet__name">{s.aesth}</span>
              <span className="fail">✕ {t.common.notMet}</span>
            </div>
          </div>
          <div className="legend legend--inline">
            <span><span className="legend__swatch" style={{ background: 'var(--accent)' }} aria-hidden="true" />{s.lgMeasured}</span>
            <span><span className="legend__tick" aria-hidden="true" />{s.lgTarget}</span>
          </div>
        </figure>

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

        <section className="role">
          <h2>{t.common.role}</h2>
          <p>{s.roleText}</p>
        </section>
      </div>
    </>
  )
}
