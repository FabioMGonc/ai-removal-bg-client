import { assets } from "../assets/assets.ts";
import { Link, useNavigate } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/react";
import { useEffect } from "react";
import { useAppContext } from "../context/useAppContext.tsx";


const Navbar = () => {
    
    const { openSignIn } = useClerk();

    const { isSignedIn, user } = useUser();
    const { credit, loadCredits } = useAppContext();

    const navigate = useNavigate()

    useEffect(() => {
        if (isSignedIn) {
            loadCredits();
        }
    }, [isSignedIn, loadCredits]);

    return (
        <header className="flex items-center justify-between mx-4 py-3 lg:mx-44">
            <Link to="/">
                <img src={assets.logo} alt=""  />
            </Link>
            {
                isSignedIn 
                ? 
                <div className="flex items-center gap-2 sm:gap-3">
                    <button onClick={() => navigate("/buy")} className="flex items-center gap-2 px-4 py-1.5 bg-blue-100 sm:px-7 sm:py-2.5 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer">
                        <img className="w-5" src={assets.credit_icon} alt="" />
                        <p className="text-xs sm:text-sm font-medium text-gray-600">Créditos: {credit}</p>
                    </button>
                    <p className="text-gray-600 max-sm:hidden">Olá, {user.firstName}!</p>
                    <UserButton /> 
                </div> : <button onClick={() => openSignIn({})} className="flex bg-zinc-800 text-white items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-4xl cursor-pointer">
                Iniciar <img className="w-3 sm:w-4" src={assets.arrow_icon} alt="" />
            </button>
            }
        </header>
    )
}

export default Navbar;
