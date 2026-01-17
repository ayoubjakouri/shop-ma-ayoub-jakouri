const BestSellingStoreSection = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          
          {/* Left Side - Title */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Best Selling Stores</h2>
              <p className="text-gray-500 text-sm">Top rated stores with quality products</p>
            </div>
          </div>

          {/* Right Side - View All */}
          <button className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
            View All Stores
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

        </div>

        {/* Stores Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Store Card 1 */}
          <div className="group bg-white rounded-3xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
            
            {/* Store Header */}
            <div className="flex items-start justify-between mb-4">
              {/* Store Logo */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop" 
                  alt="Fashion Store" 
                  className="w-16 h-16 rounded-2xl object-cover"
                />
                {/* Verified Badge */}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              
              {/* Follow Button */}
              <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-gray-700 text-xs font-medium rounded-full transition-colors">
                Follow
              </button>
            </div>

            {/* Store Info */}
            <div className="mb-4">
              <h3 className="font-semibold text-gray-900 text-lg mb-1">Fashion Hub</h3>
              <p className="text-gray-500 text-sm line-clamp-2">Premium fashion & accessories for men and women</p>
            </div>

            {/* Store Stats */}
            <div className="flex items-center gap-4 mb-4">
              {/* Rating */}
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span className="text-sm font-medium text-gray-900">4.9</span>
              </div>
              
              {/* Divider */}
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              
              {/* Products */}
              <span className="text-sm text-gray-500">2.5k+ Products</span>
              
              {/* Divider */}
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              
              {/* Followers */}
              <span className="text-sm text-gray-500">15k Followers</span>
            </div>

            {/* Product Thumbnails */}
            <div className="flex items-center gap-2">
              <img 
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=80&h=80&fit=crop" 
                alt="Product" 
                className="w-14 h-14 rounded-xl object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=80&h=80&fit=crop" 
                alt="Product" 
                className="w-14 h-14 rounded-xl object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=80&h=80&fit=crop" 
                alt="Product" 
                className="w-14 h-14 rounded-xl object-cover"
              />
              <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center">
                <span className="text-xs font-medium text-gray-500">+99</span>
              </div>
            </div>

          </div>

          {/* Store Card 2 */}
          <div className="group bg-white rounded-3xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
            
            <div className="flex items-start justify-between mb-4">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop" 
                  alt="Electronics Store" 
                  className="w-16 h-16 rounded-2xl object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <button className="px-4 py-2 bg-gray-100 hover:bg-emerald-500 hover:text-white text-gray-700 text-xs font-medium rounded-full transition-colors">
                Follow
              </button>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-900 text-lg mb-1">TechZone</h3>
              <p className="text-gray-500 text-sm line-clamp-2">Latest gadgets & electronics with warranty</p>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span className="text-sm font-medium text-gray-900">4.8</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <span className="text-sm text-gray-500">1.8k+ Products</span>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <span className="text-sm text-gray-500">12k Followers</span>
            </div>

            <div className="flex items-center gap-2">
              <img 
                src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=80&h=80&fit=crop" 
                alt="Product" 
                className="w-14 h-14 rounded-xl object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80&h=80&fit=crop" 
                alt="Product" 
                className="w-14 h-14 rounded-xl object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80&h=80&fit=crop" 
                alt="Product" 
                className="w-14 h-14 rounded-xl object-cover"
              />
              <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center">
                <span className="text-xs font-medium text-gray-500">+75</span>
              </div>
            </div>

          </div>

          {/* Store Card 3 */}
          <div className="group bg-white rounded-3xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
            
            <div className="flex items-start justify-between mb-4">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100&h=100&fit=crop" 
                  alt="Jewelry Store" 
                  className="w-16 h-16 rounded-2xl object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <button className="px-4 py-2 bg-gray-100 hover:bg-emerald-500 hover:text-white text-gray-700 text-xs font-medium rounded-full transition-colors">
                Follow
              </button>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-900 text-lg mb-1">Golden Gems</h3>
              <p className="text-gray-500 text-sm line-clamp-2">Luxury jewelry & diamond collections</p>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span className="text-sm font-medium text-gray-900">4.9</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <span className="text-sm text-gray-500">850+ Products</span>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <span className="text-sm text-gray-500">8k Followers</span>
            </div>

            <div className="flex items-center gap-2">
              <img 
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=80&h=80&fit=crop" 
                alt="Product" 
                className="w-14 h-14 rounded-xl object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=80&h=80&fit=crop" 
                alt="Product" 
                className="w-14 h-14 rounded-xl object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=80&h=80&fit=crop" 
                alt="Product" 
                className="w-14 h-14 rounded-xl object-cover"
              />
              <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center">
                <span className="text-xs font-medium text-gray-500">+45</span>
              </div>
            </div>

          </div>

          {/* Store Card 4 */}
          <div className="group bg-white rounded-3xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
            
            <div className="flex items-start justify-between mb-4">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=100&h=100&fit=crop" 
                  alt="Women's Store" 
                  className="w-16 h-16 rounded-2xl object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <button className="px-4 py-2 bg-gray-100 hover:bg-emerald-500 hover:text-white text-gray-700 text-xs font-medium rounded-full transition-colors">
                Follow
              </button>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-900 text-lg mb-1">Style Queen</h3>
              <p className="text-gray-500 text-sm line-clamp-2">Trendy women's fashion & lifestyle</p>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span className="text-sm font-medium text-gray-900">4.7</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <span className="text-sm text-gray-500">3.2k+ Products</span>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <span className="text-sm text-gray-500">22k Followers</span>
            </div>

            <div className="flex items-center gap-2">
              <img 
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=80&h=80&fit=crop" 
                alt="Product" 
                className="w-14 h-14 rounded-xl object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=80&h=80&fit=crop" 
                alt="Product" 
                className="w-14 h-14 rounded-xl object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=80&h=80&fit=crop" 
                alt="Product" 
                className="w-14 h-14 rounded-xl object-cover"
              />
              <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center">
                <span className="text-xs font-medium text-gray-500">+120</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default BestSellingStoreSection