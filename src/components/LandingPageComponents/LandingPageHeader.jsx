import { Link } from "react-router-dom"

export function LandingPageHeader() {
    return (
        <>
            <div className="body-font h-20 text-black">
                <div className="flex h-full flex-wrap justify-between p-4">
                    <img src="src/assets/avanti-logo.svg" alt="Logo de Avanti" className="h-full" />
                    <nav className="mr-4 flex cursor-pointer flex-wrap items-center justify-center gap-4 text-lg font-semibold text-avanti-black">
                        <Link
                            to="./register"
                            className="grid min-h-12 min-w-20 place-items-center rounded-2xl hover:text-avanti-blue hover:ring-2 hover:ring-avanti-blue"
                        >
                            Registro
                        </Link>
                        <Link
                            to="./login"
                            className="grid min-h-12 min-w-20 place-items-center rounded-2xl hover:text-avanti-blue hover:ring-2 hover:ring-avanti-blue"
                        >
                            Login
                        </Link>
                    </nav>
                </div>
            </div>
            <header className="body-font bg-avanti-white text-gray-600">
                <div className="mx-auto flex flex-col flex-wrap items-center justify-around gap-8 p-5">
                    <div className="relative flex items-center">
                        <img
                            src="src/assets/avanti-icon-search.svg"
                            alt="icono de búsqueda"
                            className="absolute left-2 ml-1 h-6 w-6"
                        />
                        <input
                            className="mt-4 inline-flex items-center rounded-xl border-0 bg-white px-16 py-2 text-base hover:bg-gray-200 focus:outline-none md:mt-0"
                            type="text"
                            placeholder="Search Crowdfunding"
                        />
                    </div>
                    <nav className="flex cursor-pointer flex-wrap items-center justify-center gap-4 text-lg font-semibold text-avanti-black">
                        <Link className="min-h-12 min-w-20 hover:text-avanti-blue">First Link</Link>
                        <Link className="min-h-12 min-w-20 hover:text-avanti-blue">Second Link</Link>
                        <Link className="min-h-12 min-w-20 hover:text-avanti-blue">Third Link</Link>
                        <Link className="min-h-12 min-w-20 hover:text-avanti-blue">Fourth Link</Link>
                    </nav>
                    <div className="flex items-center justify-center">
                        <div className="group relative">
                            <button className="relative inline-block cursor-pointer rounded-xl bg-avanti-black p-px font-semibold leading-6 text-white shadow-2xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                                <span className="relative z-10 block rounded-xl bg-gray-950 px-6 py-3">
                                    <div className="relative z-10 flex items-center space-x-2">
                                        <span className="transition-all duration-500 group-hover:translate-x-1">
                                            Start a Campaign
                                        </span>
                                        <img
                                            src="src/assets/avanti-icon-chevron.svg"
                                            alt="Icono empezar una campaña"
                                            className="h-6 w-6 transition-transform duration-500 group-hover:translate-x-1"
                                        />
                                    </div>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
