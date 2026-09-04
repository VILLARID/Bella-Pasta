const values = [
    {
        number: '01',
        title: 'Masa artesanal',
        text: 'Nuestra masa se prepara con fermentación lenta de 48 horas. Sin atajos, sin aditivos. Solo harina, agua, sal y tiempo.',
    },
    {
        number: '02',
        title: 'Ingredientes seleccionados',
        text: 'Trabajamos con productores locales y con importadores de confianza para traer el tomate San Marzano y la mozzarella fior di latte que merecen nuestras pizzas.',
    },
    {
        number: '03',
        title: 'Hecho al momento',
        text: 'Cada pizza se hornea por encargo, en nuestro horno a 450°C. Nunca precocinamos, nunca improvisamos. Solo atención plena a cada pedido.',
    },
]

function Valores() {
    return (
        <section className="bg-[#f3efe8] px-6 py-16">
            <div className="flex items-center gap-4">
                <p className="shrink-0 text-xs uppercase tracking-wide text-[#800020]">
                    Lo que nos define
                </p>
                <span className="h-px flex-1 bg-[#800020]/40" />
            </div>

            <div className="mt-10 flex flex-col">
                {values.map((value, index) => (
                    <article
                        key={value.number}
                        className="flex flex-col border-t border-neutral-300 py-8 first:border-t-0 first:pt-0">
                        <p className="font-serif-display text-4xl text-[#C5A880]">
                            {value.number}
                        </p>
                        <h3 className="mt-3 text-xl font-semibold">{value.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                            {value.text}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Valores