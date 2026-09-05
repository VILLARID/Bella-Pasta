import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
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
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Outlet />
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