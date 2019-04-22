import React, {Component} from 'react'
import {connect} from 'react-redux'
import Navbar from './navbar'
import Cart from './cart'

// import ShippingInfoForm from './shippingInfoForm'
//import { PlaceAnOrder } from productsReducer

//In here we'll need all cart info displayed in a table on the Right side or on top
//We'll need a form for shipping info displayed on the left side or on bottom half

//can I just render the Cart component or do I need to re-write the Cart logic here?

//how do we get all the 'order' info to go into the placeAnOrder thunk? 

class ConfirmationPage extends Component {

    submitOrder() {
        this.props.placeAnOrder(order);
        //then display the confirmationView component
    }

    render() {
        //we need an onClick in here with a 'Place Order' button --> the click triggers submitOrder

        //do we need to be looping through the cart here so that the onClick gathers every item in the cart, and this turns into the 'order' parameter for placeOrder?
        //Or would I just make the parameter this.props.cart?

        return (
            // <Cart />
            // <ShippingInfoForm />

        )
    } 
}

const mapStateToProps = state => {
    return {
        cart: state.cart.cart,
        // products: state.products.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        placeAnOrder: (order) => {
            dispatch(placeAnOrder(order))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationPage)