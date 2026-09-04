import { ArrowRight } from 'lucide-react'
import aboutImage from '../assets/About/aboutImage.jpg'

function About() {
    return (
        <section className="mt-20 flex flex-col px-6">
            <img
                src={aboutImage}
                alt="Fotografía de nuestra pizzería"
                className="w-full object-cover"
            />
            <p className="mt-8 text-xs uppercase tracking-wide text-[#800020]">
                Nuestra esencia
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-snug">
                Hecha con calma.
                <br />
                Disfrutada sin prisa.
            </h2>
            <p className="mt-4 text-neutral-600">
                En Bella Massa creemos que una buena pizza comienza con una buena masa.
                Seleccionamos nuestros ingredientes, respetamos los tiempos y cuidamos cada
                detalle para llevar a la mesa una pizza sencilla, auténtica y llena de sabor.
            </p>
            <a
                href="#historia"
                className="mt-6 flex w-3/4 items-center justify-center gap-2 border border-neutral-400 py-3 text-center text-neutral-700">
                Conoce nuestra historia
                <ArrowRight className="h-4 w-4" />
            </a>
        </section>
    )
}

export default About;
