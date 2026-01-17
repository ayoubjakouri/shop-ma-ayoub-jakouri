const Breadcrumb = () => {
  return (
    <nav className="w-full bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <ol className="flex items-center gap-2 text-sm">
          
          {/* Home */}
          <li>
            <a href="#" className="text-gray-500 hover:text-emerald-600 transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </a>
          </li>

          {/* Separator */}
          <li>
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </li>

          {/* Shop */}
          <li>
            <a href="#" className="text-gray-500 hover:text-emerald-600 transition-colors">
              Shop
            </a>
          </li>

          {/* Separator */}
          <li>
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </li>

          {/* Current Page */}
          <li>
            <span className="text-gray-900 font-medium">Men's Clothing</span>
          </li>

        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumb