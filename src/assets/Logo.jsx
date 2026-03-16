export default function Logo({ className = '', dark = false }) {
  const textColor = dark ? '#ffffff' : '#1a1a1a'
  const taglineColor = dark ? '#aaaaaa' : '#888888'

  return (
    <svg
      viewBox="0 0 320 90"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
    >
      {/* Shield */}
      <path
        d="M10 8 L45 2 L80 8 L80 42 C80 62 45 78 45 78 C45 78 10 62 10 42 Z"
        stroke="#C9A96E"
        strokeWidth="2.5"
        fill="none"
      />
      {/* Car silhouette */}
      <path
        d="M22 46 Q24 38 30 35 Q37 32 45 32 Q53 32 60 35 Q66 38 68 46"
        stroke="#C9A96E"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <rect x="20" y="44" width="50" height="13" rx="6" stroke="#C9A96E" strokeWidth="2" fill="none" />
      <circle cx="29" cy="57" r="4" stroke="#C9A96E" strokeWidth="2" fill="none" />
      <circle cx="61" cy="57" r="4" stroke="#C9A96E" strokeWidth="2" fill="none" />
      <line x1="33" y1="57" x2="57" y2="57" stroke="#C9A96E" strokeWidth="2" />

      {/* NextRide text */}
      <text
        x="96"
        y="52"
        fontFamily="Cormorant Garamond, serif"
        fontSize="42"
        fontWeight="400"
        fill={textColor}
        letterSpacing="1"
      >
        NextRide
      </text>

      {/* Tagline */}
      <text
        x="97"
        y="70"
        fontFamily="Montserrat, sans-serif"
        fontSize="9"
        fontWeight="500"
        fill={taglineColor}
        letterSpacing="3.5"
      >
        VÄGEN TILL DIN NÄSTA BIL
      </text>
    </svg>
  )
}