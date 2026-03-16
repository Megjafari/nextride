import { contact } from '../data/content'

export default function Contact() {
  return (
    <section id="kontakt" className="bg-[#FAF8F5] px-6 md:px-16 py-24">

      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-5">
          <span className="block w-7 h-[1px] bg-[#C9A96E]" />
          <span className="text-[10px] font-medium tracking-[3px] uppercase text-[#C9A96E]">Prata med oss</span>
          <span className="block w-7 h-[1px] bg-[#C9A96E]" />
        </div>
        <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,52px)] font-light text-[#0f0f0f]">
          Kontakt
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] max-w-5xl mx-auto">

        {/* Persons */}
        {contact.persons.map(p => (
          <div
            key={p.name}
            className="bg-white px-8 py-10 border-t-2 border-transparent hover:border-[#C9A96E] transition-all duration-300"
          >
            <p className="text-[9px] font-semibold tracking-[2.5px] uppercase text-[#C9A96E] mb-3">
              {p.role}
            </p>
            <h3 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#0f0f0f] mb-6">
              {p.name}
            </h3>
            <a
              href={`tel:${p.tel}`}
              className="text-lg font-light text-[#1a1a1a] hover:text-[#C9A96E] transition-colors tracking-wide"
            >
              {p.phone}
            </a>
            <p className="text-[13px] font-light text-[#aaa] mt-1">{contact.email}</p>
          </div>
        ))}

        {/* Blocket card */}
        <div className="bg-white px-8 py-10 border-t-2 border-transparent hover:border-[#C9A96E] transition-all duration-300 flex flex-col justify-between">
          <div>
            <p className="text-[9px] font-semibold tracking-[2.5px] uppercase text-[#C9A96E] mb-3">
              Våra bilar
            </p>
            <h3 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#0f0f0f] mb-4">
              Blocket
            </h3>
            <p className="text-[13px] font-light text-[#888] leading-relaxed mb-8">
              Se alla våra aktuella bilar på Blocket.
            </p>
          </div>
          <a
            href={contact.blocket}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[#C9A96E] text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-8 py-4 hover:bg-[#A8843E] transition-colors text-center"
          >
            Se bilar →
          </a>
        </div>

      </div>
    </section>
  )
}