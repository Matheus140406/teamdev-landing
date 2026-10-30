export function LogoIcon({ size = 40 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 80 80"
    >
      <path
        d="M40 61C49 39 68 17 75 10C70 27 57 59 40 68Z"
        fill="currentColor"
      />
      <path
        d="M40 61C31 39 12 17 5 10C10 27 23 59 40 68Z"
        fill="currentColor"
      />
      <circle cx="40" cy="65" r="5" fill="var(--logo-hole, var(--bg))" />
    </svg>
  )
}

export function LogoHorizontal() {
  return (
    <span className="brand">
      <LogoIcon size={34} />
      <span className="brand-copy">
        <strong>DEV TEAM TECH</strong>
        <small>WEB DEVELOPMENT</small>
      </span>
    </span>
  )
}

export default LogoHorizontal
