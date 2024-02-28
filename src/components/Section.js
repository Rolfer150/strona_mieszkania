import React from "react";

const Section = () => {
    return <div className="p-40 text-center">
        <div>
            <h3 className="text-[#17C2EC] text-2xl font-semibold">- What We Serve -</h3>
            <h1 className="text-5xl pt-6 font-bold">The Benefit From <br /> Our Service</h1>
        </div>

        {/* Panele informacyjne */}
        <div className="flex justify-between text-white mt-10">
            <div className="bg-[#0D1728] p-8 rounded-2xl flex flex-col ">
                <div className="flex justify-center pt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14 p-3 rounded-full bg-[#17C2EC]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                </div>
                <h4 className="text-xl pb-4 mt-12 font-semibold">3D Viewer</h4>
                <p className="text-gray-400 pb-6">You can catch a glimpse of this 3 <br />
                    viewer feature before you have seen <br />
                    the house and property directly
                </p>
            </div>

            <div className="bg-[#0D1728] p-8 rounded-2xl">
                <div className="flex justify-center pt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14 p-3 rounded-full bg-[#17C2EC]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                </div>                
                <h4 className="text-xl pb-4 mt-12 font-semibold">Choose Your Type</h4>
                <p className="text-gray-400 pb-6">Find your dream and lovely house, <br />
                    look for property model you like and <br />
                    you can also choose the location
                </p>
            </div>

            <div className="bg-[#0D1728] p-8 rounded-2xl">
                <div className="flex justify-center pt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14 p-3 rounded-full bg-[#17C2EC]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                    </svg>
                </div>
                <h4 className="text-xl pb-4 mt-12 font-semibold">Easy Payment</h4>
                <p className="text-gray-400 pb-6">After you adjust the property and <br />
                    house model and have seen it in <br />
                    person, you can make payments
                </p>
            </div>
        </div>
    </div>
};

export default Section;