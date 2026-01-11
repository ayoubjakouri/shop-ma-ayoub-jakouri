import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

function ProductsList() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => { if (!res.ok) throw new Error('Erreur'); return res.json(); })
            .then(data => { setProducts(data); setLoading(false); })
            .catch(err => { setError(err.message); setLoading(false); });
    }, []);
    if (loading) return <p>Chargement...</p>;
    if (error) return <p style={{ color: 'red' }}>Erreur: {error}</p>;

    return (
        <div class="max-w-7xl mx-auto px-4 py-10">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => {
                    return (
                        <ProductCard product={product} />
                    )
                })}
            </div>
        </div>
    )

}
export default ProductsList;