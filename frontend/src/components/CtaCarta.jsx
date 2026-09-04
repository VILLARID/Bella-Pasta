import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function CtaCarta() {
    return (
        <section className="bg-[#e9dfcb] px-6 py-16">
            <h2 className="text-center text-3xl font-semibold leading-snug">
                ¿Lista para probar nuestra carta?
            </h2>
            <div className="mt-6 flex justify-center">
                <Link
                    to="/carta"
                    className="flex items-center gap-2 bg-[#800020] px-8 py-3 text-white">
                    Ver nuestra carta
                    <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </section>
    )
}

export default CtaCarta