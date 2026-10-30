// Every video on the site, in one place. Pages refer to these by name, so a
// YouTube ID pasted here shows up everywhere that video is used.
//
// To connect a video, paste the ID from its link
// (youtube.com/watch?v=THIS_PART) into `youtubeId`. Videos without an ID
// show a placeholder. Titles are the names of the videos on YouTube, so
// they aren't translated.

const video = (title, youtubeId = null) => ({ title, youtubeId })

export const videos = {
  // Mountaineering and hiking
  foxSummit: video('MONTAÑISTAS DE WASHINGTON SUMMITTING THE HIGHEST PEAK- #fox13', '63m9PjP6OiE'),
  summitCrew: video('Mount Rainier Summit- July 5th-2026 | Montañistas De Washington', 'tr1iGc9_i5c'),

  // 2026 hikes
  wallaceFalls: video('Wallace Falls _ October 17-2026', 's0Z0ObgXhCY'),
  lakeIngalls: video('Lake Ingalls -Golden Larches and First Snow ❄️ 10-11-2026', 'epkQ_zt2tl8'),
  mountPilchuck: video('Mount Pilchuck -September -27-2026', 'IXQL10fjjm8'),
  enchantments: video('The Enchantments September-20-2026', 'hRGQQC_u1TU'),
  graniteMountain: video('Granite Mountain Lookout - September-5-2026', 'a2jJ3a4kdjc'),
  mountPugh: video('Mount Pugh -August-29-2026', 'H4tUHlsDpyw'),
  thunderMountain: video('Thunder mountain August 22_2026', 'Kl6uJJNeTdE'),

  // Climbing
  iceClimbing2026: video('Ice Climbing -February 7-2026', 'tijQ_b9h3V0'),
  ourayIcePark: video('Ouray Ice Park- Ice Climbing', 'dj-DhHRcIGk'),
  climbingNight: video('Noche De Escalada-Indoor Rock Climbing', 'rW0jV8HxCeY'),

  // Little Hikers
  seattleAquarium: video('Seattle Acuario-October _18-2026', '_r9tvT_iTR0'),
  kidsEvents: video('PEQUEÑOS SENDERISTAS —EVENTOS', '-ABYYkkMzJo'),
  kidsDay: video('Pequeños Senderistas | Celebración del día del niño 4-28-2024', 'OPFYHGZ_hoY'),
  snoqualmieFalls: video('Pequeños Senderistas | Snoqualmie Falls 3-23-2024', '5OjU_aX_B90'),
  wenatcheeGathering: video(
    'Pequeños Senderistas | Convivió con la comunidad de Wenatchee y los animalitos 🦖🐼🧸',
    'Z2ywA9XCE3k',
  ),

  // Community
  hilltopPark: video('Reforestaciòn in Hilltop Park -August-15-2026', 'Hk4Gunps0MA'),
  communityAnniversary: video('3er aniversario-Reforestacion y Servicio Comunitario', 'jR1_kjOCyUo'),

  // Interviews
  mountainSafetyRadio: video(
    'Seguridad en la montaña, VT Radio Universal Presenta a Los montañistas de Washington.',
    'PXxQn5V6LE0',
  ),
  solCastroPodcast: video('Podcast con Sol Castro Alpinista Profesional 🇲🇽', '4OVYlZre3SA'),
}
