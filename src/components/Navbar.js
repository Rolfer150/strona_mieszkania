import React from "react";
import websiteLogo from '../assets/logo.jpg';

const Navbar = () => {
    return <div className="p-20 pt-12 bg-[#0D1728] text-gray-400 font-medium flex justify-between">
        
        {/* Logo */}
        <img src={websiteLogo} />

        {/* Pasek nawigacyjny */}
        <ul className="flex justify-center space-x-8 mt-3">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Features</a>
            </li>
            <li>
                <a href="#">Product</a>
            </li>
            <li>
                <a href="#">Testimony</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>

        {/* Przycisk logowania */}
        <button className="bg-[#17C2EC] text-white pr-8 pl-8 pt-3 pb-3 rounded-2xl">Login</button>
    </div>
};

export default Navbar;