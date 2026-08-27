// Ilustração decorativa "PC em pixel art" — herdada do novo design visual roxo.
export default function PixelPC({ size = 1, className = "" }: { size?: number; className?: string }) {
  const P = 6 * size
  const c = "rgba(168,85,255,1)"
  const d = "rgba(139,61,255,0.55)"
  const s = "rgba(191,128,255,0.9)"
  const k = "rgba(109,34,232,0.7)"
  const W = 30 * P
  const H = 26 * P
  let _kid = 0
  const px = (col: number, row: number, w = 1, h = 1, color = c) => (
    <rect key={_kid++} x={col * P} y={row * P} width={w * P} height={h * P} fill={color} />
  )

  return (
    <svg
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      className={`pixel-pc ${className}`}
      style={{ display: "block" }}
      aria-hidden="true"
    >
      {px(2, 0, 26, 1, c)}
      {px(1, 1, 1, 1, d)}
      {px(27, 1, 1, 1, d)}
      {px(1, 1, 28, 1, c)}
      {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((r) => [
        px(1, r, 1, 1, d),
        px(2, r, 1, 1, c),
        px(27, r, 1, 1, c),
        px(28, r, 1, 1, d),
      ])}
      {px(1, 11, 28, 1, c)}
      {px(2, 12, 26, 1, d)}

      {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((r) => (
        <rect key={`scr-${r}`} x={3 * P} y={r * P} width={24 * P} height={P} fill={s} fillOpacity={0.18} />
      ))}
      {[3, 5, 7, 9].map((r) => (
        <rect key={`sl-${r}`} x={3 * P} y={r * P} width={24 * P} height={P * 0.4} fill={s} fillOpacity={0.12} />
      ))}
      <rect x={7 * P} y={4 * P} width={16 * P} height={4 * P} fill={s} fillOpacity={0.07} rx={P * 0.5} />

      {px(13, 13, 4, 1, d)}
      {px(12, 14, 6, 1, d)}

      {px(8, 15, 14, 1, c)}
      {px(7, 16, 16, 1, d)}

      {px(1, 18, 28, 1, c)}
      {[1, 4, 7, 10, 13, 16, 19, 22, 25].map((col) => px(col, 19, 2, 1, k))}
      {[2, 5, 8, 11, 14, 17, 20, 23].map((col) => px(col, 20, 2, 1, k))}
      {px(4, 21, 20, 1, k)}
      {px(1, 22, 28, 1, c)}

      <rect x={23 * P} y={1.5 * P} width={P * 0.9} height={P * 0.9} fill="rgba(74,222,128,1)" />
      <rect x={25 * P} y={1.5 * P} width={P * 0.9} height={P * 0.9} fill={s} fillOpacity={0.7} />

      <rect x={4 * P} y={3 * P} width={8 * P} height={P * 0.7} fill={s} fillOpacity={0.55} />
      <rect x={4 * P} y={5 * P} width={14 * P} height={P * 0.7} fill={s} fillOpacity={0.4} />
      <rect x={4 * P} y={7 * P} width={10 * P} height={P * 0.7} fill={s} fillOpacity={0.5} />
      <rect x={6 * P} y={9 * P} width={6 * P} height={P * 0.7} fill={s} fillOpacity={0.35} />
      <rect x={13 * P} y={9 * P} width={P * 0.9} height={P * 1.1} fill={s} fillOpacity={0.9}>
        <animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite" />
      </rect>
    </svg>
  )
}
