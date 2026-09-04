import { useState } from 'react'
import { Menu } from 'lucide-react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <nav className="sticky top-0 z-50 border-b border-[#d0c8b8] bg-white">
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
                <div className="font-serif-display absolute left-0 right-0 top-full flex flex-col bg-white px-6 pb-6 shadow-md">
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
