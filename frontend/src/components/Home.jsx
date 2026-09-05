import homeImage from '../assets/Home/homeImage.jpg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import DataComponent from './DataComponent'
import About from './About'
import Favorite from './Favorite'
import Menu from './Menu'

const heroContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15,
        },
    },
}

const heroItem = {
    hidden: { opacity: 0, y: 18 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
}

function Home() {
    return (
        <>
            <div className="bg-gradient-to-b from-white to-[#f3efe8]">
                <motion.section
                    variants={heroContainer}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col px-6 py-12">
                    <motion.p
                        variants={heroItem}
                        className="text-sm text-[#800020]">
                        Pizzería italiana · Lima, Perú
                    </motion.p>
                    <motion.h1
                        variants={heroItem}
                        className="mt-4 text-5xl font-semibold leading-tight">
                        El arte de
                        <br />
                        una buena
                        <br />
                        pizza.
                    </motion.h1>
                    <motion.p
                        variants={heroItem}
                        className="mt-4 text-lg text-neutral-600">
                        Ingredientes seleccionados, masa artesanal y el auténtico sabor de Italia.
                    </motion.p>
                    <motion.div variants={heroItem} className="mt-8 flex flex-col gap-4">
                        <div className="flex gap-4">
                            <Link
                                to="/carta"
                                className="flex-1 bg-[#800020] text-center text-white py-3">
                                Ver nuestra carta
                            </Link>
                            <Link
                                to="/nosotros"
                                className="flex-1 border border-neutral-400 text-center text-neutral-700 py-3">
                                Conócenos
                            </Link>
                        </div>
                    </motion.div>
                </motion.section>
                <DataComponent />
                <div className="relative mt-6">
                    <img
                        src={homeImage}
                        alt="Pizza artesanal de Bella Massa"
                        className="w-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-[#f5f0e6]/80 px-3 py-2 text-xs font-semibold uppercase">
                        Horneada al momento
                    </div>
                </div>
                <About />
            </div>
            <Menu />
            <Favorite />
        </>
    )
}

export default Home;
