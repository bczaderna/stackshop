import React, {Component} from 'react'
import {connect} from 'react-redux'
import Navbar from './navbar'
import Cart from './cart'

// import ShippingInfoForm from './shippingInfoForm'
import { placeAnOrder } from '../store/cartReducer'

<<<<<<< HEAD
//In here we'll need all cart info displayed in a table on the Right side or on top
//We'll need a form for shipping info displayed on the left side or on bottom half

//can I just render the Cart component or do I need to re-write the Cart logic here?

//how do we get all the 'order' info to go into the placeAnOrder thunk?
=======
>>>>>>> got post route to work, edited thunk and moved to cartReducer from productReducer, working on confirmationPage

class ConfirmationPage extends Component {

    submitOrder() {
        this.props.placeAnOrder(props.cart);
        //then display the confirmationView component
    }

    render() {
        
        return (
            // <Cart />
            // <ShippingInfoForm />
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        placeAnOrder: (cart) => {
            dispatch(placeAnOrder(props.cart))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationPage)
