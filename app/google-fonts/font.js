import { Afacad_Flux, Cormorant  } from 'next/font/google'

export const afacad = Afacad_Flux({
    weight: '700',
    subsets: ['latin'],
    variable: '--afacad_flux-font',
    display: 'swap',
    adjustFontFallback: false

})

export const cormorant = Cormorant({
    weight: '700',
    subsets: ['latin'],
    variable: '--cormorant-font',
    display: 'swap',
    adjustFontFallback: false
})