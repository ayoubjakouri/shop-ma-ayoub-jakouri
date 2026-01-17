import { NavLink } from 'react-router-dom'
const TopBar = () => {
    return (
        // <div className="w-full bg-gray-100 text-xs text-gray-600">
        //     <div className="max-w-7xl mx-auto px-6 h-8 flex items-center justify-between">

        //         <NavLink to="#" className="hover:text-black">Download App</NavLink>

        //         <div className="flex items-center gap-4">
        //             <NavLink to="/" className="hover:text-black">Home</NavLink>
        //             <NavLink to="/products" className="hover:text-black">Product</NavLink>
        //             <NavLink to="#" className="hover:text-black">About</NavLink>
        //             <NavLink to="#" className="hover:text-black">Contact</NavLink>
        //             {/* <a href="#" className="hover:text-black">Login</a>
        //             <a href="#" className="font-medium text-black">Sign Up</a> */}
        //         </div>
        //     </div>
        // </div>


        <div className="w-full bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">

                {/* Left Side */}
                <div className="flex items-center gap-6">

                    {/* Location */}
                    {/* <div className="flex items-center gap-2 text-sm cursor-pointer hover:text-emerald-400 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Deliver to</span>
                        <span className="font-semibold">Casablanca, Morocco</span>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div> */}

                    {/* Download App */}
                    <div className="flex items-center gap-2 text-sm cursor-pointer hover:text-emerald-400 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <span>Download App</span>
                    </div>

                    {/* Divider */}
                    <div className="w-px h-4 bg-gray-700"></div>


                </div>

                {/* Right Side */}
                <div className="flex items-center gap-6">
                    {/* Track Order */}
                    <div className="flex items-center gap-2 text-sm cursor-pointer hover:text-emerald-400 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        <span>Track Order</span>
                    </div>

                    {/* Sell on Platform */}
                    {/* <div className="flex items-center gap-2 text-sm cursor-pointer hover:text-emerald-400 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>Sell on BeliBeli</span>
                    </div>

                    Divider
                    <div className="w-px h-4 bg-gray-700"></div> */}

                    

                    {/* Divider */}
                    <div className="w-px h-4 bg-gray-700"></div>

                    {/* Help Center */}
                    <div className="flex items-center gap-2 text-sm cursor-pointer hover:text-emerald-400 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Help Center</span>
                    </div>

                    {/* Divider */}
                    <div className="w-px h-4 bg-gray-700"></div>

                    {/* Language */}
                    <div className="flex items-center gap-2 text-sm cursor-pointer hover:text-emerald-400 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <span>EN</span>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    {/* Currency */}
                    <div className="flex items-center gap-2 text-sm cursor-pointer hover:text-emerald-400 transition-colors">
                        <span>MAD</span>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                </div>

            </div>
        </div>
    )
}


export default TopBar