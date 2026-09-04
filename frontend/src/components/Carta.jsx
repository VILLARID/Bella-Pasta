import PizzaList from './PizzaList'
import Bebidas from './Bebidas'

function Carta() {
    return (
        <section className="bg-white">
            <div className="flex flex-col items-start bg-[#f3efe8] px-6 py-24">
                <p className="text-xs uppercase tracking-wide text-[#800020]">
                    Menú
                </p>
                <h1 className="mt-3 text-4xl font-semibold">
                    Nuestra Carta
                </h1>
                <p className="mt-4 text-neutral-600">
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
        </section>
    )
}

export default Carta