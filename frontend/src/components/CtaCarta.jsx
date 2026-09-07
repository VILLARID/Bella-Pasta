import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function CtaCarta() {
    return (
        <section className="bg-[#e9dfcb] px-6 py-16 lg:px-20 lg:py-24 xl:px-32">
            <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-3">
                    <span className="h-px w-10 bg-[#C5A880]/60" />
                    <span className="h-1.5 w-1.5 rotate-45 bg-[#C5A880]" />
                    <span className="h-px w-10 bg-[#C5A880]/60" />
                </div>
                <h2 className="mt-6 font-serif-display text-3xl font-semibold leading-snug text-[#2b241c] lg:text-5xl">
                    ¿Lista para probar
                    <br />
                    nuestra carta?
                </h2>
                <p className="mt-5 max-w-md font-body text-sm leading-relaxed text-neutral-600 lg:text-[15px]">
                    Cada pizza sale del horno a 450° y llega a tu mesa en su punto exacto.
                </p>
                <Link
                    to="/carta"
                    className="group mt-9 inline-flex items-center gap-3 bg-[#800020] px-10 py-3.5 text-white transition-colors hover:bg-[#5c0017]">
                    Ver nuestra carta
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>
        </section>
    )
}

export default CtaCarta