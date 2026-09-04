import { Link } from 'react-router-dom'
import margheritaImage from '../assets/Menu/margheritaImage.jpg'
import pepperoniImage from '../assets/Menu/pepperoniImage.jpg'
import prosciuttoImage from '../assets/Menu/prosciuttoImage.jpg'
import formaggiImage from '../assets/Menu/formaggiImage.jpg'
import diavolaImage from '../assets/Menu/diavolaImage.jpg'
import favoriteImage from '../assets/Favorite/favoriteImage.jpg'

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
    {
        image: formaggiImage,
        name: 'Quattro Formaggi',
        price: 'S/ 42',
        description:
            'Mozzarella, parmesano reggiano, gorgonzola y provolone.',
    },
    {
        image: diavolaImage,
        name: 'Diavola',
        price: 'S/ 40',
        description: 'Tomate, mozzarella, salami piccante y un toque de aceite de oliva.',
    },
    {
        image: favoriteImage,
        name: 'Bella Massa',
        price: 'S/ 52',
        description:
            'Masa madre, tomate San Marzano, burrata fresca, prosciutto cotto y albahaca del huerto.',
    },
]

function PizzaList({ showDetails = false }) {
    return (
        <div className="flex flex-col gap-14">
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
                    {showDetails && (
                        <Link
                            to="#"
                            className="mt-5 flex items-center justify-center gap-2 border border-neutral-400 py-2 text-neutral-700">
                            Ver detalles
                        </Link>
                    )}
                </article>
            ))}
        </div>
    )
}

export default PizzaList;