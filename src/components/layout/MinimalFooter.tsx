export default function MinimalFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p className="foot-rights">© <span id="yr">{new Date().getFullYear()}</span> Dev Team Tech. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
