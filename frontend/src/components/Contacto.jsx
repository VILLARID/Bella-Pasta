import { ArrowRight } from 'lucide-react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { useEffect } from 'react'
import L from 'leaflet'
import AvisoDelivery from './AvisoDelivery'
import 'leaflet/dist/leaflet.css'

function EnableOnClick() {
    const map = useMap()

    useEffect(() => {
        map.dragging.disable()
        map.scrollWheelZoom.disable()
        const enable = () => map.dragging.enable()
        map.on('click', enable)
        return () => {
            map.off('click', enable)
        }
    }, [map])

    return null
}

const bellaMassaPin = L.divIcon({
    className: '',
    html: '<svg viewBox="0 0 24 24" width="36" height="36"><path fill="#800020" d="M12 0C7 0 3 4 3 9c0 6.5 9 15 9 15s9-8.5 9-15c0-5-4-9-9-9z"/><circle cx="12" cy="9" r="4" fill="#f3efe8"/></svg>',
    iconSize: [36, 36],
    iconAnchor: [18, 36],
})

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

const info = [
    {
        label: 'Dirección',
        values: ['Av. La Mar 459, Miraflores', 'Lima, Perú'],
    },
    {
        label: 'Horarios',
        values: ['Lun – Jue: 12:00 – 22:00', 'Vie – Sáb: 12:00 – 23:00', 'Dom: 12:00 – 21:00'],
    },
    {
        label: 'Teléfono',
        values: ['+51 1 234 5678'],
    },
    {
        label: 'Instagram',
        values: ['@bellamassa.pe'],
    },
]

function Contacto() {
    return (
        <section className="bg-[#f3efe8]">
            <div className="px-6 pb-10 pt-16 lg:px-20 lg:pb-12 lg:pt-24 xl:px-32">
                <p className="font-body text-[10px] font-medium uppercase tracking-[0.3em] text-[#800020]">
                    Encuéntranos
                </p>
                <h1 className="mt-5 font-serif-display text-4xl font-medium leading-[1.15] text-[#2b241c] lg:text-6xl">
                    Te esperamos en{' '}
                    <em className="italic text-[#800020]">Bella Massa.</em>
                </h1>
                <div className="mt-8 flex items-center gap-3">
                    <span className="h-px w-12 bg-[#C5A880]/50" />
                    <span className="h-1.5 w-1.5 rotate-45 bg-[#C5A880]" />
                    <span className="h-px flex-1 bg-[#C5A880]/20" />
                </div>
            </div>

            <div className="px-6 lg:grid lg:grid-cols-12 lg:gap-16 lg:px-20 lg:py-8 xl:px-32">
                <div className="flex flex-col lg:col-span-5">
                    {info.map((block) => (
                        <div
                            key={block.label}
                            className="flex flex-col border-t border-[#C5A880]/20 py-8 first:border-t-0 first:pt-0 lg:py-10">
                            <div className="flex items-center gap-3">
                                <span className="h-1 w-1 rotate-45 bg-[#C5A880]" />
                                <p className="font-body text-[10px] font-medium uppercase tracking-[0.3em] text-[#800020]">
                                    {block.label}
                                </p>
                            </div>
                            <div className="mt-4 flex flex-col gap-1">
                                {block.values.map((value) => (
                                    <p
                                        key={value}
                                        className="font-serif-display text-lg font-normal text-[#3b3329] lg:text-[1.35rem]">
                                        {value}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}

                    <a
                        href="https://maps.google.com/?q=Av.+La+Mar+459,+Miraflores,+Lima"
                        target="_blank"
                        rel="noreferrer"
                        className="group mt-4 flex w-max items-center gap-3 bg-[#2b241c] px-8 py-3.5 text-white transition-colors hover:bg-[#800020]">
                        Cómo llegar
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>

                <div className="mt-12 lg:col-span-7 lg:mt-0">
                    <div className="border border-[#C5A880]/40 p-2 lg:p-3">
                        <div className="map-cream relative z-0 h-72 w-full lg:h-[440px]">
                            <MapContainer
                                center={[-12.1224, -77.0306]}
                                zoom={16}
                                dragging={false}
                                className="z-0 h-full w-full">
                                <EnableOnClick />
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[-12.1224, -77.0306]} icon={bellaMassaPin}>
                                    <Popup>Bella Massa · Miraflores</Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>
                    <p className="mt-4 flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rotate-45 bg-[#C5A880]" />
                        <span className="font-body text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                            Parque Kennedy · Miraflores
                        </span>
                    </p>
                </div>
            </div>

            <div className="px-6 py-16 lg:px-20 lg:py-24 xl:px-32">
                <div className="flex items-center gap-4">
                    <p className="shrink-0 font-body text-[10px] font-bold uppercase tracking-[0.3em] text-[#800020]">
                        Síguenos
                    </p>
                    <span className="h-px flex-1 bg-[#C5A880]/40" />
                </div>

                <div className="mt-8 grid grid-cols-3 border border-[#C5A880]/30">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex flex-col items-center gap-3 py-8 transition-colors hover:bg-white lg:py-10">
                        <span className="flex h-11 w-11 items-center justify-center border border-neutral-400 text-neutral-500 transition-colors group-hover:border-[#800020] group-hover:text-[#800020] lg:h-12 lg:w-12">
                            <InstagramIcon className="h-5 w-5" />
                        </span>
                        <span className="font-body text-[9px] uppercase tracking-[0.25em] text-neutral-500">
                            Instagram
                        </span>
                        <span className="font-body text-xs text-[#2b241c]">@bellamassa.pe</span>
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex flex-col items-center gap-3 border-x border-[#C5A880]/30 py-8 transition-colors hover:bg-white lg:py-10">
                        <span className="flex h-11 w-11 items-center justify-center border border-neutral-400 text-neutral-500 transition-colors group-hover:border-[#800020] group-hover:text-[#800020] lg:h-12 lg:w-12">
                            <FacebookIcon className="h-5 w-5" />
                        </span>
                        <span className="font-body text-[9px] uppercase tracking-[0.25em] text-neutral-500">
                            Facebook
                        </span>
                        <span className="font-body text-xs text-[#2b241c]">Bella Massa</span>
                    </a>
                    <a
                        href="https://tiktok.com"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex flex-col items-center gap-3 py-8 transition-colors hover:bg-white lg:py-10">
                        <span className="flex h-11 w-11 items-center justify-center border border-neutral-400 text-neutral-500 transition-colors group-hover:border-[#800020] group-hover:text-[#800020] lg:h-12 lg:w-12">
                            <TikTokIcon className="h-5 w-5" />
                        </span>
                        <span className="font-body text-[9px] uppercase tracking-[0.25em] text-neutral-500">
                            TikTok
                        </span>
                        <span className="font-body text-xs text-[#2b241c]">@bellamassa</span>
                    </a>
                </div>
            </div>

            <AvisoDelivery />
        </section>
    )
}

export default Contacto