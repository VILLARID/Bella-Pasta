import { ArrowRight } from 'lucide-react'

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

function Contacto() {
    return (
        <section className="bg-[#f3efe8] px-6">
            <div className="flex flex-col items-start py-16">
                <p className="text-xs uppercase tracking-wide text-[#800020]">
                    Encuéntranos
                </p>
                <h1 className="mt-3 text-4xl font-semibold leading-tight">
                    Te esperamos
                    <br />
                    en Bella Massa.
                </h1>
            </div>

            <div className="flex flex-col divide-y divide-neutral-300">
                <div className="py-6">
                    <p className="text-xs uppercase tracking-wide text-[#800020]">
                        Dirección
                    </p>
                    <p className="mt-3 text-neutral-700">Av. La Mar 459, Miraflores</p>
                    <p className="text-neutral-700">Lima, Perú</p>
                </div>

                <div className="py-6">
                    <p className="text-xs uppercase tracking-wide text-[#800020]">
                        Horarios
                    </p>
                    <p className="mt-3 text-neutral-700">Lun – Jue: 12:00 – 22:00</p>
                    <p className="text-neutral-700">Vie – Sáb: 12:00 – 23:00</p>
                    <p className="text-neutral-700">Dom: 12:00 – 21:00</p>
                </div>

                <div className="py-6">
                    <p className="text-xs uppercase tracking-wide text-[#800020]">
                        Teléfono
                    </p>
                    <p className="mt-3 text-neutral-700">+51 1 234 5678</p>
                </div>

                <div className="py-6">
                    <p className="text-xs uppercase tracking-wide text-[#800020]">
                        Instagram
                    </p>
                    <p className="mt-3 text-neutral-700">@bellamassa.pe</p>
                </div>

                <a
                    href="https://maps.google.com/?q=Av.+La+Mar+459,+Miraflores,+Lima"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 flex w-max items-center gap-2 bg-black px-8 py-3 text-white">
                    Cómo llegar
                    <ArrowRight className="h-4 w-4" />
                </a>
            </div>

            <div className="py-16">
                <p className="text-xs uppercase tracking-wide text-[#800020]">
                    Síguenos
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="flex flex-col items-center border border-neutral-300 px-2 py-6 text-center">
                        <InstagramIcon className="h-5 w-5 text-neutral-500" />
                        <p className="mt-3 text-[10px] uppercase tracking-wider text-neutral-500">
                            Instagram
                        </p>
                        <p className="mt-1.5 text-xs leading-tight text-neutral-700">@bellamassa.pe</p>
                    </div>
                    <div className="flex flex-col items-center border border-neutral-300 px-2 py-6 text-center">
                        <FacebookIcon className="h-5 w-5 text-neutral-500" />
                        <p className="mt-3 text-[10px] uppercase tracking-wider text-neutral-500">
                            Facebook
                        </p>
                        <p className="mt-1.5 text-xs leading-tight text-neutral-700">Bella Massa</p>
                    </div>
                    <div className="flex flex-col items-center border border-neutral-300 px-2 py-6 text-center">
                        <TikTokIcon className="h-5 w-5 text-neutral-500" />
                        <p className="mt-3 text-[10px] uppercase tracking-wider text-neutral-500">
                            TikTok
                        </p>
                        <p className="mt-1.5 text-xs leading-tight text-neutral-700">@bellamassa</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacto