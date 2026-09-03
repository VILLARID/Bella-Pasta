import { useState } from 'react'
import { Menu } from 'lucide-react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <nav className="border-b-2 border-[#d4af37]/40">
            <div className="flex items-center justify-between px-6 py-5">
                <a href="/" className="font-serif-display text-2xl font-semibold">
                    Bella Massa
                </a>
                <button
                    onClick={toggleMenu}
                    aria-label="Abrir menú"
                    className="text-4xl">
                    <Menu />
                </button>
            </div>

            {isOpen && (
                <div className="font-serif-display flex flex-col px-6 pb-6">
                    <a href="#inicio" className="py-3 text-xl">Inicio</a>
                    <a href="#carta" className="py-3 text-xl">Carta</a>
                    <a href="#nosotros" className="py-3 text-xl">Nosotros</a>
                    <a href="#contacto" className="py-3 text-xl">Contacto</a>
                    <a
                        href="#carta"
                        className="mt-4 bg-black text-center text-white py-3">
                        Ver carta
                    </a>
                </div>
            )}
        </nav>
    )
}

export default Navbar;
