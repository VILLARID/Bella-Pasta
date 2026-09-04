const drinks = [
    { category: 'Agua', name: 'Agua mineral', price: 'S/ 8' },
    { category: 'Italiana', name: 'San Pellegrino', price: 'S/ 14' },
    { category: 'De la casa', name: 'Limonada artesanal', price: 'S/ 18' },
    { category: 'Gaseosa', name: 'Coca-Cola', price: 'S/ 10' },
    { category: 'Gaseosa', name: 'Inca Kola', price: 'S/ 10' },
    { category: 'Jugos', name: 'Jugo de naranja', price: 'S/ 16' },
]

function Bebidas() {
    return (
        <section className="mt-20 bg-[#121212] px-6 py-16">
            <p className="text-xs uppercase tracking-wide text-[#C5A880]">
                Para acompañar
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-snug text-white">
                Bebidas
            </h2>

            <div className="mt-10 grid grid-cols-2 overflow-hidden border border-neutral-700">
                {drinks.map((drink, index) => (
                    <div
                        key={drink.name}
                        className={`flex aspect-square flex-col items-start justify-between p-5 ${
                            index % 2 === 1 ? 'border-l border-neutral-700' : ''
                        } ${
                            index > 1 ? 'border-t border-neutral-700' : ''
                        }`}>
                        <p className="text-xs uppercase tracking-wider text-[#C5A880]">
                            {drink.category}
                        </p>

                        <p className="font-serif-display text-2xl font-semibold leading-snug text-white">
                            {drink.name}
                        </p>

                        <div className="flex w-full items-center justify-between gap-2">
                            <p className="text-base font-bold text-[#C5A880]">{drink.price}</p>
                            <span className="h-px w-10 bg-neutral-600" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Bebidas