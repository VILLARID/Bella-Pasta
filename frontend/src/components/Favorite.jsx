import { ArrowRight, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import favoriteImage from '../assets/Favorite/favoriteImage.jpg'

function Favorite() {
    return (
        <section className="mt-24 bg-gradient-to-b from-white to-[#f3efe8]" id="favorita">
            <div className="flex flex-col px-6 pb-10 pt-10 text-neutral-900 lg:px-16 xl:px-24">
                <div className="lg:hidden">
                    <img
                        src={favoriteImage}
                        alt="Pizza favorita de Bella Massa"
                        className="aspect-[4/3] w-full object-cover"
                    />
                    <p className="mt-6 text-xs uppercase tracking-wide text-[#800020]">
                        La favorita de la casa
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold leading-snug">
                        Bella Massa
                    </h2>
                    <p className="mt-4 text-neutral-600">
                        Una combinación creada para representar nuestra casa. Masa madre, tomate
                        San Marzano, burrata fresca, prosciutto cotto y albahaca del huerto.
                    </p>
                    <p className="mt-4 text-2xl text-[#800020]">S/ 52</p>
                    <Link
                        to="/carta"
                        className="mt-6 flex w-3/4 items-center justify-center gap-2 bg-black py-3 text-center text-white">
                        Descubrir
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="hidden lg:block">
                    <div className="flex w-full items-stretch">
                        <div className="flex flex-1 flex-col justify-between py-12 pl-12 pr-10 xl:py-16 xl:pl-16 xl:pr-14">
                            <div className="flex items-start justify-between gap-8">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.25em] text-[#800020]">
                                        La favorita de la casa
                                    </p>
                                    <h2 className="mt-4 text-4xl font-semibold xl:text-5xl">
                                        Bella Massa
                                    </h2>
                                    <div className="mt-5 flex items-center gap-3">
                                        <span className="h-px w-10 bg-[#C5A880]" />
                                        <span className="h-1.5 w-1.5 rotate-45 bg-[#C5A880]" />
                                        <span className="h-px w-10 bg-[#C5A880]" />
                                    </div>
                                </div>
                                <Heart className="mt-1 h-8 w-8 shrink-0 fill-[#800020] text-[#800020]" />
                            </div>

                            <div className="border-l border-[#C5A880]/40 pl-6">
                                <p className="max-w-md leading-relaxed text-neutral-600">
                                    Una combinación creada para representar nuestra casa. Masa madre,
                                    tomate San Marzano, burrata fresca, prosciutto cotto y albahaca
                                    del huerto.
                                </p>
                            </div>

                            <div className="flex items-center justify-between gap-8 border-t border-neutral-100 pt-6">
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                                        Precio
                                    </p>
                                    <p className="mt-1 text-3xl font-semibold text-[#800020]">
                                        S/ 52
                                    </p>
                                </div>
                                <Link
                                    to="/carta"
                                    className="flex items-center gap-2 border border-neutral-400 px-7 py-3 text-neutral-700">
                                    Ver en la carta
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                        <div className="w-[38%] shrink-0">
                            <img
                                src={favoriteImage}
                                alt="Pizza favorita de Bella Massa"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Favorite;