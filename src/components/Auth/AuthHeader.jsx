import { Link } from "react-router-dom"

export function AuthHeader() {
    return (
        <header className="flex h-full items-center justify-center border-b-2 border-b-white bg-[#121212d0] py-4">
            <h2>
                <Link to="/">AVANTI</Link>
            </h2>
        </header>
    )
}
