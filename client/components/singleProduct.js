import React, { Component } from 'react';
import {connect} from 'react-redux';
import { gettingSingleProduct} from '../store/productsReducer'

class AllProducts extends Component {
    
    //On Tuesday, get id from React Router using req.params.match...? then use id as an argument in the thunk
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.gettingSingleProduct(id);
    }

    render() {
        const {product} = this.props;
        
        return (
            <div>
                {product.name}
            </div>
        )
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(singleProduct)