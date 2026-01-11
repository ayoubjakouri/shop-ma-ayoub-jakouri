
const ProductCard = ({ product }) => {

    return (
        <div class="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden">

            <div class="bg-gray-100 flex items-center justify-center h-56">
                <img
                    src={product.image}
                    alt="Product"
                    class="h-44 object-contain"
                />
            </div>

            <div class="p-4">
                <h3 class="text-lg font-semibold line-clamp-2">
                    {product.title}
                </h3>

                <p class="text-sm text-gray-500 mt-1 capitalize">
                    {product.category}
                </p>

                <p class="text-sm text-gray-600 mt-2 line-clamp-3">
                    {product.description}
                </p>

                <div class="flex items-center justify-between mt-4">
                    <span class="text-xl font-bold text-gray-900">
                        $ {product.price}
                    </span>

                    <span class="text-sm text-gray-600">
                        ⭐ {product.rating.rate} <span class="text-gray-400">({product.rating.count})</span>
                    </span>
                </div>

                <button
                    class="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
                >
                    Add to Cart
                </button>
            </div>

        </div>

    )
}

export default ProductCard
