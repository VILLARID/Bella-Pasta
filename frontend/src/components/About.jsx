import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import aboutImage from '../assets/About/aboutImage.jpg'

function About() {
    return (
        <section className="mt-20 flex flex-col px-6 pb-12 lg:grid lg:grid-cols-2 lg:bg-[#f8f4ec] lg:px-0 lg:py-28">
            <div className="relative lg:hidden">
                <img
                    src={aboutImage}
                    alt="Fotografía de nuestra pizzería"
                    className="w-full object-cover"
                />
            </div>

            <div className="flex items-center bg-[#f8f4ec] lg:pl-16 lg:pr-14 xl:pl-24 xl:pr-20">
                <div className="w-full pb-12 pt-10 lg:max-w-lg lg:py-24">
                    <p className="mt-8 text-xs uppercase tracking-wide text-[#800020] lg:mt-0 lg:font-body">
                        Nuestra esencia
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold leading-snug text-neutral-900 lg:mt-5 lg:text-5xl lg:leading-tight">
                        Hecha con calma.
                        <br />
                        Disfrutada sin prisa.
                    </h2>
                    <p className="mt-4 text-neutral-600 lg:mt-7 lg:font-body lg:text-base lg:leading-relaxed">
                        En Bella Massa creemos que una buena pizza comienza con una buena masa.
                        Seleccionamos nuestros ingredientes, respetamos los tiempos y cuidamos cada
                        detalle para llevar a la mesa una pizza sencilla, auténtica y llena de sabor.
                    </p>
                    <Link
                        to="/nosotros"
                        className="mt-6 flex w-3/4 items-center justify-center gap-2 border border-neutral-400 py-3 text-center text-neutral-700 lg:mt-9 lg:inline-flex lg:w-auto lg:px-8 lg:font-body lg:text-sm">
                        Conoce nuestra historia
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>

            <div className="relative hidden bg-[#f8f4ec] lg:block">
                <img
                    src={aboutImage}
                    alt="Preparación artesanal de la masa en Bella Massa"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
        </section>
    )
}

export default About;