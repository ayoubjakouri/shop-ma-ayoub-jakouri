const BannerSection = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* 2 Banners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Banner 1 - Summer Sale */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-pink-500 p-8 md:p-10 min-h-[280px] group cursor-pointer">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
              <div className="absolute bottom-10 right-20 w-24 h-24 bg-white rounded-full"></div>
              <div className="absolute top-1/2 right-10 w-16 h-16 bg-white rounded-full"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center">
              {/* Badge */}
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
                Limited Time Offer
              </span>
              
              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Summer Sale
              </h3>
              
              {/* Discount */}
              <p className="text-5xl md:text-6xl font-black text-white mb-4">
                50% <span className="text-2xl font-bold">OFF</span>
              </p>
              
              {/* Description */}
              <p className="text-white/80 text-sm mb-6 max-w-xs">
                Get the best deals on fashion, electronics & more
              </p>
              
              {/* CTA Button */}
              <button className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold text-sm w-fit hover:bg-gray-100 transition-colors group-hover:scale-105 transform duration-300 flex items-center gap-2">
                Shop Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Floating Image */}
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300&h=400&fit=crop" 
              alt="Summer Sale" 
              className="absolute right-0 bottom-0 h-full w-1/2 object-cover object-center opacity-90 group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Overlay on image */}
            <div className="absolute right-0 bottom-0 h-full w-1/2 bg-gradient-to-r from-orange-500/80 to-transparent"></div>

          </div>

          {/* Banner 2 - New Arrivals */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-gray-700 p-8 md:p-10 min-h-[280px] group cursor-pointer">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-5 right-10 w-40 h-40 bg-white rounded-full"></div>
              <div className="absolute bottom-5 left-20 w-28 h-28 bg-white rounded-full"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center">
              {/* Badge */}
              <span className="inline-block bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
                New Collection 2024
              </span>
              
              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                New Arrivals
              </h3>
              
              {/* Subtitle */}
              <p className="text-xl md:text-2xl font-semibold text-emerald-400 mb-4">
                Fresh Styles Weekly
              </p>
              
              {/* Description */}
              <p className="text-white/70 text-sm mb-6 max-w-xs">
                Discover the latest trends in fashion & accessories
              </p>
              
              {/* CTA Button */}
              <button className="bg-emerald-500 hover:bg-emerald-600 text-emerald-400 px-6 py-3 rounded-full font-semibold text-sm w-fit transition-colors group-hover:scale-105 transform duration-300 flex items-center gap-2">
                Explore Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Floating Image */}
            <img 
              src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=300&h=400&fit=crop" 
              alt="New Arrivals" 
              className="absolute right-0 bottom-0 h-full w-1/2 object-cover object-center opacity-80 group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Overlay on image */}
            <div className="absolute right-0 bottom-0 h-full w-1/2 bg-gradient-to-r from-gray-900/90 to-transparent"></div>

          </div>

        </div>

        {/* Single Full Width Banner (Optional - Below) */}
        <div className="mt-6 relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 p-8 md:p-12 group cursor-pointer">
          
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-white rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white rounded-full"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left Content */}
            <div className="flex items-center gap-6">
              {/* Icon */}
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              
              {/* Text */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Free Shipping on Orders Over $50
                </h3>
                <p className="text-white/80 text-sm mt-1">
                  Plus easy returns within 30 days • No questions asked
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 flex-shrink-0">
              Start Shopping
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}

export default BannerSection