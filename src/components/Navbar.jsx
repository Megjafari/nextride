import { useState, useEffect } from 'react'
import Logo from '../assets/Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Om oss',      href: '#om-oss' },
    { label: 'Tjänster',    href: '#tjanster' },
    { label: 'Bilvård',     href: '#bilvard' },
    { label: 'Öppettider',  href: '#oppettider' },
    { label: 'Kontakt',     href: '#kontakt' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-[72px] bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#E8E2D9] transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''}`}
      >
        {/* Logo */}
        <a href="#hem">
          <Logo className="h-10 w-auto" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-[10px] font-medium tracking-[2.5px] uppercase text-[#888] hover:text-[#C9A96E] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="https://www.blocket.se/mobility/dealer/5514462/nextride"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-block text-[10px] font-semibold tracking-[2px] uppercase text-[#C9A96E] border-b border-[#C9A96E] pb-0.5 hover:text-[#A8843E] hover:border-[#A8843E] transition-colors"
        >
          Se våra bilar →
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-1"
          aria-label="Meny"
        >
          <span className={`block w-[22px] h-[1.5px] bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`block w-[22px] h-[1.5px] bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-[1.5px] bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed top-[72px] left-0 right-0 z-40 bg-white border-b border-[#E8E2D9] flex flex-col px-8 py-8 gap-6">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[11px] font-medium tracking-[2.5px] uppercase text-[#1a1a1a] hover:text-[#C9A96E] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.blocket.se/mobility/dealer/5514462/nextride"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="text-[11px] font-semibold tracking-[2px] uppercase text-[#C9A96E]"
          >
            Se våra bilar →
          </a>
        </div>
      )}
    </>
  )
}