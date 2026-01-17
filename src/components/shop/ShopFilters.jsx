const ShopFilters = () => {
  return (
    <aside className="w-full lg:w-72 flex-shrink-0">
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-24">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filters
          </h3>
          <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
            Clear All
          </button>
        </div>

        {/* Categories */}
        <div className="mb-6 pb-6 border-b border-gray-100">
          <h4 className="font-semibold text-gray-900 mb-4">Categories</h4>
          <ul className="space-y-3">
            
            <li>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-emerald-500 focus:ring-emerald-500" />
                <span className="text-gray-600 group-hover:text-gray-900 transition-colors">Men's Clothing</span>
                <span className="ml-auto text-xs text-gray-400">(45)</span>
              </label>
            </li>

            <li>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-emerald-500 focus:ring-emerald-500" />
                <span className="text-gray-600 group-hover:text-gray-900 transition-colors">Women's Clothing</span>
                <span className="ml-auto text-xs text-gray-400">(62)</span>
              </label>
            </li>

            <li>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-emerald-500 focus:ring-emerald-500" />
                <span className="text-gray-600 group-hover:text-gray-900 transition-colors">Jewelery</span>
                <span className="ml-auto text-xs text-gray-400">(28)</span>
              </label>
            </li>

            <li>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-emerald-500 focus:ring-emerald-500" />
                <span className="text-gray-600 group-hover:text-gray-900 transition-colors">Electronics</span>
                <span className="ml-auto text-xs text-gray-400">(35)</span>
              </label>
            </li>

          </ul>
        </div>

        {/* Price Range */}
        <div className="mb-6 pb-6 border-b border-gray-100">
          <h4 className="font-semibold text-gray-900 mb-4">Price Range</h4>
          
          {/* Slider */}
          <div className="mb-4">
            <input 
              type="range" 
              min="0" 
              max="1000" 
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          {/* Min - Max Inputs */}
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <label className="text-xs text-gray-500 mb-1 block">Min</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                <input 
                  type="number" 
                  placeholder="0" 
                  className="w-full border border-gray-200 rounded-xl py-2.5 pl-7 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
            <span className="text-gray-400 mt-5">—</span>
            <div className="flex-1">
              <label className="text-xs text-gray-500 mb-1 block">Max</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                <input 
                  type="number" 
                  placeholder="1000" 
                  className="w-full border border-gray-200 rounded-xl py-2.5 pl-7 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Rating */}
        <div className="mb-6 pb-6 border-b border-gray-100">
          <h4 className="font-semibold text-gray-900 mb-4">Rating</h4>
          <ul className="space-y-3">

            <li>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="rating" className="w-5 h-5 border-gray-300 text-emerald-500 focus:ring-emerald-500" />
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </div>
                <span className="text-sm text-gray-500">& Up</span>
              </label>
            </li>

            <li>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="rating" className="w-5 h-5 border-gray-300 text-emerald-500 focus:ring-emerald-500" />
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </div>
                <span className="text-sm text-gray-500">& Up</span>
              </label>
            </li>

          </ul>
        </div>

        {/* Colors */}
        <div className="mb-6 pb-6 border-b border-gray-100">
          <h4 className="font-semibold text-gray-900 mb-4">Colors</h4>
          <div className="flex flex-wrap gap-2">
            <button className="w-8 h-8 rounded-full bg-black border-2 border-gray-300 hover:border-emerald-500 transition-colors ring-2 ring-offset-2 ring-emerald-500"></button>
            <button className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 hover:border-emerald-500 transition-colors"></button>
            <button className="w-8 h-8 rounded-full bg-red-500 border-2 border-transparent hover:border-emerald-500 transition-colors"></button>
            <button className="w-8 h-8 rounded-full bg-blue-500 border-2 border-transparent hover:border-emerald-500 transition-colors"></button>
            <button className="w-8 h-8 rounded-full bg-emerald-500 border-2 border-transparent hover:border-emerald-500 transition-colors"></button>
            <button className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-transparent hover:border-emerald-500 transition-colors"></button>
            <button className="w-8 h-8 rounded-full bg-purple-500 border-2 border-transparent hover:border-emerald-500 transition-colors"></button>
            <button className="w-8 h-8 rounded-full bg-pink-500 border-2 border-transparent hover:border-emerald-500 transition-colors"></button>
          </div>
        </div>

        {/* Sizes */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Sizes</h4>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:border-emerald-500 hover:text-emerald-600 transition-colors">
              XS
            </button>
            <button className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:border-emerald-500 hover:text-emerald-600 transition-colors">
              S
            </button>
            <button className="px-4 py-2 rounded-xl border-2 border-emerald-500 bg-emerald-50 text-sm font-medium text-emerald-600">
              M
            </button>
            <button className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:border-emerald-500 hover:text-emerald-600 transition-colors">
              L
            </button>
            <button className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:border-emerald-500 hover:text-emerald-600 transition-colors">
              XL
            </button>
            <button className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:border-emerald-500 hover:text-emerald-600 transition-colors">
              XXL
            </button>
          </div>
        </div>

      </div>
    </aside>
  )
}

export default ShopFilters