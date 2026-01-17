const CategorySection = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Browse by Category</h2>
            <p className="text-gray-500 mt-1">Find products that match your style</p>
          </div>
          <button className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
            View All
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Categories Grid - 4 Main Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {/* Category 1 - Electronics */}
          <div className="group cursor-pointer">
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-6 h-52 flex flex-col items-center justify-center transition-all hover:shadow-xl hover:-translate-y-2">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Electronics</h3>
              <p className="text-xs text-gray-500 mt-1">1.2k+ Products</p>
            </div>
          </div>

          {/* Category 2 - Jewelery */}
          <div className="group cursor-pointer">
            <div className="relative bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl p-6 h-52 flex flex-col items-center justify-center transition-all hover:shadow-xl hover:-translate-y-2">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l2.5 6.5H21l-5.5 4 2 6.5L12 16l-5.5 4 2-6.5L3 9.5h6.5L12 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Jewelery</h3>
              <p className="text-xs text-gray-500 mt-1">450+ Products</p>
            </div>
          </div>

          {/* Category 3 - Men's Fashion */}
          <div className="group cursor-pointer">
            <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-6 h-52 flex flex-col items-center justify-center transition-all hover:shadow-xl hover:-translate-y-2">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Men's Clothing</h3>
              <p className="text-xs text-gray-500 mt-1">890+ Products</p>
            </div>
          </div>

          {/* Category 4 - Women's Fashion */}
          <div className="group cursor-pointer">
            <div className="relative bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl p-6 h-52 flex flex-col items-center justify-center transition-all hover:shadow-xl hover:-translate-y-2">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Women's Clothing</h3>
              <p className="text-xs text-gray-500 mt-1">1.5k+ Products</p>
            </div>
          </div>

        </div>

        {/* Bottom Categories - Sub Categories */}
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">

          {/* Tag 1 - All */}
          <button className="flex items-center gap-2 bg-emerald-500 text-gray-700 px-6 py-3 rounded-full text-sm font-medium transition-all hover:bg-emerald-600 hover:shadow-xl hover:-translate-y-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            All Products
          </button>

          {/* Tag 2 - Men's Clothing */}
          <button className="flex items-center gap-2 bg-gray-100 hover:bg-emerald-500  px-6 py-3 rounded-full text-sm font-medium text-gray-700 transition-all hover:shadow-xl hover:-translate-y-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Men's Clothing
          </button>

          {/* Tag 3 - Women's Clothing */}
          <button className="flex items-center gap-2 bg-gray-100 hover:bg-emerald-500  px-6 py-3 rounded-full text-sm font-medium text-gray-700 transition-all hover:shadow-xl hover:-translate-y-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Women's Clothing
          </button>

          {/* Tag 4 - Jewelery */}
          <button className="flex items-center gap-2 bg-gray-100 hover:bg-emerald-500  px-6 py-3 rounded-full text-sm font-medium text-gray-700 transition-all hover:shadow-xl hover:-translate-y-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l2.5 6.5H21l-5.5 4 2 6.5L12 16l-5.5 4 2-6.5L3 9.5h6.5L12 3z" />
            </svg>
            Jewelery
          </button>

          {/* Tag 5 - Electronics */}
          <button className="flex items-center gap-2 bg-gray-100 hover:bg-emerald-500  px-6 py-3 rounded-full text-sm font-medium text-gray-700 transition-all hover:shadow-xl hover:-translate-y-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Electronics
          </button>

        </div>

      </div>
    </section>
  )
}

export default CategorySection