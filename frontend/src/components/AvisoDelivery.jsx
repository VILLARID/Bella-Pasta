import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function AvisoDelivery() {
    return (
        <section className="-mx-6 bg-[#e9dfcb] py-6">
            <p className="text-center text-sm leading-relaxed text-neutral-700">
                No hacemos delivery. Creemos en la experiencia completa: venir,
                sentarse y disfrutar una pizza recién salida del horno.
            </p>
            <div className="mt-4 px-6">
                <Link
                    to="/carta"
                    className="flex w-full items-center justify-center gap-2 border border-neutral-400 px-6 py-3 text-neutral-700">
                    Ver nuestra carta
                    <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </section>
    )
}

export default AvisoDelivery