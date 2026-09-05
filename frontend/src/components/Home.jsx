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

const heroStats = [
    { value: '+6', label: 'Años de oficio' },
    { value: '100%', label: 'Masa artesanal' },
    { value: '20+', label: 'Pizzas en carta' },
]

function Home() {
    return (
        <>
            <div className="bg-gradient-to-b from-white to-[#f3efe8]">
                <motion.section
                    variants={heroContainer}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col px-6 py-12 lg:grid lg:min-h-[calc(100svh-5rem)] lg:grid-cols-2 lg:px-0 lg:py-0">
                    <motion.div variants={heroItem} className="flex items-center bg-white lg:pl-16 lg:pr-14 xl:pl-24 xl:pr-20">
                        <div className="flex w-full flex-col lg:max-w-lg">
                            <motion.p
                                variants={heroItem}
                                className="text-sm text-[#800020]">
                                Pizzería italiana · Lima, Perú
                            </motion.p>
                            <motion.h1
                                variants={heroItem}
                                className="mt-4 text-5xl font-semibold leading-tight text-neutral-900 lg:text-6xl xl:text-7xl">
                                El arte de
                                <br />
                                una buena
                                <br />
                                pizza.
                            </motion.h1>
                            <motion.p
                                variants={heroItem}
                                className="mt-4 text-lg text-neutral-600 lg:mt-6 lg:font-body lg:text-xl lg:tracking-wide">
                                Ingredientes seleccionados, masa artesanal y el auténtico sabor de Italia.
                            </motion.p>
                            <motion.div
                                variants={heroItem}
                                className="mt-8 flex flex-col gap-4 lg:mt-10 lg:flex-row lg:gap-4">
                                <Link
                                    to="/carta"
                                    className="flex-1 bg-[#800020] py-3 text-center text-white lg:px-10">
                                    Ver nuestra carta
                                </Link>
                                <Link
                                    to="/nosotros"
                                    className="flex-1 border border-neutral-300 py-3 text-center text-neutral-800 lg:px-10">
                                    Conócenos
                                </Link>
                            </motion.div>

                            <div className="mt-10 hidden h-px w-full bg-neutral-200 lg:block" />

                            <motion.div
                                variants={heroItem}
                                className="mt-8 hidden w-full justify-between lg:flex">
                                {heroStats.map((stat) => (
                                    <div key={stat.label}>
                                        <p className="font-serif-display text-4xl font-semibold text-neutral-900">
                                            {stat.value}
                                        </p>
                                        <p className="mt-2 text-[11px] font-body tracking-[0.15em] text-neutral-500">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div variants={heroItem} className="relative hidden bg-white lg:block">
                        <img
                            src={homeImage}
                            alt="Pizza artesanal de Bella Massa"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute bottom-6 left-6 bg-[#f5f0e6] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-800">
                            Horneada al momento
                        </div>
                    </motion.div>
                </motion.section>
                <DataComponent />
                <div className="relative mt-6 lg:hidden">
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