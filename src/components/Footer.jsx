export default function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span>© {new Date().getFullYear()} Bryan Onadja</span>
        <span>Gatineau (QC) · {t.common.footer}</span>
      </div>
    </footer>
  )
}
