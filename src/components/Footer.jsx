export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] px-6 md:px-16 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Logo text */}
        <div>
          <p className="font-['Cormorant_Garamond'] text-2xl font-light text-white tracking-[2px]">
            NextRide
          </p>
          <p className="text-[9px] font-medium tracking-[3px] uppercase text-[#C9A96E] mt-1">
            Vägen till din nästa bil
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-6 md:gap-10">
          {[
            { label: 'Om oss',     href: '#om-oss' },
            { label: 'Tjänster',   href: '#tjanster' },
            { label: 'Bilvård',    href: '#bilvard' },
            { label: 'Öppettider', href: '#oppettider' },
            { label: 'Kontakt',    href: '#kontakt' },
          ].map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-[10px] font-medium tracking-[2px] uppercase text-[#444] hover:text-[#C9A96E] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Copy */}
        <p className="text-[11px] text-[#333] tracking-wide">
          © 2025 NextRide Handelsbolag
        </p>

      </div>

      <div className="mt-8 pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between gap-2">
        <p className="text-[11px] text-[#333]">Org.nr 969803-2514</p>
        <p className="text-[11px] text-[#333]">Storegårdsvägen 8, 468 30 Vargön</p>
      </div>
    </footer>
  )
}