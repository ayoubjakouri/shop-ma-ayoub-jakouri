
const SearchBar = () => {

    return (
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search product, brands, and more..."
            className="w-full bg-gray-50 border border-gray-200 rounded-full px-5 py-2.5 pl-12 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
          />
          <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
    )
}

export default SearchBar