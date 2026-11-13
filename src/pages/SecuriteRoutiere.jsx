import { HBars, Columns, LineChart, Stacked } from '../components/Charts.jsx'

// Valeurs lues dans le rapport SED 1516 (Livrable 4) et ses graphiques Power BI.
const YEARS = [38.2, 43.4, 37.0, 37.5, 32.6, 38.4, 33.2, 31.3, 19.9, 19.1, 22.0]
const DAYS = [50, 56, 55, 52, 53, 46, 40]
const HOODS = [
  ['Greenbelt', 18.2], ['Centretown', 17.9], ['Overbrook – McArthur', 13.8], ['Byward Market', 9.8],
  ['Glebe – Dows Lake', 8.9], ['East Industrial', 8.3], ['Sandy Hill', 7.5], ['Stittsville', 7.2],
  ['Riverside South – Leitrim', 6.7], ['Ledbury – Heron Gate', 6.3],
]

export default function SecuriteRoutiere({ t, lang }) {
  const r = t.road
  const num = (v) => v.toFixed(1).replace('.', lang === 'fr' ? ',' : '.')
  const big = (n) => n.toLocaleString(lang === 'fr' ? 'fr-CA' : 'en-CA')

  return (
    <>
      <section className="hero">
        <p className="eyebrow">{r.eyebrow}</p>
        <h1 className="hero__title">{r.title}</h1>
        <p className="hero__sub">{r.sub}</p>
        <div className="chips chips--center">{r.tools.map((s) => <span key={s}>{s}</span>)}</div>
      </section>

      <div className="container stack">
        <figure className="card">
          <figcaption className="chart-title">{r.c1Title}</figcaption>
          <p className="chart-sub">{r.c1Sub}</p>
          <HBars
            labelWidth={220}
            items={[
              { label: r.c1Raw, value: 455717, display: big(455717), color: '#a1a1a6' },
              { label: r.c1Clean, value: 353067, display: `${big(353067)} · 77,5 %`.replace('77,5 %', lang === 'fr' ? '77,5 %' : '77.5%') },
            ]}
          />
        </figure>

        <figure className="card">
          <figcaption className="chart-title">{r.c2Title}</figcaption>
          <p className="chart-sub">{r.c2Sub}</p>
          <LineChart
            points={YEARS.map((v, i) => ({ label: String(2014 + i), value: v, showLabel: [0, 1, 9, 10].includes(i), approx: i === 8 }))}
            yMin={10} yMax={46} gridLines={[20, 30, 40]}
            band={[6, 9]} bandLabel={r.covid}
            format={(v, p) => `${p.approx ? '≈' : ''}${num(v)} k`}
            tipSuffix={` ${t.common.stops}`}
          />
          <p className="source source--spaced">{r.c2Note}</p>
        </figure>

        <div className="two-col">
          <figure className="card">
            <figcaption className="chart-title">{r.c3Title}</figcaption>
            <p className="chart-sub">{r.c3Sub}</p>
            <Columns items={DAYS.map((v, i) => ({ label: r.days[i], value: v }))} max={60} highlight={1} unit=" k" />
          </figure>

          <figure className="card">
            <figcaption className="chart-title">{r.c4Title}</figcaption>
            <p className="chart-sub">{r.c4Sub}</p>
            <Stacked
              segments={[
                { label: r.outcomes[0], value: 47.4, display: lang === 'fr' ? '47,4 %' : '47.4%', color: 'var(--accent)' },
                { label: r.outcomes[1], value: 34.3, display: lang === 'fr' ? '34,3 %' : '34.3%', color: 'var(--accent-2)' },
                { label: r.outcomes[2], value: 18.3, display: lang === 'fr' ? '18,3 %' : '18.3%', color: 'var(--accent-3)' },
              ]}
            />
          </figure>
        </div>

        <figure className="card">
          <figcaption className="chart-title">{r.c5Title}</figcaption>
          <p className="chart-sub">{r.c5Sub}</p>
          <HBars labelWidth={220} unit=" k" items={HOODS.map(([label, v]) => ({ label, value: v, display: num(v) }))} />
        </figure>

        <section className="role">
          <h2>{t.common.role}</h2>
          <p>{r.roleText}</p>
        </section>
      </div>
    </>
  )
}
