const stats = [
  { num: '1,95%',  label: 'Ränta från' },
  { num: '6–36',   label: 'Månaders garanti' },
  { num: 'SWE',    label: 'Hemleverans i hela landet' },
]

export default function StatsBand() {
  return (
    <div className="bg-[#C9A96E] py-5 px-6 flex flex-wrap justify-center gap-8 md:gap-16">
      {stats.map(s => (
        <div key={s.num} className="text-center">
          <div className="font-['Cormorant_Garamond'] text-3xl font-light text-white leading-none">
            {s.num}
          </div>
          <div className="text-[9px] font-medium tracking-[2px] uppercase text-white/75 mt-1">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  )
}