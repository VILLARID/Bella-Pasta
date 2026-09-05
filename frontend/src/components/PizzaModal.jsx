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
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#141414]/70 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}>
            <motion.div
                className="mx-auto max-h-[92vh] w-full max-w-md overflow-y-auto bg-[#f3efe8] shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, y: 44, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
                <div className="m-4 border border-[#C5A880]/50">
                    <div className="border border-[#C5A880]/30">
                        <div className="relative">
                            <img
                                src={pizza.image}
                                alt={pizza.name}
                                className="h-56 w-full object-cover"
                            />
                            <button
                                onClick={onClose}
                                aria-label="Cerrar"
                                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-[#f3efe8]/90 text-neutral-700">
                                <X className="h-5 w-5" />
                            </button>
                            <div className="absolute bottom-3 left-4 flex items-center gap-2 bg-[#f3efe8]/85 px-3 py-1.5">
                                <span className="text-[9px] uppercase tracking-[0.25em] text-[#800020]">
                                    De nuestra carta
                                </span>
                            </div>
                        </div>

                        <div className="px-7 pb-8 pt-7">
                            <p className="text-center text-[10px] uppercase tracking-[0.4em] text-[#C5A880]">
                                Pizza de la casa
                            </p>
                            <div className="mt-4 flex items-center justify-center gap-3">
                                <span className="h-px w-12 bg-[#C5A880]/50" />
                                <span className="h-1.5 w-1.5 rotate-45 bg-[#C5A880]" />
                                <span className="h-px w-12 bg-[#C5A880]/50" />
                            </div>
                            <h3 className="mt-4 text-center font-serif-display text-3xl font-semibold text-[#2b241c]">
                                {pizza.name}
                            </h3>

                            <p className="mt-6 text-center text-sm leading-relaxed text-neutral-700">
                                {pizza.story}
                            </p>

                            <div className="mt-7 border border-[#C5A880]/40 px-5 py-5">
                                <p className="text-center text-[10px] uppercase tracking-[0.3em] text-[#800020]">
                                    Ingredientes
                                </p>
                                <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5">
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

                            <div className="mt-6 flex items-center justify-center gap-3">
                                <span className="h-px w-8 bg-[#C5A880]/40" />
                                <p className="text-center text-[9px] uppercase tracking-[0.25em] text-neutral-500">
                                    Masa madre · Horno de leña · Ingredientes frescos
                                </p>
                                <span className="h-px w-8 bg-[#C5A880]/40" />
                            </div>

                            <div className="mt-7 border-t border-[#C5A880]/40 pt-6 text-center">
                                <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                                    Precio
                                </p>
                                <p className="mt-2 font-serif-display text-3xl font-semibold text-[#800020]">
                                    {pizza.price}
                                </p>
                                <p className="mt-2 text-[10px] tracking-wide text-neutral-500">
                                    Precio no incluye delivery · Solo en sala
                                </p>
                            </div>

                            <p className="mt-6 border-t border-[#C5A880]/40 pt-4 text-center text-[9px] uppercase tracking-[0.3em] text-neutral-400">
                                Bella Massa · Miraflores
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default PizzaModal