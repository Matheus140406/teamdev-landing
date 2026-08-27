import type { ElementType } from "react"

/**
 * Renderiza uma string i18n que contém HTML embutido (ex.: <b>, <span class="grad">),
 * igual ao innerHTML usado pelo sistema de tradução original.
 */
export default function HtmlText({
  as: As = "span",
  html,
  className,
}: {
  as?: ElementType
  html: string
  className?: string
}) {
  return <As className={className} dangerouslySetInnerHTML={{ __html: html }} />
}
