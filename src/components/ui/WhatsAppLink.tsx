import type { AnchorHTMLAttributes, ReactNode } from "react"
import { waLink } from "@/lib/whatsapp"

interface WhatsAppLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target" | "rel"> {
  message?: string
  children: ReactNode
}

/** Link que abre o WhatsApp com o número da Dev Team Tech e uma mensagem (padrão ou custom). */
export default function WhatsAppLink({ message, children, ...rest }: WhatsAppLinkProps) {
  return (
    <a href={waLink(message)} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  )
}
