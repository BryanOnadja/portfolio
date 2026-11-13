import { useEffect, useState } from 'react'
import { strings } from './i18n.js'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Pattern from './components/Pattern.jsx'
import Home from './pages/Home.jsx'
import ParcoursLibre from './pages/ParcoursLibre.jsx'
import SecuriteRoutiere from './pages/SecuriteRoutiere.jsx'
import Stabilisateur from './pages/Stabilisateur.jsx'
import Iot from './pages/Iot.jsx'

// Navigation simple par « hash » (#/securite-routiere) : fonctionne sur GitHub Pages sans configuration.
const ROUTES = {
  '/': Home,
  '/parcours-libre': ParcoursLibre,
  '/securite-routiere': SecuriteRoutiere,
  '/stabilisateur': Stabilisateur,
  '/iot': Iot,
}

function currentRoute() {
  const path = window.location.hash.replace(/^#/, '') || '/'
  return ROUTES[path] ? path : '/'
}

function initialLang() {
  try {
    const saved = window.localStorage.getItem('lang')
    if (saved === 'fr' || saved === 'en') return saved
  } catch {
    /* stockage indisponible : on garde la langue par défaut */
  }
  return 'fr'
}

export default function App() {
  const [route, setRoute] = useState(currentRoute)
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    const onHash = () => {
      setRoute(currentRoute())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      window.localStorage.setItem('lang', lang)
    } catch {
      /* ignoré */
    }
  }, [lang])

  const t = strings[lang]
  const Page = ROUTES[route]

  return (
    <div className="site">
      <Pattern />
      <div className="site__content">
        <Nav t={t} lang={lang} setLang={setLang} isHome={route === '/'} />
        <main>
          <Page t={t} lang={lang} />
        </main>
        <Footer t={t} />
      </div>
    </div>
  )
}
