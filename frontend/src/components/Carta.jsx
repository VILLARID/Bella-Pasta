import PizzaList from './PizzaList'
import Bebidas from './Bebidas'
import Aviso from './Aviso'

function Carta() {
    return (
        <section className="bg-white">
            <div className="flex flex-col items-start bg-[#f3efe8] px-6 py-16 lg:px-16 lg:py-28 xl:px-24">
                <p className="text-xs uppercase tracking-[0.25em] text-[#800020] lg:font-body">
                    Menú
                </p>
                <h1 className="mt-3 text-4xl font-semibold text-neutral-900 lg:mt-5 lg:text-6xl xl:text-7xl">
                    Nuestra Carta
                </h1>
                <div className="mt-5 hidden items-center gap-3 lg:flex">
                    <span className="h-px w-12 bg-[#C5A880]" />
                    <span className="h-1.5 w-1.5 rotate-45 bg-[#C5A880]" />
                    <span className="h-px w-12 bg-[#C5A880]" />
                </div>
                <p className="mt-4 max-w-md text-neutral-600 lg:mt-6 lg:font-body lg:text-base lg:tracking-wide">
                    Clásicos italianos y creaciones de Bella Massa.
                </p>
            </div>
            <div className="flex items-center gap-4 px-6 pt-16">
                <h2 className="shrink-0 text-3xl font-semibold">Pizzas</h2>
                <span className="flex-1 border-t border-neutral-300" />
            </div>
            <div className="px-6 pt-12">
                <PizzaList showDetails />
            </div>
            <Bebidas />
            <Aviso />
        </section>
    )
}

export default Carta