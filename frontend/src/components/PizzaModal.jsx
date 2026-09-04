import { useEffect } from 'react'
import { X } from 'lucide-react'

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
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#141414]/70 p-6 backdrop-blur-md"
            onClick={onClose}>
            <div
                className="w-full max-w-md overflow-hidden bg-[#f3efe8]"
                onClick={(e) => e.stopPropagation()}>
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
                </div>

                <div className="px-7 py-8">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880]">
                        Pizza de la casa
                    </p>
                    <h3 className="mt-2 font-serif-display text-3xl font-semibold text-[#2b241c]">
                        {pizza.name}
                    </h3>
                    <div className="mt-3 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#C5A880]" />
                        <span className="h-1 w-1 bg-[#C5A880]" />
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-neutral-600">
                        {pizza.story}
                    </p>

                    <div className="mt-6 border-t border-[#C5A880]/40 pt-5">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-[#800020]">
                            Ingredientes
                        </p>
                        <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1.5">
                            {pizza.ingredients.map((ingredient, index) => (
                                <span
                                    key={ingredient}
                                    className="flex items-baseline gap-2 text-sm text-neutral-700">
                                    {ingredient}
                                    {index < pizza.ingredients.length - 1 && (
                                        <span className="text-[#C5A880]">·</span>
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>

                    <p className="mt-7 font-serif-display text-2xl font-semibold text-[#800020]">
                        {pizza.price}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PizzaModal