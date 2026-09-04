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
        <footer className="bg-[#141414] px-6 pb-8 pt-14 text-neutral-300">
            <div className="flex flex-col gap-12">
                <div>
                    <p className="text-xs uppercase tracking-wide text-[#c9a94a]">
                        Miraflores, Lima
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold leading-snug text-white">
                        Te esperamos en Bella Massa.
                    </h2>
                    <a
                        href="#ubicacion"
                        className="mt-4 flex w-max items-center gap-2 border border-white py-2 px-4 text-white">
                        Ver cómo llegar
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>

                <div>
                    <p className="text-xl font-semibold text-white">Bella Massa</p>
                    <p className="mt-2 text-neutral-400">
                        La pizza que empieza con una buena masa.
                    </p>
                    <div className="mt-4 flex gap-4 text-white">
                        <a href="#" aria-label="Instagram"><InstagramIcon className="h-5 w-5" /></a>
                        <a href="#" aria-label="Facebook"><FacebookIcon className="h-5 w-5" /></a>
                        <a href="#" aria-label="TikTok"><TikTokIcon className="h-5 w-5" /></a>
                    </div>
                </div>

                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-xs uppercase tracking-wide text-[#c9a94a]">
                            Navegación
                        </p>
                        <div className="mt-3 flex flex-col gap-2">
                            <Link to="/" className="text-neutral-400">Inicio</Link>
                            <Link to="/carta" className="text-neutral-400">Carta</Link>
                            <Link to="/nosotros" className="text-neutral-400">Nosotros</Link>
                            <Link to="/contacto" className="text-neutral-400">Contacto</Link>
                        </div>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-wide text-[#c9a94a]">
                            Horarios
                        </p>
                        <div className="mt-3 text-neutral-400">
                            <p>Lun – Jue: 12:00 – 22:00</p>
                            <p>Vie – Sáb: 12:00 – 23:00</p>
                            <p>Dom: 12:00 – 21:00</p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="text-xs uppercase tracking-wide text-[#c9a94a]">
                        Contacto
                    </p>
                    <div className="mt-3 text-neutral-400">
                        <p>Av. La Mar 459, Miraflores</p>
                        <p>Lima, Perú</p>
                        <p>+51 1 234 5678</p>
                        <p>@bellamassa.pe</p>
                    </div>
                </div>
            </div>

            <div className="mt-12 flex flex-col gap-2 border-t border-neutral-700 pt-6 text-sm text-neutral-500">
                <p>© 2026 Bella Massa. Todos los derechos reservados.</p>
                <p>Lima · Perú</p>
            </div>
        </footer>
    )
}

export default Footer;
