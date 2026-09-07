import { useState } from 'react'
import interiorImage from '../assets/Experiencia/interiorImage.jpg'
import hornoImage from '../assets/Experiencia/hornoImage.jpg'
import localImage from '../assets/Experiencia/localImage.jpg'
import chefImage from '../assets/Experiencia/chefImage.jpg'

const photos = [
    {
        image: chefImage,
        label: 'Preparación artesanal de la masa',
        title: 'El oficio de la masa',
        text: 'Fermentación lenta de 48 horas y manos expertas que dan forma a cada base con paciencia y precisión.',
    },
    {
        image: hornoImage,
        label: 'Horno de leña',
        title: 'Fuego vivo a 450°',
        text: 'Nuestro horno de leña alcanza los 450°C para lograr el borde ahumado y la base perfecta en minutos.',
    },
    {
        image: localImage,
        label: 'Pizza recién salida del horno',
        title: 'El momento justo',
        text: 'La pizza llega a la mesa recién salida, con su aroma en plenitud y el queso en su punto exacto.',
    },
    {
        image: interiorImage,
        label: 'Interior de Bella Massa',
        title: 'Un rincón en Miraflores',
        text: 'Un espacio cálido pensado para disfrutar sin prisa cada bocado, entre luz tenue y buena compañía.',
    },
]

function FlipCard({ photo, index, figureClass, imgClass }) {
    const [flipped, setFlipped] = useState(false)

    return (
        <figure
            className={`${figureClass} cursor-pointer`}
            style={{ perspective: '1200px' }}
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}>
            <div
                className="relative aspect-[4/3] w-full"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    transition: 'transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
                }}>
                <img
                    src={photo.image}
                    alt={photo.label}
                    className={`absolute inset-0 h-full w-full object-cover ${imgClass}`}
                    style={{ backfaceVisibility: 'hidden' }}
                />
                <div
                    className="absolute inset-0 bg-[#f3efe8]"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <div className="flex h-full flex-col justify-between border-[3px] border-[#C5A880]/45 bg-[#f3efe8] p-5">
                        <div className="flex items-center justify-between">
                            <p className="font-body text-[9px] uppercase tracking-[0.3em] text-[#800020]">
                                {String(index + 1).padStart(2, '0')} · Bella Massa
                            </p>
                            <span className="h-1.5 w-1.5 rotate-45 bg-[#C5A880]" />
                        </div>
                        <div>
                            <h3 className="font-serif-display text-2xl font-semibold leading-tight text-[#2b241c] lg:text-[1.7rem]">
                                {photo.title}
                            </h3>
                            <div className="mt-4 flex items-center gap-3">
                                <span className="h-px flex-1 bg-[#C5A880]/50" />
                                <span className="h-1 w-1 rotate-45 bg-[#C5A880]" />
                                <span className="h-px flex-1 bg-[#C5A880]/50" />
                            </div>
                            <p className="mt-4 font-body text-[12px] leading-[1.7] text-[#666]">
                                {photo.text}
                            </p>
                        </div>
                        <p className="font-body text-[9px] uppercase tracking-[0.25em] text-neutral-500">
                            {photo.label}
                        </p>
                    </div>
                </div>
            </div>
            <figcaption className="mt-3 flex items-center gap-3">
                <span className="font-serif-display text-sm text-[#800020]">
                    {String(index + 1).padStart(2, '0')}
                </span>
                <span className="h-px w-6 bg-[#C5A880]/60" />
                <span className="font-body text-[10px] uppercase tracking-[0.15em] text-neutral-600">
                    {photo.label}
                </span>
            </figcaption>
        </figure>
    )
}

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
                <FlipCard
                    photo={photos[0]}
                    index={0}
                    figureClass="lg:col-span-5 lg:mt-24"
                    imgClass="lg:aspect-square"
                />
                <FlipCard
                    photo={photos[1]}
                    index={1}
                    figureClass="lg:col-span-7"
                    imgClass="lg:aspect-[4/3]"
                />
                <FlipCard
                    photo={photos[2]}
                    index={2}
                    figureClass="lg:col-span-6 lg:order-last lg:-mt-16"
                    imgClass="lg:aspect-[4/5]"
                />
                <FlipCard
                    photo={photos[3]}
                    index={3}
                    figureClass="lg:col-span-6 lg:mt-24"
                    imgClass="lg:aspect-square"
                />
            </div>
        </section>
    )
}

export default Experiencia