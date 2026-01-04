
const ProductCard = ({product}) => {

    const status = product.inStock? "Disponible": "Rupture"
    return (
        <div key={product.id} style={{width:'30%', backgroundColor:'lightgray', marginTop:'20px'}}>
            
            <img style={{width:'100%'}} src={product.image} />
            
            <div>
                <p>{product.name}</p>
                <p>{product.price} DH</p>
                <p>{product.category} DH</p>
                <p>{status}</p>
            </div>

        </div>
    )
}

export default ProductCard
