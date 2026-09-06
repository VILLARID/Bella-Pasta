import { useEffect } from 'react'
import { X } from 'lucide-react'
import { motion } from 'framer-motion'

function PizzaModal({ pizza, onClose }) {
    useEffect(() => {
        if (!pizza) return
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = previousOverflow
        }
    }, [pizza])

    if (!pizza) return null

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#141414]/80 p-4 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}>
            <motion.div
                className="relative flex max-h-[92vh] w-full max-w-4xl flex-col bg-[#f3efe8] shadow-2xl lg:max-h-none"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, y: 48, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 32, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                <div className="m-3 flex min-h-0 flex-1 flex-col border border-[#C5A880]/50 lg:m-4">
                    <div className="flex flex-1 flex-col overflow-hidden border border-[#C5A880]/30 lg:flex-row">
                        <div className="relative h-56 w-full shrink-0 lg:h-auto lg:min-h-[560px] lg:w-[42%]">
                            <img src={pizza.image} alt={pizza.name} className="h-full w-full object-cover" />
                            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#f3efe8]/90 px-3 py-1.5">
                                <span className="text-[9px] uppercase tracking-[0.25em] text-[#800020]">
                                    De nuestra carta
                                </span>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto overscroll-contain border-t border-[#C5A880]/30 lg:border-l lg:border-t-0">
                            <div className="px-7 pb-8 pt-7 lg:px-12 lg:py-10">
                                <p className="text-center text-[10px] uppercase tracking-[0.4em] text-[#C5A880] lg:text-left">
                                    {pizza.special ? 'Especial de la casa' : 'Pizza artesanal'}
                                </p>
                                <div className="mt-4 flex items-center justify-center gap-3 lg:justify-start">
                                    <span className="h-px w-12 bg-[#C5A880]/50" />
                                    <span className="h-1.5 w-1.5 rotate-45 bg-[#C5A880]" />
                                    <span className="h-px w-12 bg-[#C5A880]/50" />
                                </div>
                                <h3 className="mt-4 flex items-center justify-center gap-3 text-center font-serif-display text-3xl font-semibold text-[#2b241c] lg:justify-start lg:text-left lg:text-4xl">
                                    {pizza.special && <span className="h-2.5 w-2.5 rotate-45 bg-[#800020]" />}
                                    {pizza.name}
                                </h3>

                                <p className="mt-6 text-center text-sm leading-relaxed text-neutral-700 lg:text-left lg:text-[15px] lg:leading-7">
                                    {pizza.story}
                                </p>

                                <div className="mt-8 border border-[#C5A880]/40 px-5 py-5 lg:px-8 lg:py-7">
                                    <p className="text-center text-[10px] uppercase tracking-[0.3em] text-[#800020] lg:text-left">
                                        Ingredientes
                                    </p>
                                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 lg:justify-start lg:gap-x-4">
                                        {pizza.ingredients.map((ingredient, index) => (
                                            <span
                                                key={ingredient}
                                                className="flex items-center gap-3 text-sm text-neutral-700">
                                                {ingredient}
                                                {index < pizza.ingredients.length - 1 && (
                                                    <span className="h-1 w-1 rotate-45 bg-[#C5A880]" />
                                                )}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-7 flex items-center justify-center gap-3 lg:justify-start">
                                    <span className="h-px w-8 bg-[#C5A880]/40" />
                                    <p className="text-center text-[9px] uppercase tracking-[0.25em] text-neutral-500">
                                        Masa madre · Horno de leña · Ingredientes frescos
                                    </p>
                                    <span className="h-px w-8 bg-[#C5A880]/40" />
                                </div>

                                <div className="mt-8 border-t border-[#C5A880]/40 pt-6 text-center lg:flex lg:items-end lg:justify-between lg:text-left">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                                            Precio
                                        </p>
                                        <p className="mt-2 font-serif-display text-3xl font-semibold text-[#800020] lg:text-4xl">
                                            {pizza.price}
                                        </p>
                                        <p className="mt-2 text-[10px] tracking-wide text-neutral-500">
                                            Precio no incluye delivery · Solo en sala
                                        </p>
                                    </div>
                                    <span className="mt-4 hidden h-9 w-px bg-[#C5A880]/40 lg:block" />
                                    <p className="mt-4 text-[9px] uppercase tracking-[0.3em] text-neutral-400 lg:mt-0">
                                        Bella Massa · Miraflores
                                        {pizza.special && ' · La favorita de la casa'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    onClick={onClose}
                    aria-label="Cerrar"
                    className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center bg-[#f3efe8]/95 text-neutral-700 shadow-sm transition-colors hover:text-[#800020]">
                    <X className="h-5 w-5" />
                </button>
            </motion.div>
        </motion.div>
    )
}

export default PizzaModal