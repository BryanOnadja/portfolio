// Fond à motifs de conception (très transparent) qui couvre toute la page.
export default function Pattern() {
  return (
    <svg className="pattern" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="motifs" width="480" height="480" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="#1d6b4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.22">
            {/* feuille */}
            <path d="M40 90 C40 55 65 35 100 35 C100 70 80 90 40 90 Z M40 90 L85 48" />
            {/* compas */}
            <g transform="translate(210 30)"><circle cx="20" cy="4" r="4" /><path d="M20 8 L4 60 M20 8 L36 60 M10 40 L30 40" /></g>
            {/* équerre */}
            <path d="M290 110 L340 160 L290 160 Z M300 150 L300 135 L315 150 Z" />
            {/* ligne de cote */}
            <path d="M20 150 L120 150 M20 144 L20 156 M120 144 L120 156 M28 150 L34 146 M28 150 L34 154 M112 150 L106 146 M112 150 L106 154" />
            {/* ampoule */}
            <g transform="translate(60 190)"><path d="M20 0 C8 0 0 9 0 20 C0 28 5 33 9 37 L9 44 L31 44 L31 37 C35 33 40 28 40 20 C40 9 32 0 20 0 Z M12 50 L28 50 M14 56 L26 56" /></g>
            {/* engrenage */}
            <g transform="translate(220 230)"><circle r="14" /><circle r="5" /><path d="M0 -22 L0 -14 M0 14 L0 22 M-22 0 L-14 0 M14 0 L22 0 M-15.5 -15.5 L-10 -10 M10 10 L15.5 15.5 M-15.5 15.5 L-10 10 M10 -10 L15.5 -15.5" /></g>
            {/* crayon */}
            <g transform="translate(290 250) rotate(-35)"><path d="M0 0 L50 0 L60 6 L50 12 L0 12 Z M50 0 L50 12" /></g>
            {/* recyclage */}
            <g transform="translate(150 315)"><path d="M-18 -4 A18 18 0 0 1 14 -12 M14 -12 L16 -2 M14 -12 L5 -8 M18 4 A18 18 0 0 1 -14 12 M-14 12 L-16 2 M-14 12 L-5 8" /></g>
            {/* bâtiments */}
            <g transform="translate(380 40)"><path d="M0 70 L0 20 L22 20 L22 70 M22 70 L22 0 L50 0 L50 70 M50 70 L50 30 L70 30 L70 70 M-6 70 L76 70 M6 30 L16 30 M6 42 L16 42 M6 54 L16 54 M30 12 L42 12 M30 24 L42 24 M30 36 L42 36 M30 48 L42 48 M56 40 L64 40 M56 52 L64 52" /></g>
            {/* éolienne */}
            <g transform="translate(420 180)"><circle r="3" /><path d="M0 3 L0 80 M-8 80 L8 80 M0 -3 L0 -34 M2.6 1.5 L29 17 M-2.6 1.5 L-29 17" /></g>
            {/* panneau solaire */}
            <g transform="translate(375 300)"><path d="M0 30 L20 0 L80 0 L60 30 Z M10 15 L70 15 M33 0 L23 30 M56 0 L46 30 M30 30 L30 46 M20 46 L40 46" /><circle cx="92" cy="-14" r="7" /></g>
            {/* parc */}
            <g transform="translate(40 380)"><circle cx="20" cy="20" r="18" /><path d="M20 38 L20 70 M12 52 L20 44 M28 50 L20 44 M50 58 L90 58 M52 58 L52 70 M88 58 L88 70 M50 50 L90 50 M0 70 L100 70" /></g>
            {/* pont */}
            <g transform="translate(170 410)"><path d="M0 30 L120 30 M0 30 Q60 -20 120 30 M20 30 L20 15 M40 30 L40 7 M60 30 L60 5 M80 30 L80 7 M100 30 L100 15" /></g>
            {/* énergie */}
            <path d="M332 360 L316 392 L330 392 L320 424 L346 384 L333 384 L342 360 Z" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#motifs)" />
    </svg>
  )
}
