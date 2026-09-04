import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PizzaList from './PizzaList'

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
            <div className="mt-12">
                <PizzaList />
            </div>
            <Link
                to="/carta"
                className="mt-12 flex w-3/4 items-center justify-center gap-2 bg-black py-3 text-center text-white">
                Ver carta completa
                <ArrowRight className="h-4 w-4" />
            </Link>
        </section>
    )
}

export default Menu;