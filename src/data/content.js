export const hours = [
  { day: 'Måndag',  time: '10:00 – 18:00' },
  { day: 'Tisdag',  time: '10:00 – 18:00' },
  { day: 'Onsdag',  time: '10:00 – 18:00' },
  { day: 'Torsdag', time: '10:00 – 18:00' },
  { day: 'Fredag',  time: '10:00 – 18:00' },
  { day: 'Lördag',  time: '11:00 – 16:00' },
  { day: 'Söndag',  time: 'Stängt' },
]

export const detailing = [
  {
    name: 'Standard',
    price: 'Från 299 kr',
    options: ['Exteriör', 'Interiör'],
    exterior: ['Avfettning', 'Snowfoam', 'Schamponering', 'Fälgrengöring', 'Däckglans', 'Torkning'],
    interior: ['Rattrengöring', 'Panelrengöring', 'Dammsugning', 'Glasrengöring'],
  },
  {
    name: 'Paket',
    price: '499 kr',
    badge: 'In & utvändig tvätt',
    exterior: ['Allt i Standard exteriör'],
    interior: ['Allt i Standard interiör'],
  },
  {
    name: 'Deluxe',
    price: 'Från 999 kr',
    exterior: ['Avfettning', 'Snowfoam', 'Schamponering', 'Fälgrengöring', 'Däckglans', 'Gloss', 'Torkning', 'Motortvätt'],
    interior: ['Rattrengöring', 'Panelrengöring', 'Dammsugning', 'Glasrengöring', 'Ångtvätt plastdetaljer', 'Pensel & APC'],
  },
]

export const contact = {
  email: 'info@nextride.nu',
  address: 'Storegårdsvägen 8, 468 30 Vargön',
  blocket: 'https://www.blocket.se/mobility/dealer/5514462/nextride',
  persons: [
    { name: 'Alen',   role: 'Säljare', phone: '076-900 02 27', tel: '0769000227' },
    { name: 'Dejvid', role: 'Säljare', phone: '070-400 09 33', tel: '0704000933' },
  ],
}