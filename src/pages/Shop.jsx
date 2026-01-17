import Breadcrumb from '../components/shop/Breadcrumb'
import ShopHeader from '../components/shop/ShopHeader'
import ShopFilters from '../components/shop/ShopFilters'
import ShopToolbar from '../components/shop/ShopToolbar'
import ProductsGrid from '../components/shop/ProductsGrid'
import Pagination from '../components/shop/Pagination'

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Shop Header */}
        <ShopHeader />

        {/* Content Grid - Sidebar + Products */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar Filters */}
          <ShopFilters />

          {/* Products Section */}
          <div className="flex-1">

            {/* Toolbar */}
            <ShopToolbar />

            {/* Products Grid */}
            <ProductsGrid />

            {/* Pagination */}
            <Pagination />

          </div>

        </div>

      </div>

    </div>
  )
}

export default ShopPage