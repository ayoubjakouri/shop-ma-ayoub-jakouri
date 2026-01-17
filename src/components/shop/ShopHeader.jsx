const ShopHeader = () => {
  return (
    <div className="mb-8">
      
      {/* Title & Description */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Shop All Products
          </h1>
          <p className="text-gray-500">
            Discover our collection of premium products
          </p>
        </div>

        {/* Results Count */}
        <p className="text-sm text-gray-500">
          Showing <span className="font-semibold text-gray-900">1-24</span> of <span className="font-semibold text-gray-900">150</span> products
        </p>

      </div>

    </div>
  )
}

export default ShopHeader