import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import favoriteImage from '../assets/Favorite/favoriteImage.jpg'

function Favorite() {
    return (
        <section className="mt-24 bg-gradient-to-b from-white to-[#f3efe8]" id="favorita">
            <div className="flex flex-col px-6 pb-10 pt-10 text-neutral-900">
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
        </section>
    )
}

export default Favorite;
