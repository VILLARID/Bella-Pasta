import interiorImage from '../assets/Experiencia/interiorImage.jpg'
import hornoImage from '../assets/Experiencia/hornoImage.jpg'
import localImage from '../assets/Experiencia/localImage.jpg'
import chefImage from '../assets/Experiencia/chefImage.jpg'

function Experiencia() {
    return (
        <section className="bg-[#f3efe8] px-6 py-16 lg:px-20 lg:py-24 xl:px-32">
            <div className="flex items-center gap-4">
                <p className="shrink-0 font-body text-[10px] uppercase tracking-[0.3em] text-[#800020]">
                    Experiencia
                </p>
                <span className="h-px flex-1 bg-[#C5A880]/40" />
            </div>
            <h2 className="mt-4 font-serif-display text-3xl font-semibold leading-snug text-[#2b241c] lg:text-4xl">
                Más que una pizza.
            </h2>

            <div className="mt-12 flex flex-col gap-10 lg:mt-14 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-10 lg:gap-y-20">
                <figure className="lg:col-span-5 lg:mt-24">
                    <img
                        src={chefImage}
                        alt="Preparación artesanal de la masa"
                        className="aspect-[4/3] w-full object-cover lg:aspect-square"
                    />
                    <figcaption className="mt-3 flex items-center gap-3">
                        <span className="font-serif-display text-sm text-[#800020]">01</span>
                        <span className="h-px w-6 bg-[#C5A880]/60" />
                        <span className="font-body text-[10px] uppercase tracking-[0.15em] text-neutral-600">
                            Preparación artesanal de la masa
                        </span>
                    </figcaption>
                </figure>

                <figure className="lg:col-span-7">
                    <img
                        src={hornoImage}
                        alt="Horno de leña"
                        className="aspect-[4/3] w-full object-cover lg:aspect-[4/3]"
                    />
                    <figcaption className="mt-3 flex items-center gap-3">
                        <span className="font-serif-display text-sm text-[#800020]">02</span>
                        <span className="h-px w-6 bg-[#C5A880]/60" />
                        <span className="font-body text-[10px] uppercase tracking-[0.15em] text-neutral-600">
                            Horno de leña
                        </span>
                    </figcaption>
                </figure>

                <figure className="lg:col-span-6 lg:order-last lg:-mt-16">
                    <img
                        src={localImage}
                        alt="Pizza recién salida del horno"
                        className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
                    />
                    <figcaption className="mt-3 flex items-center gap-3">
                        <span className="font-serif-display text-sm text-[#800020]">03</span>
                        <span className="h-px w-6 bg-[#C5A880]/60" />
                        <span className="font-body text-[10px] uppercase tracking-[0.15em] text-neutral-600">
                            Pizza recién salida del horno
                        </span>
                    </figcaption>
                </figure>

                <figure className="lg:col-span-6 lg:mt-24">
                    <img
                        src={interiorImage}
                        alt="Interior de Bella Massa"
                        className="aspect-[4/3] w-full object-cover lg:aspect-square"
                    />
                    <figcaption className="mt-3 flex items-center gap-3">
                        <span className="font-serif-display text-sm text-[#800020]">04</span>
                        <span className="h-px w-6 bg-[#C5A880]/60" />
                        <span className="font-body text-[10px] uppercase tracking-[0.15em] text-neutral-600">
                            Interior de Bella Massa
                        </span>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}

export default Experiencia