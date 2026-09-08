import { Link } from "react-router";    

export default function Menu() {
    return (
        <nav className="bg-gray-800 text-center text-white p-4">
            <Link className="text-white hover:text-blue-300" to="/">
                Home 
            </Link>
            <span className="mx-2">|</span>
            <Link className="text-white hover:text-blue-300" to="/numeros">
                Números
            </Link>
        </nav>
    );
}