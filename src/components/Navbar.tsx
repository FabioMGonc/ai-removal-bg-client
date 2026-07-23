import { assets } from "../assets/assets.ts";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/react";

const Navbar = () => {
    
    const { openSignIn } = useClerk();

    const { isSignedIn } = useUser();

    return (
        <header className="flex items-center justify-between mx-4 py-3 lg:mx-44">
            <Link to="/">
                <img src={assets.logo} alt=""  />
            </Link>
            {
                isSignedIn ? <div> <UserButton /> </div> : <button onClick={() => openSignIn({})} className="flex bg-zinc-800 text-white items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-4xl cursor-pointer">
                Iniciar <img className="w-3 sm:w-4" src={assets.arrow_icon} alt="" />
            </button>
            }
        </header>
    )
}

export default Navbar;
