import showroom from '../assets/images/showroom.webp'

export default function Hero() {
  return (
    <section id="hem" className="pt-[72px] min-h-svh grid grid-cols-1 md:grid-cols-2">

      {/* Left */}
      <div className="flex flex-col justify-center px-8 md:px-16 py-20 bg-white order-2 md:order-1">
        <div className="flex items-center gap-4 mb-7">
          <span className="block w-10 h-[1px] bg-[#C9A96E]" />
          <span className="text-[10px] font-medium tracking-[3px] uppercase text-[#C9A96E]">
            Vargön · Västra Götaland
          </span>
        </div>

        <h1 className="font-['Cormorant_Garamond'] text-[clamp(52px,6vw,88px)] font-light leading-none tracking-wide text-[#0f0f0f] mb-2">
          NextRide
        </h1>

        <p className="text-[10px] font-medium tracking-[4px] uppercase text-[#888] mb-12">
          Vägen till din nästa bil
        </p>

        <div className="w-12 h-[1px] bg-[#C9A96E] mb-12" />

        <div className="flex flex-col items-start gap-4">
          <a
            href="https://www.blocket.se/mobility/dealer/5514462/nextride"
            target="_blank"
            rel="noreferrer"
            className="bg-[#C9A96E] text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-10 py-4 hover:bg-[#A8843E] transition-colors"
          >
            Se våra bilar
          </a>
          <a
            href="#kontakt"
            className="border border-[#E8E2D9] text-[#1a1a1a] text-[10px] font-semibold tracking-[2.5px] uppercase px-10 py-4 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors"
          >
            Kontakta oss
          </a>
        </div>
      </div>

      {/* Right – showroom bild */}
      <div className="relative min-h-[320px] md:min-h-full order-1 md:order-2">
        <img
          src={showroom}
          alt="NextRide showroom"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 z-10 p-8">
          <p className="text-[9px] font-semibold tracking-[2.5px] uppercase text-[#C9A96E] mb-1">
            Köper · Säljer · Byter
          </p>
          <p className="font-['Cormorant_Garamond'] text-2xl font-light text-white tracking-wide">
            Vi tar din bil i inbyte
          </p>
        </div>
      </div>

    </section>
  )
}