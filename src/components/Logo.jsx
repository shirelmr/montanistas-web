import { useId } from 'react'
import { site } from '../data/content'

// Shows the real logo when `site.logo` is set, otherwise a drawn stand-in.
export default function Logo({ className }) {
  const id = useId()

  if (site.logo) {
    return <img className={className} src={site.logo} alt={site.name} />
  }

  return (
    <svg className={className} viewBox="0 0 200 230" role="img" aria-label={site.name}>
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffd84d" />
          <stop offset="0.3" stopColor="#ffd84d" />
          <stop offset="0.3" stopColor="#fbb040" />
          <stop offset="0.5" stopColor="#fbb040" />
          <stop offset="0.5" stopColor="#f7883a" />
          <stop offset="1" stopColor="#f7883a" />
        </linearGradient>
        <clipPath id={`${id}-clip`}>
          <polygon points="100,16 184,64 184,166 100,214 16,166 16,64" />
        </clipPath>
      </defs>

      <polygon points="100,2 196,57 196,173 100,228 4,173 4,57" fill="#111" />
      <g clipPath={`url(#${id}-clip)`}>
        <rect x="0" y="0" width="200" height="230" fill={`url(#${id}-sky)`} />
        <circle cx="128" cy="86" r="11" fill="#fff" />
        <path
          d="M10 168 L62 92 L78 112 L104 70 L132 108 L144 96 L196 168 Z"
          fill="#ef7a33"
          stroke="#111"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path d="M104 70 L92 100 L104 92 L112 104 L118 88 Z" fill="#111" />
        <path d="M62 92 L54 112 L66 106 L72 116 Z" fill="#111" />
        <path
          d="M134 66 q10 -12 26 -14 q-6 6 -6 10 q8 -4 16 -2 q-10 4 -14 10 q-8 6 -14 4 z"
          fill="#111"
        />
        <rect x="0" y="146" width="200" height="84" fill="#111" />
      </g>
      <g
        fill="#fff"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        textAnchor="middle"
      >
        <text x="100" y="168" fontSize="19" letterSpacing="1">MONTAÑISTAS</text>
        <text x="100" y="184" fontSize="12">DE</text>
        <text x="100" y="202" fontSize="17" letterSpacing="1">WASHINGTON</text>
      </g>
    </svg>
  )
}
