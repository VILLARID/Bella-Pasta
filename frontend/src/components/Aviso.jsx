function Aviso() {
    return (
        <section className="bg-[#f3efe8] px-6 py-12 lg:px-20 xl:px-32">
            <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-3">
                    <span className="h-px w-10 bg-[#C5A880]/60" />
                    <span className="h-1.5 w-1.5 rotate-45 bg-[#C5A880]" />
                    <span className="h-px w-10 bg-[#C5A880]/60" />
                </div>
                <p className="mt-5 max-w-lg text-sm leading-relaxed text-neutral-600 lg:font-body lg:leading-7">
                    Todos nuestros precios incluyen IGV. La carta puede variar según
                    disponibilidad de ingredientes frescos.
                </p>
                <p className="mt-3 font-serif-display text-xs italic uppercase tracking-[0.25em] text-neutral-500">
                    Temporada 2026
                </p>
            </div>
        </section>
    )
}

export default Aviso