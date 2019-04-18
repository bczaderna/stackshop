import React, { Component } from 'react';
import {connect} from 'react-redux';
import { gettingSingleProduct} from '../store/productsReducer'

class SingleProduct extends Component {
    
    //On Tuesday, get id from React Router using req.params.match...? then use id as an argument in the thunk
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.gettingSingleProduct(id);
    }

    render() {
        //console.log(this.props)
        const {product} = this.props
        
        if (!product.id) return <div>Loading...</div>
        else return (
            <div>
                <h2>{product.name}</h2>
                <p>{text}</p>
                <img src={product.imageUrl} />
                <button type="button">Add to Cart</button>
            </div>
        )
    }
}

//addToCart(state.product)

const mapStateToProps = state => {
    return {
        product: state.products.selectedProduct
    }
}

const mapDispatchToProps = dispatch => {
    return {
        gettingSingleProduct: (id) => dispatch (gettingSingleProduct(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)