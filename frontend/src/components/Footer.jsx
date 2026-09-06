import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function InstagramIcon({ className }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}>
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    )
}

function FacebookIcon({ className }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}>
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}

function TikTokIcon({ className }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}>
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
    )
}

function Footer() {
    return (
        <footer className="bg-[#141414] px-6 pb-8 pt-14 text-neutral-300 lg:px-16 lg:pb-10 lg:pt-20 xl:px-24">
            <div className="flex flex-col gap-12 lg:gap-0">
                <div className="lg:flex lg:items-end lg:justify-between lg:border-b lg:border-neutral-800 lg:pb-14">
                    <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-[#c9a94a]">
                            Miraflores, Lima
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold leading-snug text-white lg:text-5xl lg:leading-tight">
                            Te esperamos en Bella Massa.
                        </h2>
                    </div>
                    <Link
                        to="/contacto"
                        className="mt-6 flex w-max items-center gap-2 border border-white py-3 px-6 text-white transition-colors hover:border-[#c9a94a] hover:text-[#c9a94a] lg:mt-0">
                        Ver cómo llegar
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="flex flex-col gap-12 lg:grid lg:grid-cols-4 lg:content-start lg:gap-8 lg:pt-14">
                    <div>
                        <div className="flex items-center gap-3">
                            <p className="font-serif-display text-2xl font-semibold text-white lg:text-3xl">
                                Bella Massa
                            </p>
                            <span className="h-1.5 w-1.5 rotate-45 bg-[#c9a94a]" />
                        </div>
                        <p className="mt-3 max-w-xs text-neutral-400">
                            La pizza que empieza con una buena masa.
                        </p>
                        <div className="mt-6 flex gap-5 text-white">
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="transition-colors hover:text-[#c9a94a]"><InstagramIcon className="h-5 w-5" /></a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="transition-colors hover:text-[#c9a94a]"><FacebookIcon className="h-5 w-5" /></a>
                            <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" className="transition-colors hover:text-[#c9a94a]"><TikTokIcon className="h-5 w-5" /></a>
                        </div>
                    </div>

                    <div className="flex items-start justify-between lg:contents">
                        <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-[#c9a94a]">
                                Navegación
                            </p>
                            <div className="mt-4 flex flex-col gap-2.5">
                                <Link to="/" className="w-max text-neutral-400 transition-colors hover:text-white">Inicio</Link>
                                <Link to="/carta" className="w-max text-neutral-400 transition-colors hover:text-white">Carta</Link>
                                <Link to="/nosotros" className="w-max text-neutral-400 transition-colors hover:text-white">Nosotros</Link>
                                <Link to="/contacto" className="w-max text-neutral-400 transition-colors hover:text-white">Contacto</Link>
                            </div>
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-[#c9a94a]">
                                Horarios
                            </p>
                            <div className="mt-4 text-neutral-400">
                                <p>Lun – Jue: 12:00 – 22:00</p>
                                <p>Vie – Sáb: 12:00 – 23:00</p>
                                <p>Dom: 12:00 – 21:00</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-[#c9a94a]">
                            Contacto
                        </p>
                        <div className="mt-4 text-neutral-400">
                            <p>Av. La Mar 459, Miraflores</p>
                            <p>Lima, Perú</p>
                            <p>+51 1 234 5678</p>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
                                @bellamassa.pe
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 flex flex-col gap-2 border-t border-neutral-800 pt-6 text-sm text-neutral-500 lg:mt-16 lg:flex-row lg:items-center lg:justify-between">
                <p>© 2026 Bella Massa. Todos los derechos reservados.</p>
                <p className="text-[#c9a94a]/70">Lima · Perú</p>
            </div>
        </footer>
    )
}

export default Footer;