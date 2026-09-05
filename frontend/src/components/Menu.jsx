import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PizzaList from './PizzaList'

function Menu() {
    return (
        <section className="mt-20 flex flex-col px-6 lg:px-16 xl:px-24" id="carta">
            <div className="lg:flex lg:items-end lg:justify-between">
                <div>
                    <p className="text-xs uppercase tracking-wide text-[#800020] lg:font-body">
                        Pizzas
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold leading-snug text-neutral-900 lg:text-5xl lg:leading-tight">
                        Nuestra carta
                    </h2>
                </div>
                <p className="mt-4 text-neutral-600 lg:mt-0 lg:max-w-xs lg:text-right lg:font-body lg:text-sm lg:tracking-wide lg:text-neutral-500">
                    Clásicos italianos y creaciones de Bella Massa.
                </p>
            </div>
            <div className="mt-12">
                <PizzaList limit={3} />
            </div>
            <div className="mt-12 flex justify-center lg:mt-16">
                <Link
                    to="/carta"
                    className="flex w-3/4 items-center justify-center gap-2 border border-neutral-400 py-3 text-center text-neutral-700 lg:w-auto lg:px-10 lg:font-body lg:text-sm">
                    Ver carta completa
                    <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </section>
    )
}

export default Menu;