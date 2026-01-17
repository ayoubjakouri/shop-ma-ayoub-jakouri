const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="text-3xl font-bold tracking-tight mb-4">
              Shop<span className="text-emerald-500">Now</span>
            </div>
            
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Your one-stop destination for all your shopping needs. Quality products, best prices, and fast delivery.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-full px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <button className="bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-2.5 rounded-full text-sm font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {/* Facebook */}
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              
              {/* Twitter/X */}
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              {/* YouTube */}
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              
              {/* TikTok */}
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white font-semibold mb-5">Shop</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Best Sellers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Flash Sale</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Electronics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Fashion</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Home & Garden</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold mb-5">Customer Service</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Track Order</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Payment Methods</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-5">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Press & Media</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Sell on BeliBeli</a></li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h4 className="text-white font-semibold mb-5">Download App</h4>
            
            {/* App Store */}
            <a href="#" className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 rounded-xl px-4 py-3 mb-3 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div>
                <p className="text-[10px] text-gray-400">Download on the</p>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </a>

            {/* Google Play */}
            <a href="#" className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 rounded-xl px-4 py-3 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
              </svg>
              <div>
                <p className="text-[10px] text-gray-400">Get it on</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © 2024 <span className="text-white font-semibold">BeliBeli</span>. All rights reserved.
            </p>

            {/* Payment Methods */}
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-sm mr-2">We accept:</span>
              
              {/* Visa */}
              <div className="bg-white rounded-md px-2 py-1">
                <svg className="h-6 w-10" viewBox="0 0 50 16" fill="none">
                  <path d="M19.5 15.5L21.5 0.5H25L23 15.5H19.5Z" fill="#1434CB"/>
                  <path d="M35.5 0.8C34.7 0.5 33.5 0.2 32 0.2C28.5 0.2 26 2 26 4.7C26 6.7 28 7.8 29.5 8.5C31 9.2 31.5 9.7 31.5 10.4C31.5 11.4 30.3 11.9 29.2 11.9C27.6 11.9 26.8 11.7 25.5 11.1L25 10.9L24.5 14.1C25.5 14.5 27.2 14.9 29 14.9C32.7 14.9 35.1 13.1 35.1 10.2C35.1 8.6 34.1 7.4 31.9 6.4C30.5 5.7 29.7 5.2 29.7 4.5C29.7 3.9 30.4 3.2 31.9 3.2C33.2 3.2 34.1 3.5 34.8 3.8L35.2 4L35.5 0.8Z" fill="#1434CB"/>
                  <path d="M41.5 0.5C40.6 0.5 39.9 0.8 39.5 1.7L34 15.5H37.7L38.4 13.3H42.9L43.3 15.5H46.5L43.8 0.5H41.5ZM39.3 10.5C39.6 9.6 40.8 6.2 40.8 6.2C40.8 6.2 41.1 5.3 41.3 4.7L41.5 6.1C41.5 6.1 42.3 9.7 42.5 10.5H39.3Z" fill="#1434CB"/>
                  <path d="M16.5 0.5L13 10.7L12.7 9.2C12 7 10 4.5 7.7 3.2L10.8 15.4H14.5L20.2 0.5H16.5Z" fill="#1434CB"/>
                  <path d="M9.5 0.5H4L4 0.8C8.3 1.8 11.2 4.5 12.2 7.6L11.1 1.8C10.9 1 10.3 0.6 9.5 0.5Z" fill="#F9A533"/>
                </svg>
              </div>

              {/* Mastercard */}
              <div className="bg-white rounded-md px-2 py-1">
                <svg className="h-6 w-10" viewBox="0 0 50 30" fill="none">
                  <circle cx="18" cy="15" r="12" fill="#EB001B"/>
                  <circle cx="32" cy="15" r="12" fill="#F79E1B"/>
                  <path d="M25 5.5C27.5 7.5 29 10.5 29 14C29 17.5 27.5 20.5 25 22.5C22.5 20.5 21 17.5 21 14C21 10.5 22.5 7.5 25 5.5Z" fill="#FF5F00"/>
                </svg>
              </div>

              {/* PayPal */}
              <div className="bg-white rounded-md px-2 py-1">
                <svg className="h-6 w-10" viewBox="0 0 50 16" fill="none">
                  <path d="M17 4C17 2 15.5 0.5 13 0.5H7.5L5 15.5H8L8.7 11H11.5C15.2 11 17 8.5 17 5.5V4Z" fill="#003087"/>
                  <path d="M11 3.5H9L8.3 8H10.5C12.5 8 13.5 7 13.5 5.5C13.5 4 12.5 3.5 11 3.5Z" fill="white"/>
                  <path d="M27 4C27 2 25.5 0.5 23 0.5H17.5L15 15.5H18L18.7 11H21.5C25.2 11 27 8.5 27 5.5V4Z" fill="#0070E0"/>
                  <path d="M21 3.5H19L18.3 8H20.5C22.5 8 23.5 7 23.5 5.5C23.5 4 22.5 3.5 21 3.5Z" fill="white"/>
                </svg>
              </div>

              {/* CMI */}
              <div className="bg-white rounded-md px-3 py-1.5">
                <span className="text-xs font-bold text-blue-900">CMI</span>
              </div>

              {/* Cash */}
              <div className="bg-gray-800 rounded-md px-3 py-1.5">
                <span className="text-xs font-medium text-gray-300">Cash</span>
              </div>

            </div>

          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer