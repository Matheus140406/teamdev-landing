import type { ReactNode } from "react"

export default function PortfolioFooter({ rightLink }: { rightLink: ReactNode }) {
  return (
    <div className="pf-wrap">
      <footer className="pf-footer">
        <span>© 2026 Dev Team Tech. Todos os direitos reservados.</span>
        <span>{rightLink}</span>
      </footer>
    </div>
  )
}
