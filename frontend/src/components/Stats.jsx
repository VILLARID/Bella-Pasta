const stats = [
    { value: '+6', label: 'Años en Miraflores' },
    { value: '48h', label: 'Fermentación de la masa' },
    { value: '450°', label: 'Temperatura del horno' },
    { value: '20+', label: 'Pizzas en carta' },
]

function Stats() {
    return (
        <section className="bg-[#121212] px-6 py-16 lg:px-20 lg:py-20 xl:px-32">
            <div className="grid grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <div
                        key={stat.label}
                        className={`flex flex-col items-start justify-center py-10 ${
                            index % 2 === 1 ? 'border-l border-neutral-800' : ''
                        } ${
                            index >= 2 ? 'border-t border-neutral-800' : ''
                        } lg:py-8 ${
                            index % 2 === 1 && index % 4 !== 0 ? 'lg:border-l-0' : ''
                        } ${
                            index > 0 ? 'lg:border-l lg:border-neutral-800' : ''
                        } ${
                            index >= 2 ? 'lg:border-t-0' : ''
                        } lg:px-10 xl:px-12 ${
                            index % 4 === 3 ? 'lg:pl-8' : ''
                        }`}>
                        <p className="font-serif-display text-4xl font-semibold text-white lg:text-5xl">
                            {stat.value}
                        </p>
                        <p className="mt-4 max-w-[10rem] text-[10px] leading-relaxed tracking-[0.15em] text-[#8A9A86]">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats