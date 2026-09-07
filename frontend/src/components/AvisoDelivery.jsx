import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function AvisoDelivery() {
    return (
        <section className="bg-[#121212] px-6 py-16 lg:py-20">
            <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-3">
                    <span className="h-px w-10 bg-[#C5A880]/50" />
                    <span className="h-1.5 w-1.5 rotate-45 bg-[#C5A880]" />
                    <span className="h-px w-10 bg-[#C5A880]/50" />
                </div>
                <p className="mt-6 font-body text-[10px] uppercase tracking-[0.3em] text-[#C5A880]">
                    La experiencia Bella Massa
                </p>
                <h2 className="mt-4 font-serif-display text-3xl font-semibold text-white lg:text-4xl">
                    No hacemos delivery.
                </h2>
                <p className="mt-5 max-w-md font-body text-sm leading-[1.7] text-neutral-400 lg:text-[15px]">
                    Creemos en la experiencia completa: venir, sentarse y disfrutar una pizza
                    recién salida del horno.
                </p>
                <Link
                    to="/carta"
                    className="group mt-9 inline-flex items-center gap-3 border border-[#C5A880] px-9 py-3 text-[#C5A880] transition-all duration-500 ease-out hover:border-[#800020] hover:bg-[#800020] hover:text-white">
                    Ver nuestra carta
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>
        </section>
    )
}

export default AvisoDelivery