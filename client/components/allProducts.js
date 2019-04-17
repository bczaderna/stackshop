import React, { Component } from 'react';
import {connect} from 'react-redux';
import { gettingAllProducts} from '../store/productsReducer'
import dummyData from '../../server/db/productDummyData'

class AllProducts extends Component {
    
    componentDidMount() {
        this.props.gettingAllProducts();
    }

    render() {
        // const {products} = this.props;
        //add ternary for if inventory= 0, render ...not found page? / change something in css?

        const products = dummyData;
        return (
            <div>
                {products.map(product => (
                    <div key={product.id}>
                    <h2>{product.name}</h2>
                    </div>
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