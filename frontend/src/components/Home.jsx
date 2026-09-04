import homeImage from '../assets/Home/homeImage.jpg'
import DataComponent from './DataComponent'
import About from './About'
import Favorite from './Favorite'
import Menu from './Menu'
import Footer from './Footer'

function Home() {
    return (
        <>
            <section className="flex flex-col px-6 py-12">
                <p className="text-sm text-[#800020]">
                    Pizzería italiana · Lima, Perú
                </p>
                <h1 className="mt-4 text-5xl font-semibold leading-tight">
                    El arte de
                    <br />
                    una buena
                    <br />
                    pizza.
                </h1>
                <p className="mt-4 text-lg text-neutral-600">
                    Ingredientes seleccionados, masa artesanal y el auténtico sabor de Italia.
                </p>
                <div className="mt-8 flex flex-col gap-4">
                    <div className="flex gap-4">
                        <a
                            href="#carta"
                            className="flex-1 bg-[#800020] text-center text-white py-3">
                            Ver nuestra carta
                        </a>
                        <a
                            href="#nosotros"
                            className="flex-1 border border-neutral-400 text-center text-neutral-700 py-3">
                            Conócenos
                        </a>
                    </div>
                </div>
            </section>
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
            <Menu />
            <Favorite />
            <Footer />
        </>
    )
}

export default Home;
