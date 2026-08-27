export default function PortfolioHeader({ backHref, backLabel }: { backHref: string; backLabel: string }) {
  return (
    <header className="pf-header">
      <div className="pf-wrap pf-nav">
        <a className="pf-brand" href="index.html">
          <span className="dot" /> Dev Team <span className="grad">Tech</span>
        </a>
        <a className="pf-back" href={backHref}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          {backLabel}
        </a>
      </div>
    </header>
  )
}
