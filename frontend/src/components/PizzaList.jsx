import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import margheritaImage from '../assets/Menu/margheritaImage.jpg'
import pepperoniImage from '../assets/Menu/pepperoniImage.jpg'
import prosciuttoImage from '../assets/Menu/prosciuttoImage.jpg'
import formaggiImage from '../assets/Menu/formaggiImage.jpg'
import diavolaImage from '../assets/Menu/diavolaImage.jpg'
import favoriteImage from '../assets/Favorite/favoriteImage.jpg'
import PizzaModal from './PizzaModal'

const pizzas = [
    {
        image: margheritaImage,
        name: 'Margherita',
        price: 'S/ 32',
        description:
            'Tomate San Marzano, mozzarella fior di latte, albahaca fresca y aceite de oliva.',
        story:
            'La más pura de nuestra casa. Nacida en honor a la reina Margherita de Saboya, se sirve con tomates San Marzano cosechados en la llanura del Vesubio y mozzarella fior di latte de Nápoles.',
        ingredients: [
            'Tomate San Marzano',
            'Mozzarella fior di latte',
            'Albahaca fresca',
            'Aceite de oliva',
        ],
    },
    {
        image: pepperoniImage,
        name: 'Pepperoni',
        price: 'S/ 38',
        description: 'Tomate, mozzarella cremosa y pepperoni artesanal.',
        story:
            'Un clásico con carácter. El pepperoni se corta fino para que sus bordes se curven y se doren en el horno, liberando un aroma ahumado sobre una base de mozzarella cremosa.',
        ingredients: ['Tomate', 'Mozzarella cremosa', 'Pepperoni artesanal'],
    },
    {
        image: prosciuttoImage,
        name: 'Prosciutto',
        price: 'S/ 44',
        description: 'Tomate, mozzarella, prosciutto crudo di Parma y rúcula fresca.',
        story:
            'Elegancia en cada bocado. Tras el horneado añadimos las lonjas de prosciutto crudo di Parma y la rúcula fresca, para que conserven su textura y matices.',
        ingredients: [
            'Tomate',
            'Mozzarella',
            'Prosciutto crudo di Parma',
            'Rúcula fresca',
        ],
    },
    {
        image: formaggiImage,
        name: 'Quattro Formaggi',
        price: 'S/ 42',
        description:
            'Mozzarella, parmesano reggiano, gorgonzola y provolone.',
        story:
            'Cuatro quesos que dialogan entre sí. El gorgonzola aporta profundidad, el parmesano reggiano un punto salado y el provolone un toque ligeramente ahumado.',
        ingredients: [
            'Mozzarella',
            'Parmesano Reggiano',
            'Gorgonzola',
            'Provolone',
        ],
    },
    {
        image: diavolaImage,
        name: 'Diavola',
        price: 'S/ 40',
        description: 'Tomate, mozzarella, salami piccante y un toque de aceite de oliva.',
        story:
            'Fuego y equilibrio. El salami piccante se calma con la dulzura del tomate y el aceite de oliva, una combinación intensa para paladares atrevidos.',
        ingredients: ['Tomate', 'Mozzarella', 'Salami piccante', 'Aceite de oliva'],
    },
    {
        image: favoriteImage,
        name: 'Bella Massa',
        price: 'S/ 52',
        description:
            'Masa madre, tomate San Marzano, burrata fresca, prosciutto cotto y albahaca del huerto.',
        story:
            'Nuestra casa en un plato. Una masa madre de fermentación lenta que corona la burrata fresca, deshecha en el centro, con prosciutto cotto y albahaca de nuestro huerto.',
        ingredients: [
            'Masa madre',
            'Tomate San Marzano',
            'Burrata fresca',
            'Prosciutto cotto',
            'Albahaca del huerto',
        ],
    },
]

function PizzaList({ showDetails = false }) {
    const [selectedPizza, setSelectedPizza] = useState(null)

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
                        <button
                            onClick={() => setSelectedPizza(pizza)}
                            className="mt-5 flex items-center justify-center gap-2 border border-neutral-400 py-2 text-neutral-700">
                            Ver detalles
                        </button>
                    )}
                </article>
            ))}
            <AnimatePresence>
                {selectedPizza && (
                    <PizzaModal pizza={selectedPizza} onClose={() => setSelectedPizza(null)} />
                )}
            </AnimatePresence>
        </div>
    )
}

export default PizzaList;