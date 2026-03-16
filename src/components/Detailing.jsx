const plans = [
  {
    name: 'Standard',
    price: 'Från 299 kr',
    note: 'Välj mellan exteriör eller interiör',
    exterior: ['Avfettning', 'Snowfoam', 'Schamponering', 'Fälgrengöring', 'Däckglans', 'Torkning'],
    interior: ['Rattrengöring', 'Panelrengöring', 'Dammsugning', 'Glasrengöring'],
  },
  {
    name: 'Paket',
    price: '499 kr',
    note: 'In & utvändig tvätt',
    highlight: true,
    exterior: ['Avfettning', 'Snowfoam', 'Schamponering', 'Fälgrengöring', 'Däckglans', 'Torkning'],
    interior: ['Rattrengöring', 'Panelrengöring', 'Dammsugning', 'Glasrengöring'],
  },
  {
    name: 'Deluxe',
    price: 'Från 999 kr',
    note: 'Mest populära',
    exterior: ['Avfettning', 'Snowfoam', 'Schamponering', 'Fälgrengöring', 'Däckglans', 'Gloss', 'Torkning', 'Motortvätt'],
    interior: ['Rattrengöring', 'Panelrengöring', 'Dammsugning', 'Glasrengöring', 'Ångtvätt plastdetaljer', 'Pensel & APC'],
  },
]

export default function Detailing() {
  return (
    <section id="bilvard" className="bg-white px-6 md:px-16 py-24">

      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-5">
          <span className="block w-7 h-[1px] bg-[#C9A96E]" />
          <span className="text-[10px] font-medium tracking-[3px] uppercase text-[#C9A96E]">Bilvård</span>
          <span className="block w-7 h-[1px] bg-[#C9A96E]" />
        </div>
        <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,52px)] font-light text-[#0f0f0f] mb-4">
          Prislista
        </h2>
        <p className="text-sm font-light text-[#888] max-w-md mx-auto">
          Vi erbjuder professionell bilvård för privatpersoner och företag. Kontakta oss för bokning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] max-w-5xl mx-auto">
        {plans.map(p => (
          <div
            key={p.name}
            className={`px-8 py-10 border-t-2 transition-all duration-300 hover:-translate-y-1 ${
              p.highlight
                ? 'bg-[#0f0f0f] border-[#C9A96E]'
                : 'bg-[#FAF8F5] border-transparent hover:border-[#C9A96E]'
            }`}
          >
            {/* Header */}
            <div className="mb-8">
              <p className={`text-[9px] font-semibold tracking-[2.5px] uppercase mb-2 ${p.highlight ? 'text-[#C9A96E]' : 'text-[#C9A96E]'}`}>
                {p.note}
              </p>
              <h3 className={`font-['Cormorant_Garamond'] text-3xl font-light mb-1 ${p.highlight ? 'text-white' : 'text-[#0f0f0f]'}`}>
                {p.name}
              </h3>
              <p className={`text-2xl font-light tracking-wide ${p.highlight ? 'text-white' : 'text-[#0f0f0f]'}`}>
                {p.price}
              </p>
            </div>

            <div className={`w-8 h-[1px] mb-8 ${p.highlight ? 'bg-[#C9A96E]' : 'bg-[#E8E2D9]'}`} />

            {/* Exteriör */}
            <p className={`text-[9px] font-semibold tracking-[2px] uppercase mb-3 ${p.highlight ? 'text-[#C9A96E]' : 'text-[#C9A96E]'}`}>
              Exteriör
            </p>
            <ul className="mb-6 flex flex-col gap-2">
              {p.exterior.map(item => (
                <li key={item} className={`text-[13px] font-light flex items-center gap-2 ${p.highlight ? 'text-[#ccc]' : 'text-[#888]'}`}>
                  <span className="text-[#C9A96E] text-xs">—</span> {item}
                </li>
              ))}
            </ul>

            {/* Interiör */}
            <p className={`text-[9px] font-semibold tracking-[2px] uppercase mb-3 ${p.highlight ? 'text-[#C9A96E]' : 'text-[#C9A96E]'}`}>
              Interiör
            </p>
            <ul className="flex flex-col gap-2">
              {p.interior.map(item => (
                <li key={item} className={`text-[13px] font-light flex items-center gap-2 ${p.highlight ? 'text-[#ccc]' : 'text-[#888]'}`}>
                  <span className="text-[#C9A96E] text-xs">—</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Booking CTA */}
      <div className="text-center mt-14">
        <a
          href="#kontakt"
          className="inline-block bg-[#C9A96E] text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-10 py-4 hover:bg-[#A8843E] transition-colors"
        >
          Boka bilvård
        </a>
      </div>

    </section>
  )
}