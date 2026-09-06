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
        <section className="mt-20 bg-[#121212] px-6 py-16 lg:px-20 lg:py-20 xl:px-32">
            <p className="font-body text-[10px] uppercase tracking-[0.3em] text-[#C5A880]">
                Bebidas
            </p>
            <div className="mt-3 flex items-center gap-4">
                <h2 className="shrink-0 font-serif-display text-3xl font-semibold text-white lg:text-4xl">
                    Para acompañar
                </h2>
                <span className="flex-1 border-t border-neutral-800" />
            </div>

            <div className="mt-10 grid grid-cols-2 lg:mt-12 lg:grid-cols-3">
                {drinks.map((drink, index) => (
                    <div
                        key={drink.name}
                        className={`group flex min-h-[150px] flex-col p-5 transition-colors duration-300 hover:bg-[#222222] lg:min-h-[170px] lg:p-6 ${
                            (index % 2 === 1 ? 'border-l ' : '') +
                            (index >= 2 ? 'border-t ' : '') +
                            (index % 2 === 1 && index % 3 === 0 ? 'lg:border-l-0 ' : '') +
                            (index >= 2 && index < 3 ? 'lg:border-t-0 ' : '') +
                            (index % 3 !== 0 ? 'lg:border-l ' : '') +
                            (index >= 3 ? 'lg:border-t ' : '')
                        } border-neutral-800`}>
                        <div className="flex items-start justify-between gap-4">
                            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-[#8A9A86]">
                                {drink.category}
                            </p>
                            <p className="font-body text-[10px] tracking-[0.2em] text-neutral-700 transition-colors duration-300 group-hover:text-[#C5A880]">
                                0{index + 1}
                            </p>
                        </div>

                        <p className="mt-2 font-serif-display text-lg font-normal italic leading-snug text-white lg:text-[1.4rem]">
                            {drink.name}
                        </p>

                        <div className="mt-auto flex items-center justify-between gap-2 border-t border-neutral-800/70 pt-5">
                            <p className="font-body text-sm font-bold text-white lg:text-base">
                                {drink.price}
                            </p>
                            <span className="h-px w-10 bg-neutral-700 transition-colors duration-300 group-hover:bg-[#C5A880]" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Bebidas