const services = [
  {
    icon: '🔄',
    title: 'Köper · Säljer · Byter',
    desc: 'Vi tar gärna din bil i inbyte. Kontakta oss så berättar vi vad vi kan erbjuda.',
  },
  {
    icon: '💳',
    title: 'Finansiering',
    desc: 'Via MoneyGo & MyMoney. Ränta från 1,95% – skräddarsydd avbetalningsplan utifrån dina önskemål.',
  },
  {
    icon: '🛡️',
    title: 'Garanti',
    desc: 'Trygg affär via GarantiPartner. Välj garanti 6–36 månader.',
  },
  {
    icon: '🚚',
    title: 'Hemleverans',
    desc: 'Vi levererar bilen hem till dig i hela Sverige. Kontakta oss för mer info.',
  },
]

export default function Services() {
  return (
    <section id="tjanster" className="bg-[#FAF8F5] px-6 md:px-16 py-24">

      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-5">
          <span className="block w-7 h-[1px] bg-[#C9A96E]" />
          <span className="text-[10px] font-medium tracking-[3px] uppercase text-[#C9A96E]">Vad vi erbjuder</span>
          <span className="block w-7 h-[1px] bg-[#C9A96E]" />
        </div>
        <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,52px)] font-light text-[#0f0f0f]">
          Våra tjänster
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px]">
        {services.map(s => (
          <div
            key={s.title}
            className="bg-white px-7 py-10 border-t-2 border-transparent hover:border-[#C9A96E] hover:-translate-y-1 transition-all duration-300"
          >
            <span className="text-3xl mb-6 block">{s.icon}</span>
            <h3 className="font-['Cormorant_Garamond'] text-xl font-light text-[#0f0f0f] mb-3">
              {s.title}
            </h3>
            <p className="text-[13px] font-light leading-relaxed text-[#888]">
              {s.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}