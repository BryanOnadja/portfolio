import { HBars } from '../components/Charts.jsx'
import { scrollToSection } from '../components/Nav.jsx'

const img = (name) => `${import.meta.env.BASE_URL}images/${name}`

export default function Home({ t }) {
  const h = t.home
  return (
    <>
      {/* ACCUEIL */}
      <section className="hero" id="accueil">
        <p className="eyebrow">{h.eyebrow}</p>
        <h1 className="hero__title">{h.title}</h1>
        <p className="hero__sub">{h.sub}</p>
        <div className="actions">
          <button type="button" className="btn btn--primary" onClick={() => scrollToSection('projets')}>{h.ctaProjects}</button>
          <a className="btn btn--ghost" href={`${import.meta.env.BASE_URL}${t.common.cvFile}`} download>{t.common.cv}</a>
        </div>
      </section>

      {/* PROJET PHARE */}
      <section className="featured" id="projets">
        <p className="tag">{h.featuredTag}</p>
        <h2 className="featured__title">Parcours Libre</h2>
        <p className="featured__sub">{h.plSub}</p>
        <div className="links"><a href="#/parcours-libre">{t.common.learnMore} ›</a></div>

        <figure className="card chart-card">
          <div className="chart-card__main">
            <figcaption className="chart-title">{h.plChartTitle}</figcaption>
            <HBars
              labelWidth={200}
              items={[
                { label: h.plBar1, value: 41, display: `41 ${t.common.perHour}` },
                { label: h.plBar2, value: 12, display: `12 ${t.common.perHour}`, color: '#a1a1a6' },
              ]}
            />
          </div>
          <div className="chart-card__stat">
            <p className="big-stat">0 / 130</p>
            <p>{h.plStat}</p>
          </div>
          <p className="source">{h.plSource}</p>
        </figure>

        <div className="shots">
          <img className="shots__main" src={img('pl_carte.jpg')} alt={h.imgMap} loading="lazy" />
          <img src={img('pl_dashboard.jpg')} alt={h.imgDash} loading="lazy" />
          <img src={img('pl_311.jpg')} alt={h.img311} loading="lazy" />
        </div>
      </section>

      {/* AUTRES PROJETS */}
      <section className="tiles" aria-label={h.roadTitle}>
        <article className="tile tile--dark">
          <p className="tag">{h.stabTag}</p>
          <h3>{h.stabTitle}</h3>
          <p className="tile__sub">{h.stabSub}</p>
          <div className="links"><a href="#/stabilisateur">{t.common.learnMore} ›</a></div>
          <img className="tile__img" src={img('stab_final.jpg')} alt={h.stabImg} loading="lazy" />
        </article>

        <article className="tile">
          <p className="tag">{h.iotTag}</p>
          <h3>{h.iotTitle}</h3>
          <p className="tile__sub">{h.iotSub}</p>
          <div className="links"><a href="#/iot">{t.common.learnMore} ›</a></div>
          <img className="tile__img" src={img('iot_proto.jpg')} alt={h.iotImg} loading="lazy" style={{ objectPosition: 'center 80%' }} />
        </article>

        <article className="tile">
          <p className="tag">{h.roadTag}</p>
          <h3>{h.roadTitle}</h3>
          <p className="tile__sub">{h.roadSub}</p>
          <div className="links"><a href="#/securite-routiere">{t.common.learnMore} ›</a></div>
          <div className="tile__mini" aria-hidden="true">
            {[38.2, 43.4, 37.0, 37.5, 32.6, 38.4, 33.2, 31.3, 19.9, 19.1, 22.0].map((v, i) => (
              <span key={i} style={{ height: `${(v / 43.4) * 100}%` }} />
            ))}
          </div>
        </article>

        <article className="tile tile--dark tile--center">
          <p className="tag">{h.certTag}</p>
          <h3>{h.certTitle}</h3>
          <div className="certs">
            <div><strong>Data Analytics</strong><span>Google · {h.certDa}</span></div>
            <div><strong>Google AI</strong><span>Google · {h.certAi}</span></div>
          </div>
          <div className="links"><a href="https://www.credly.com/users/bryan-lucien-bahamma-onadja/badges" target="_blank" rel="noreferrer">{h.seeBadges} ›</a></div>
        </article>
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="figures container">
        {h.figures.map(([n, label]) => (
          <div key={label}><p className="figures__n">{n}</p><p className="figures__label">{label}</p></div>
        ))}
      </section>

      {/* À PROPOS */}
      <section className="about" id="apropos">
        <div className="container about__inner">
          <img className="portrait" src={img('photo-bryan.jpg')} alt={h.photoAlt} width="220" height="220" />
          <div className="about__text">
            <p className="eyebrow">{t.nav.about}</p>
            <h2>{h.aboutTitle}</h2>
            <p>{h.aboutP1}</p>
            <p>{h.aboutP2}</p>
          </div>
        </div>
      </section>

      {/* COMPÉTENCES */}
      <section className="container section" id="competences">
        <h2 className="section__title">{h.skillsTitle}</h2>
        <div className="skills">
          {h.skills.map(([title, items]) => (
            <div className="card" key={title}><h3>{title}</h3><p>{items}</p></div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <h2>{h.contactTitle}</h2>
        <p>{h.contactSub}</p>
        <div className="actions">
          <a className="btn btn--light" href="mailto:bryanonadja@gmail.com">bryanonadja@gmail.com</a>
          <a className="btn btn--outline-light" href="https://www.linkedin.com/in/bryan-onadja/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn btn--outline-light" href={`${import.meta.env.BASE_URL}${t.common.cvFile}`} download>{t.common.cv}</a>
        </div>
      </section>
    </>
  )
}
