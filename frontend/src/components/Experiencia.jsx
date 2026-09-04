import interiorImage from '../assets/Experiencia/interiorImage.jpg'
import hornoImage from '../assets/Experiencia/hornoImage.jpg'
import localImage from '../assets/Experiencia/localImage.jpg'
import chefImage from '../assets/Experiencia/chefImage.jpg'

const photos = [
    { image: interiorImage, label: 'Interior de Bella Massa' },
    { image: hornoImage, label: 'Horno de leña' },
    { image: chefImage, label: 'Preparación artesanal de la masa' },
    { image: localImage, label: 'Pizza recién salida del horno' },
]

function Experiencia() {
    return (
        <section className="bg-[#f3efe8] px-6 py-16">
            <p className="text-xs uppercase tracking-wide text-[#800020]">
                Experiencia
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-snug">
                Más que una pizza.
            </h2>

            <div className="mt-10 flex flex-col gap-10">
                {photos.map((photo, index) => (
                    <figure key={photo.label} className="flex flex-col">
                        <img
                            src={photo.image}
                            alt={photo.label}
                            className="aspect-[4/3] w-full object-cover"
                        />
                        <div className="mt-3 flex items-center gap-3">
                            <span className="font-serif-display text-sm text-[#C5A880]">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <span className="h-px w-8 bg-[#C5A880]/60" />
                            <figcaption className="text-xs uppercase tracking-wide text-neutral-600">
                                {photo.label}
                            </figcaption>
                        </div>
                    </figure>
                ))}
            </div>
        </section>
    )
}

export default Experiencia