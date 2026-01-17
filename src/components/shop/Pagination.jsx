const Pagination = () => {
  return (
    <div className="flex items-center justify-center mt-12">
      <nav className="flex items-center gap-1">

        {/* Previous */}
        <button className="flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Page 1 - Active */}
        <button className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500 text-white font-medium">
          1
        </button>

        {/* Page 2 */}
        <button className="flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors font-medium">
          2
        </button>

        {/* Page 3 */}
        <button className="flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors font-medium">
          3
        </button>

        {/* Dots */}
        <span className="flex items-center justify-center w-10 h-10 text-gray-400">
          ...
        </span>

        {/* Page 10 */}
        <button className="flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors font-medium">
          10
        </button>

        {/* Next */}
        <button className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </nav>
    </div>
  )
}

export default Pagination