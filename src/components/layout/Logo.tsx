// Dev Team Tech — componentes de logo em SVG (extraídos dos assets de marca)

/** Ícone das "asas" isolado. variant controla a cor de fundo/traço. */
export function LogoIcon({ size = 40, variant = "light" }: { size?: number; variant?: "light" | "dark" }) {
  if (variant === "dark") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 80 80" aria-hidden="true">
        <circle cx="40" cy="40" r="40" fill="#0C0C0C" />
        <path d="M 40,62 C 50,38 72,14 76,10 C 72,20 56,60 40,68 Z" fill="#FFFFFF" />
        <path d="M 40,62 C 30,38 8,14 4,10 C 8,20 24,60 40,68 Z" fill="#FFFFFF" />
        <circle cx="40" cy="65" r="5.5" fill="#0C0C0C" />
      </svg>
    )
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 80 80" aria-hidden="true">
      <defs>
        <mask id={`hub-icon-${variant}`}>
          <rect width="80" height="80" fill="white" />
          <circle cx="40" cy="65" r="5.5" fill="black" />
        </mask>
      </defs>
      <g mask={`url(#hub-icon-${variant})`} fill="#FFFFFF">
        <path d="M 40,62 C 50,38 72,14 76,10 C 72,20 56,60 40,68 Z" />
        <path d="M 40,62 C 30,38 8,14 4,10 C 8,20 24,60 40,68 Z" />
      </g>
    </svg>
  )
}

/** Lockup horizontal: ícone + "DEV TEAM TECH" + "WEB DEVELOPMENT" */
export function LogoHorizontal({ width = 260, variant = "light" }: { width?: number; variant?: "light" | "dark" }) {
  const textColor = variant === "light" ? "#FFFFFF" : "#0C0C0C"
  const wingFill = variant === "light" ? "#FFFFFF" : "#0C0C0C"
  const height = Math.round(width * (58 / 320))

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 320 58" role="img" aria-label="Dev Team Tech">
      <svg x="0" y="3" width="52" height="52" viewBox="0 0 80 80">
        <defs>
          <mask id="wh-h">
            <rect width="80" height="80" fill="white" />
            <circle cx="40" cy="65" r="5.5" fill="black" />
          </mask>
        </defs>
        <g mask="url(#wh-h)" fill={wingFill}>
          <path d="M 40,62 C 50,38 72,14 76,10 C 72,20 56,60 40,68 Z" />
          <path d="M 40,62 C 30,38 8,14 4,10 C 8,20 24,60 40,68 Z" />
        </g>
      </svg>
      <text x="68" y="29" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="19" letterSpacing="4.18" fill={textColor}>
        DEV TEAM TECH
      </text>
      <text x="70" y="45" fontFamily="'Space Grotesk', sans-serif" fontWeight="400" fontSize="8" letterSpacing="1.6" fill={textColor} opacity="0.32">
        WEB DEVELOPMENT
      </text>
    </svg>
  )
}

/** Lockup empilhado: ícone centralizado acima de "DEV TEAM TECH" */
export function LogoStacked({ width = 160, variant = "light" }: { width?: number; variant?: "light" | "dark" }) {
  const textColor = variant === "light" ? "#FFFFFF" : "#0C0C0C"
  const wingFill = variant === "light" ? "#FFFFFF" : "#0C0C0C"
  const height = Math.round(width * (115 / 200))

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 200 115" role="img" aria-label="Dev Team Tech">
      <defs>
        <mask id="hub-s-stk">
          <rect width="200" height="115" fill="white" />
          <circle cx="100" cy="77" r="5.5" fill="black" />
        </mask>
      </defs>
      <g mask="url(#hub-s-stk)" fill={wingFill}>
        <path d="M 100,74 C 110,50 132,26 136,22 C 132,32 116,72 100,80 Z" />
        <path d="M 100,74 C 90,50 68,26 64,22 C 68,32 84,72 100,80 Z" />
      </g>
      <text x="100" y="106" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="11" letterSpacing="2.42" textAnchor="middle" fill={textColor}>
        DEV TEAM TECH
      </text>
    </svg>
  )
}
