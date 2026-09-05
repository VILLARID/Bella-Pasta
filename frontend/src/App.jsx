import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Carta from './components/Carta'
import Nosotros from './components/Nosotros'
import Contacto from './components/Contacto'

function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

function Layout() {
    const location = useLocation()

    return (
        <>
            <ScrollToTop />
            <Navbar />
            <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
                    <Outlet />
                </motion.div>
            </AnimatePresence>
            <Footer />
        </>
    )
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="carta" element={<Carta />} />
                    <Route path="nosotros" element={<Nosotros />} />
                    <Route path="contacto" element={<Contacto />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App