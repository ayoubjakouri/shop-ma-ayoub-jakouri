import { Link } from 'react-router-dom'
const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-emerald-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div className="space-y-6">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              New Collection 2024
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Discover Your
              <span className="text-emerald-500"> Perfect</span>
              <br />Style Today
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg max-w-md leading-relaxed">
              Explore thousands of products from top brands with the best prices. Fast delivery and easy returns guaranteed.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-black px-8 py-4 rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:shadow-emerald-200">
                <Link to='/shop'> Shop Now </Link> 
              </button>
              <button className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                  <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                Watch Video
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-10 pt-8 border-t border-gray-200 mt-8">
              <div>
                <p className="text-3xl font-bold text-gray-900">200+</p>
                <p className="text-sm text-gray-500">International Brands</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900">50k+</p>
                <p className="text-sm text-gray-500">Happy Customers</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900">10k+</p>
                <p className="text-sm text-gray-500">Quality Products</p>
              </div>
            </div>

          </div>

          {/* Right Content - Image */}
          <div className="relative">
            
            {/* Main Image */}
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600"
                alt="Shopping"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>

            {/* Floating Card - Discount */}
            <div className="absolute top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 z-20 animate-bounce">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">50%</p>
                  <p className="text-xs text-gray-500">Discount</p>
                </div>
              </div>
            </div>

            {/* Floating Card - Free Shipping */}
            <div className="absolute bottom-10 -left-10 bg-white rounded-2xl shadow-xl p-4 z-20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Free Shipping</p>
                  <p className="text-xs text-gray-500">On orders over $50</p>
                </div>
              </div>
            </div>

            {/* Floating Card - Rating */}
            <div className="absolute top-1/2 -right-6 bg-white rounded-2xl shadow-xl p-4 z-20">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img src="https://i.pravatar.cc/40?img=1" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="https://i.pravatar.cc/40?img=2" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="https://i.pravatar.cc/40?img=3" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="text-sm font-bold text-gray-900">4.9</span>
                  </div>
                  <p className="text-xs text-gray-500">50k+ Reviews</p>
                </div>
              </div>
            </div>

            {/* Background Shape */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-emerald-200 rounded-3xl -z-10"></div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default HeroSection