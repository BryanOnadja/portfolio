// Petits graphiques sans bibliothèque externe : barres, colonnes, ligne, barre empilée et « cible vs mesuré ».
// Chaque marque a une infobulle (title) au survol.

export function HBars({ items, max, unit = '', color = 'var(--accent)', labelWidth = 220 }) {
  const top = max ?? Math.max(...items.map((i) => i.value))
  return (
    <div className="hbars">
      {items.map((it) => (
        <div className="hbars__row" key={it.label} title={`${it.label} : ${it.display ?? it.value}${unit}`}
          style={{ gridTemplateColumns: `minmax(110px, ${labelWidth}px) 1fr auto` }}>
          <span className="hbars__label">{it.label}</span>
          <div className="hbars__track">
            <div className="hbars__bar" style={{ width: `${(it.value / top) * 100}%`, background: it.color ?? color }} />
          </div>
          <span className="hbars__value">{it.display ?? it.value}{unit}</span>
        </div>
      ))}
    </div>
  )
}

export function Columns({ items, max, highlight, unit = '' }) {
  const top = max ?? Math.max(...items.map((i) => i.value))
  return (
    <div className="cols">
      {items.map((it, i) => (
        <div className="cols__col" key={it.label} title={`${it.label} : ${it.value}${unit}`}>
          <span className="cols__value">{it.value}{unit}</span>
          <div className="cols__bar" style={{ height: `${(it.value / top) * 150}px`, background: i === highlight ? 'var(--accent)' : 'var(--accent-2)' }} />
          <span className="cols__label">{it.label}</span>
        </div>
      ))}
    </div>
  )
}

export function LineChart({ points, yMin, yMax, gridLines, band, bandLabel, format, tipSuffix = '' }) {
  const W = 900, H = 290, padL = 40, padR = 20
  const x = (i) => padL + (i * (W - padL - padR)) / (points.length - 1)
  const y = (v) => H - ((v - yMin) / (yMax - yMin)) * H
  const pct = (v, total) => `${(v / total) * 100}%`
  const line = points.map((p, i) => `${x(i).toFixed(1)},${y(p.value).toFixed(1)}`).join(' ')
  return (
    <div className="line">
      <svg viewBox="0 0 900 320" preserveAspectRatio="none" aria-hidden="true">
        {gridLines.map((g) => (
          <line key={g} x1="0" x2="900" y1={y(g)} y2={y(g)} stroke="var(--grid)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        ))}
        {band && <rect x={x(band[0]) - 20} y="0" width={x(band[1]) - x(band[0]) + 40} height={H} fill="#1d1d1f" opacity="0.05" />}
        <polyline points={line} fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </svg>
      {gridLines.map((g) => (
        <span key={g} className="line__axis" style={{ top: pct(y(g), 320) }}>{g} k</span>
      ))}
      {band && <span className="line__band" style={{ left: pct(x(band[0]) - 12, 900) }}>{bandLabel}</span>}
      {points.map((p, i) => (
        <div key={p.label}>
          <div className="line__dot" title={`${p.label} : ${format(p.value, p)}${tipSuffix}`}
            style={{ left: pct(x(i), 900), top: pct(y(p.value), 320) }} />
          {p.showLabel && <span className="line__label" style={{ left: pct(x(i), 900), top: pct(y(p.value), 320) }}>{format(p.value, p)}</span>}
          <span className="line__year" style={{ left: pct(x(i), 900) }}>{p.label}</span>
        </div>
      ))}
    </div>
  )
}

export function Stacked({ segments }) {
  return (
    <>
      <div className="stacked">
        {segments.map((s) => (
          <div key={s.label} title={`${s.label} : ${s.display}`} style={{ width: `${s.value}%`, background: s.color }} />
        ))}
      </div>
      <ul className="legend">
        {segments.map((s) => (
          <li key={s.label}>
            <span className="legend__swatch" style={{ background: s.color }} aria-hidden="true" />
            <span className="legend__name">{s.label}</span>
            <strong>{s.display}</strong>
          </li>
        ))}
      </ul>
    </>
  )
}

export function Bullet({ spec, t }) {
  const p = (v) => `${(v / spec.max) * 100}%`
  const lo = spec.lo ?? 0
  const hi = spec.hi ?? spec.max
  const mark = spec.hi ?? spec.lo
  return (
    <div className="bullet" title={`${spec.name} : ${spec.measured} (${t.common.target} ${spec.target})`}>
      <div className="bullet__head">
        <span className="bullet__name">{spec.name}</span>
        <span>{spec.measured} · <span className="muted">{t.common.target} {spec.target}</span></span>
      </div>
      <div className="bullet__track">
        <div className="bullet__band" style={{ left: p(lo), width: `calc(${p(hi)} - ${p(lo)})` }} />
        <div className="bullet__bar" style={{ width: p(spec.value) }} />
        <div className="bullet__mark" style={{ left: p(mark) }} />
      </div>
      <p className="bullet__status">✓ {t.common.met}</p>
    </div>
  )
}
