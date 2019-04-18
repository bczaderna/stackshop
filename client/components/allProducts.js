import React, { Component } from 'react';
import {connect} from 'react-redux';
import { gettingAllProducts} from '../store/productsReducer'
import ProductCard from './productCard'

class AllProducts extends Component {
    
    componentDidMount() {
        this.props.gettingAllProducts();
    }

    render() {
        const {products} = this.props;
        //add ternary for if inventory= 0, render ...not found page? / change something in css?

        localStorage.setItem('cat', 'meow')

        return (
            <div>
                {products.map(product => (
                    <ProductCard key={product.id} product={product}/> 
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        gettingAllProducts: () => dispatch (gettingAllProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)