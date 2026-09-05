import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const { pathname } = useLocation()

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    const links = [
        { to: '/', label: 'Inicio' },
        { to: '/carta', label: 'Carta' },
        { to: '/nosotros', label: 'Nosotros' },
        { to: '/contacto', label: 'Contacto' },
    ]

    return (
        <nav className="sticky top-0 z-50 bg-white">
            <div className="border-b border-neutral-300">
                <div className="flex items-center justify-between px-6 py-4">
                    <Link to="/" onClick={closeMenu} className="flex flex-col">
                        <span className="font-serif-display text-2xl font-semibold leading-none tracking-wide">
                            Bella Massa
                        </span>
                        <span className="mt-1.5 text-[9px] uppercase tracking-[0.35em] text-neutral-400">
                            Pizzería artesanal · Lima
                        </span>
                    </Link>
                    <button
                        onClick={toggleMenu}
                        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                        className={`border p-2 transition-colors ${
                            isOpen
                                ? 'border-[#800020] text-[#800020]'
                                : 'border-neutral-300 text-neutral-800'
                        }`}>
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-0 right-0 top-full flex flex-col overflow-hidden border-b border-neutral-300 bg-white shadow-md">
                    <div className="px-6">
                        {links.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={closeMenu}
                                className={`flex items-center justify-between border-b border-neutral-100 py-4 text-xl ${
                                    pathname === link.to
                                        ? 'text-[#800020]'
                                        : 'text-neutral-900'
                                }`}>
                                <span>{link.label}</span>
                                <span className="text-[10px] tracking-[0.3em] text-neutral-300">
                                    0{links.indexOf(link) + 1}
                                </span>
                            </Link>
                        ))}
                    </div>
                    <div className="px-6 pb-8 pt-6">
                        <Link
                            to="/carta"
                            onClick={closeMenu}
                            className="block bg-[#800020] py-3 text-center text-white tracking-wide">
                            Ver carta
                        </Link>
                        <p className="mt-6 text-center text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                            Miraflores · Lima · Perú
                        </p>
                    </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar;