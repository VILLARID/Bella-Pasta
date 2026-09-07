import aboutImage from '../assets/About/aboutImage.jpg'
import Valores from './Valores'
import Stats from './Stats'
import Experiencia from './Experiencia'
import CtaCarta from './CtaCarta'
import { motion } from 'framer-motion'

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
}

function Nosotros() {
    return (
        <section className="bg-white">
            <motion.div {...fadeUp} className="px-6 pt-16 lg:px-20 lg:pt-24 xl:px-32">
                <p className="font-body text-xs uppercase tracking-[0.3em] text-[#800020]">
                    Quiénes somos
                </p>
                <h1 className="mt-4 font-serif-display text-5xl font-bold leading-[1.05] text-neutral-900 lg:text-7xl">
                    Más que
                    <br />
                    una pizzería.
                </h1>
            </motion.div>

            <motion.div
                {...fadeUp}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="grid gap-10 px-6 py-14 lg:grid-cols-12 lg:gap-16 lg:px-20 lg:py-24 xl:px-32">
                <div className="relative self-start lg:col-span-5">
                    <img
                        src={aboutImage}
                        alt="Preparación artesanal de la masa en Bella Massa"
                        className="aspect-[4/3] w-full object-cover lg:aspect-[3/4]"
                    />
                    <div className="absolute bottom-4 left-4 bg-[#f3efe8]/90 px-3 py-2 text-xs font-medium text-neutral-700">
                        Preparación artesanal de la masa en Bella Massa
                    </div>
                </div>

                <div className="lg:col-span-7 lg:pt-10">
                    <h2 className="font-serif-display text-4xl font-semibold leading-snug text-neutral-900 lg:text-5xl">
                        Hecha con calma.
                        <br />
                        <em className="text-[#800020]">Disfrutada sin prisa.</em>
                    </h2>
                    <p className="mt-7 text-[15px] leading-7 text-[#444] lg:font-body">
                        En Bella Massa creemos que una buena pizza comienza con una buena masa.
                        Seleccionamos nuestros ingredientes, respetamos los tiempos y cuidamos
                        cada detalle para llevar a la mesa una pizza sencilla, auténtica y llena
                        de sabor.
                    </p>
                    <p className="mt-5 text-[15px] leading-7 text-[#444] lg:font-body">
                        Nacimos en Miraflores con la convicción de que la pizza es un arte que
                        merece tiempo, dedicación y los mejores ingredientes. Cada hornada es una
                        oportunidad de hacerlo mejor.
                    </p>
                </div>
            </motion.div>

            <Valores />
            <Stats />
            <Experiencia />
            <CtaCarta />
        </section>
    )
}

export default Nosotros