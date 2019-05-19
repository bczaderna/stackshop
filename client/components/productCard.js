import React from 'react'
import {Link} from 'react-router-dom'

const ProductCard = (props) => {

const product = props.product

return (
    <div className="productCard">
        
        <Link to={`/products/${product.id}`}>
        <img src={product.imageUrl} width="150" />
        <p>{product.name}</p>
        </Link>
    </div>
)

}

export default ProductCard