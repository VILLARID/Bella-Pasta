const stats = [
    { value: '+6', label: 'Años en Miraflores' },
    { value: '48h', label: 'Fermentación de la masa' },
    { value: '450°', label: 'Temperatura del horno' },
    { value: '20+', label: 'Pizzas en carta' },
]

function Stats() {
    return (
        <section className="bg-[#121212] px-6 py-16">
            <div className="grid grid-cols-2">
                {stats.map((stat, index) => (
                    <div
                        key={stat.label}
                        className={`flex flex-col items-center justify-center py-14 text-center ${
                            index % 2 === 1 ? 'border-l border-neutral-700/60' : ''
                        } ${
                            index > 1 ? 'border-t border-neutral-700/60' : ''
                        }`}>
                        <p className="font-serif-display text-4xl text-white">
                            {stat.value}
                        </p>
                        <p className="mt-3 whitespace-nowrap text-[8px] uppercase tracking-[0.18em] text-[#C5A880]">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats