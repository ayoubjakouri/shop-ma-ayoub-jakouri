import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

const MainNav = ({categories, categorie, updateCategorie}) => {
  return (
    <div className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight cursor-pointer">
          <Link to='/'>Shop<span className="text-emerald-500">Now</span></Link>
        </div>

        {/* Category Dropdown */}
        <div className="relative">
          <select 
            value={categorie}
            onChange={e => updateCategorie(e.target.value)}
            className="appearance-none bg-gray-50 border border-gray-200 rounded-full px-5 py-2.5 pr-10 text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500">
            {categories.map(cat => <option>{cat}</option>)}
            
          </select>
          <svg className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Search Bar */}
        <SearchBar />

        {/* Action Icons */}
        <div className="flex items-center gap-2">

          {/* Wishlist */}
          <button className="relative p-2.5 rounded-full hover:bg-gray-100 transition-all">
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>

          {/* Cart */}
          <button className="relative p-2.5 rounded-full hover:bg-gray-100 transition-all">
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-emerald-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          {/* Notification */}
          <button className="relative p-2.5 rounded-full hover:bg-gray-100 transition-all">
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Divider */}
          <div className="w-px h-8 bg-gray-200 mx-2"></div>

          {/* User Profile */}
          <button className="flex items-center gap-3 py-1.5 px-3 rounded-full hover:bg-gray-100 transition-all">
            <img
              src="https://i.pravatar.cc/100"
              alt="User"
              className="w-9 h-9 rounded-full object-cover ring-2 ring-gray-100"
            />
            <div className="text-left hidden lg:block">
              <p className="text-sm font-semibold text-gray-800">John Doe</p>
              <p className="text-xs text-gray-500">Premium Member</p>
            </div>
            <svg className="w-4 h-4 text-gray-500 hidden lg:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

        </div>

      </div>
    </div>
  )
}

export default MainNav