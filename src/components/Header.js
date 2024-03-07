import React from "react";
import House from "../assets/house.jpg";

const Header = () => {
    return <div className="relative bg-[#0D1728] text-white">
        <div className="xs:p-4 sm:p-6 md:p-14 lg:p-20 pt-8">
            <div className="md:flex justify-between">
                
                <div className="pr-10 select-none">                    
                    <h1 className="lg:text-6xl font-extrabold pb-12 sm:text-5xl">
                        Find Real Estate <br /> and Get Your <br /> Dream Space
                    </h1>
                    <h2 className="pb-12 text-gray-400 text-2xl">
                        Buy or rent comfortable and beautiful <br /> houses from many places
                    </h2>
                </div>

                {/* Zdjęcie domu */}
                <img alt="house" src={House} className="lg:w-3/5 h-full mb-8 md:rounded-3xl" />
            </div>            

            {/* Pasek wyszukiwania ofert mieszkań */}
            <form>
                <div className="absolute flex justify-between bg-white text-black text-2xl w-3/5 p-10 pr-6
                rounded-xl shadow-2xl-bottom shadow-gray-200">

                    {/* Lokacja */}
                    <div>
                        <label for="location">Location</label>
                        <select id="location" className=""></select>
                        <span className="text-gray-400 text-lg"><p>Bali, Indonesia</p></span>
                    </div>

                    {/* Rodzaj nieruchomości */}
                    <div>
                        <label for="propertyType">Property Type</label>
                        <select id="propertyType"></select>
                        <span className="text-gray-400 text-lg"><p>Modern House</p></span>
                    </div>

                    {/* Cena */}
                    <div>
                        <label for="averagePrice">Average Price</label>
                        <select id="averagePrice"></select>
                        <span className="text-gray-400 text-lg"><p>$7500 - $10000</p></span>
                    </div>

                    {/* Przycisk wyszukiwania */}
                    <button className="button-search select-none">Search</button>

                </div>
            </form>
            
        </div>
    </div>
        
};

export default Header;