export default function About() {
  const tags = ['Personbilar', 'Transportbilar', 'Inbyte', 'Bilvård & Rekond']

  return (
    <section id="om-oss" className="grid grid-cols-1 md:grid-cols-2">

      {/* Bild */}
      <div className="bg-[#e8e4de] min-h-[300px] md:min-h-full flex flex-col items-center justify-center gap-3 text-[#bbb]">
        <span className="text-6xl opacity-25">🚙</span>
        <p className="text-[10px] tracking-[2px] uppercase text-[#aaa]">Bild på firman</p>
      </div>

      {/* Text */}
      <div className="bg-white px-8 md:px-16 py-20 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-5">
          <span className="block w-7 h-[1px] bg-[#C9A96E]" />
          <span className="text-[10px] font-medium tracking-[3px] uppercase text-[#C9A96E]">Om oss</span>
        </div>

        <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,52px)] font-light leading-tight text-[#0f0f0f] mb-7">
          Din lokala<br />bilhandlare i Vargön
        </h2>

        <p className="text-sm font-light leading-relaxed text-[#888] mb-9">
          NextRide är en bilhandlare i Vargön som köper, säljer och byter personbilar
          och transportbilar. Vi erbjuder ett enkelt och tryggt köp – från finansiering
          och garantier till hemleverans i hela Sverige.
          <br /><br />
          Ibland är vi ute på korta ärenden – ring gärna innan och kontrollera att
          bilen du är intresserad av är tillgänglig.
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map(t => (
            <span
              key={t}
              className="text-[9px] font-semibold tracking-[2px] uppercase border border-[#E8E2D9] px-4 py-2 text-[#1a1a1a]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

    </section>
  )
}