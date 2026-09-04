import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <nav className="sticky top-0 z-50 border-b border-neutral-300 bg-white">
            <div className="flex items-center justify-between px-6 py-5">
                <Link to="/" className="font-serif-display text-2xl font-semibold">
                    Bella Massa
                </Link>
                <button
                    onClick={toggleMenu}
                    aria-label="Abrir menú"
                    className="text-neutral-800">
                    <Menu className="h-7 w-7" />
                </button>
            </div>

            {isOpen && (
                <div className="font-serif-display absolute left-0 right-0 top-full flex flex-col bg-white px-6 pb-6 shadow-md">
                    <Link to="/" className="py-3 text-xl">Inicio</Link>
                    <Link to="/carta" className="py-3 text-xl">Carta</Link>
                    <a href="#nosotros" className="py-3 text-xl">Nosotros</a>
                    <a href="#contacto" className="py-3 text-xl">Contacto</a>
                    <Link
                        to="/carta"
                        className="mt-4 bg-black text-center text-white py-3">
                        Ver carta
                    </Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar;
