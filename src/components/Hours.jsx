
const hours = [
  { day: 'Måndag',  time: '10:00 – 18:00' },
  { day: 'Tisdag',  time: '10:00 – 18:00' },
  { day: 'Onsdag',  time: '10:00 – 18:00' },
  { day: 'Torsdag', time: '10:00 – 18:00' },
  { day: 'Fredag',  time: '10:00 – 18:00' },
  { day: 'Lördag',  time: '11:00 – 16:00' },
  { day: 'Söndag',  time: 'Stängt' },
]

const dayMap = [6, 0, 1, 2, 3, 4, 5]
const todayIndex = dayMap[new Date().getDay()]

export default function Hours() {
  return (
    <section id="oppettider" className="grid grid-cols-1 md:grid-cols-2">

      {/* Öppettider */}
      <div className="bg-white px-8 md:px-16 py-24">
        <div className="flex items-center gap-4 mb-5">
          <span className="block w-7 h-[1px] bg-[#C9A96E]" />
          <span className="text-[10px] font-medium tracking-[3px] uppercase text-[#C9A96E]">Besök oss</span>
        </div>
        <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,52px)] font-light text-[#0f0f0f] mb-12">
          Öppettider
        </h2>

        <div>
          {hours.map((h, i) => (
            <div
              key={h.day}
              className={`flex justify-between items-center py-4 border-b border-[#E8E2D9] text-sm transition-colors ${
                i === todayIndex
                  ? 'text-[#A8843E] font-medium'
                  : h.time === 'Stängt'
                  ? 'text-[#ccc]'
                  : 'text-[#1a1a1a] font-light'
              }`}
            >
              <span>
                {h.day}
                {i === todayIndex && (
                  <span className="ml-2 text-[9px] tracking-[1.5px] uppercase text-[#C9A96E]">idag</span>
                )}
              </span>
              <span>{h.time}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 border-l-2 border-[#C9A96E] pl-5 bg-[#FAF8F5] py-5 pr-5">
          <p className="text-[13px] font-light leading-relaxed text-[#888]">
            Ibland är vi ute på korta ärenden – ring gärna innan och kontrollera att bilen du är intresserad av är tillgänglig.
          </p>
        </div>
      </div>

      {/* Adress */}
      <div className="bg-[#0f0f0f] px-8 md:px-16 py-24 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-5">
          <span className="block w-7 h-[1px] bg-[#C9A96E]" />
          <span className="text-[10px] font-medium tracking-[3px] uppercase text-[#C9A96E]">Hitta oss</span>
        </div>
        <h2 className="font-['Cormorant_Garamond'] text-[clamp(28px,3.5vw,44px)] font-light text-white mb-4">
          Storegårdsvägen 8
        </h2>
        <p className="font-['Cormorant_Garamond'] text-xl font-light text-[#aaa] mb-12">
          468 30 Vargön
        </p>

            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2093.2454359712083!2d12.388475476490106!3d58.35553058858534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464524852eb568c9%3A0xad7f49b533a41456!2zU3RvcmVnw6VyZHN2w6RnZW4gOCwgNDY4IDMwIFZhcmfDtm4!5e0!3m2!1ssv!2sse!4v1773680151710!5m2!1ssv!2sse"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NextRide karta"
              />
            </div>

        <a
          href={`https://maps.google.com/?q=Storegårdsvägen+8+Vargön`}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block text-[10px] font-semibold tracking-[2px] uppercase text-[#C9A96E] border-b border-[#C9A96E] pb-0.5 hover:text-[#A8843E] hover:border-[#A8843E] transition-colors self-start"
        >
          Öppna i Google Maps →
        </a>
      </div>

    </section>
  )
}