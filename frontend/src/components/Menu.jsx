import { ArrowRight } from 'lucide-react'
import margheritaImage from '../assets/Menu/margheritaImage.jpg'
import pepperoniImage from '../assets/Menu/pepperoniImage.jpg'
import prosciuttoImage from '../assets/Menu/prosciuttoImage.jpg'

const pizzas = [
    {
        image: margheritaImage,
        name: 'Margherita',
        price: 'S/ 32',
        description:
            'Tomate San Marzano, mozzarella fior di latte, albahaca fresca y aceite de oliva.',
    },
    {
        image: pepperoniImage,
        name: 'Pepperoni',
        price: 'S/ 38',
        description: 'Tomate, mozzarella cremosa y pepperoni artesanal.',
    },
    {
        image: prosciuttoImage,
        name: 'Prosciutto',
        price: 'S/ 44',
        description: 'Tomate, mozzarella, prosciutto crudo di Parma y rúcula fresca.',
    },
]

function Menu() {
    return (
        <section className="mt-20 flex flex-col px-6" id="carta">
            <p className="text-xs uppercase tracking-wide text-[#800020]">
                Pizzas
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-snug">
                Nuestra carta
            </h2>
            <p className="mt-4 text-neutral-600">
                Clásicos italianos y creaciones de Bella Massa.
            </p>
            <div className="mt-12 flex flex-col gap-14">
                {pizzas.map((pizza) => (
                    <article key={pizza.name} className="flex flex-col">
                        <img
                            src={pizza.image}
                            alt={pizza.name}
                            className="aspect-[4/3] w-full object-cover"
                        />
                        <div className="mt-5 flex items-center justify-between gap-4">
                            <h3 className="shrink-0 text-2xl font-semibold">{pizza.name}</h3>
                            <span className="flex-1 border-b border-dotted border-neutral-300" />
                            <p className="shrink-0 text-2xl text-[#800020]">{pizza.price}</p>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                            {pizza.description}
                        </p>
                    </article>
                ))}
            </div>
            <a
                href="#carta-completa"
                className="mt-12 flex w-3/4 items-center justify-center gap-2 bg-black py-3 text-center text-white">
                Ver carta completa
                <ArrowRight className="h-4 w-4" />
            </a>
        </section>
    )
}

export default Menu;
