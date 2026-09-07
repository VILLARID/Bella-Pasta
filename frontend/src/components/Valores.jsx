import { motion } from 'framer-motion'

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

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
}

function Valores() {
    return (
        <section className="bg-[#fdfcf7] px-6 py-16 lg:px-20 lg:py-24 xl:px-32">
            <motion.div {...fadeUp} className="flex items-center gap-4">
                <p className="shrink-0 font-body text-[10px] font-medium uppercase tracking-[0.3em] text-[#800020]">
                    Lo que nos define
                </p>
                <span className="h-px flex-1 bg-[#C5A880]/30" />
            </motion.div>

            <div className="mt-12 flex flex-col lg:grid lg:grid-cols-3">
                {values.map((value, index) => (
                    <motion.article
                        key={value.number}
                        {...fadeUp}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                            delay: index * 0.12,
                        }}
                        className={`flex flex-col border-t border-[#C5A880]/20 py-8 first:border-t-0 first:pt-0 lg:border-t-0 lg:px-10 lg:py-2 lg:first:pl-0 xl:px-14 ${
                            index > 0 ? 'lg:border-l lg:border-[#C5A880]/20' : ''
                        }`}>
                        <p className="font-serif-display text-[3.5rem] leading-none text-[#C5A880]/25">
                            {value.number}
                        </p>
                        <h3 className="mt-6 font-serif-display text-xl font-semibold text-[#2b241c] lg:text-[1.4rem]">
                            {value.title}
                        </h3>
                        <p className="mt-4 max-w-xs text-[12.5px] leading-[1.7] tracking-wide text-[#666] lg:font-body">
                            {value.text}
                        </p>
                    </motion.article>
                ))}
            </div>
        </section>
    )
}

export default Valores