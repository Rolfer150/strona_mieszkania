import React from "react";
import websiteLogo from '../assets/logo.jpg';

const Navbar = () => {
    return <div className="p-20 pt-12 bg-[#0D1728] text-gray-400 font-medium flex justify-between">
        
        {/* Logo */}
        <img src={websiteLogo} />
        
        {/* Pasek nawigacyjny */}
        <nav className="flex justify-center space-x-8 mt-3">
        {[
            ['Home', '/home'],
            ['Features', '/features'],
            ['Product', '/product'],
            ['Testimony', '/testimony'],
            ['Contact', '/contact'],
        ].map(([title, url]) => (
            <a href={url} className="hover:text-white hover:scale-105 transition duration-200">{title}</a>
        ))}
        </nav>

        {/* Przycisk logowania */}
        <button className="button-login">Login</button>
    </div>
};

export default Navbar;