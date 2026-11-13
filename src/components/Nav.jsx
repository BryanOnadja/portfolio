export function scrollToSection(id) {
  const go = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  if (window.location.hash && window.location.hash !== '#/') {
    window.location.hash = '#/'
    setTimeout(go, 60)
  } else {
    go()
  }
}

export default function Nav({ t, lang, setLang, isHome }) {
  const links = [
    ['projets', t.nav.projects],
    ['apropos', t.nav.about],
    ['competences', t.nav.skills],
    ['contact', t.nav.contact],
  ]
  return (
    <header className="nav">
      <nav className="nav__inner" aria-label={lang === 'fr' ? 'Navigation principale' : 'Main navigation'}>
        <a className="nav__brand" href="#/">Bryan Onadja</a>
        <div className="nav__links">
          {isHome ? (
            links.map(([id, label]) => (
              <button key={id} type="button" className="nav__link" onClick={() => scrollToSection(id)}>
                {label}
              </button>
            ))
          ) : (
            <a className="nav__link" href="#/">‹ {t.nav.home}</a>
          )}
          <div className="lang" role="group" aria-label="Langue / Language">
            <button type="button" aria-pressed={lang === 'fr'} onClick={() => setLang('fr')}>FR</button>
            <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
          </div>
        </div>
      </nav>
    </header>
  )
}
