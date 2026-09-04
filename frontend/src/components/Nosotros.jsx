import aboutImage from '../assets/About/aboutImage.jpg'
import Valores from './Valores'

function Nosotros() {
    return (
        <section className="bg-white">
            <div className="flex flex-col items-start px-6 py-16">
                <p className="text-xs uppercase tracking-wide text-[#800020]">
                    Quiénes somos
                </p>
                <h1 className="mt-3 text-4xl font-semibold leading-tight">
                    Más que
                    <br />
                    una pizzería.
                </h1>
            </div>

            <div className="relative">
                <img
                    src={aboutImage}
                    alt="Preparación artesanal de la masa en Bella Massa"
                    className="w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-[#f3efe8]/90 px-3 py-2 text-xs font-semibold text-neutral-700">
                    Preparación artesanal de la masa en Bella Massa
                </div>
            </div>

            <div className="px-6 py-14">
                <h2 className="text-3xl font-semibold leading-snug">
                    Hecha con calma.
                    <br />
                    Disfrutada sin prisa.
                </h2>
                <p className="mt-5 leading-relaxed text-neutral-600">
                    En Bella Massa creemos que una buena pizza comienza con una buena masa.
                    Seleccionamos nuestros ingredientes, respetamos los tiempos y cuidamos
                    cada detalle para llevar a la mesa una pizza sencilla, auténtica y llena
                    de sabor.
                </p>
                <p className="mt-4 leading-relaxed text-neutral-600">
                    Nacimos en Miraflores con la convicción de que la pizza es un arte que
                    merece tiempo, dedicación y los mejores ingredientes. Cada hornada es una
                    oportunidad de hacerlo mejor.
                </p>
            </div>

            <Valores />
        </section>
    )
}

export default Nosotros