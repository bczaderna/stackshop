import React, {Component} from 'react'
import {connect} from 'react-redux'
import CartRow from './cartRow'
import EmptyCart from './emptyCart'
import {
  increasedQuantity,
  decreasedQuantity,
  deletedFromCart,
  placeAnOrder
} from '../store/cartReducer'
import ShippingInfoForm from './shippingInfoForm'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inCheckout: false
    }

    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick() {
    this.setState({inCheckout: true})
  }

  render() {
    const itemsInBag = this.props.itemsInBag

    return itemsInBag.length === 0 ? (
      <EmptyCart />
    ) : (
      <div id="cartComponent">
        <table id="cart">
          <tbody>
            <tr id="table-header" className="cart-row">
              <td>ITEM</td>
              <td>NAME</td>
              <td>QTY</td>
              <td>ACTIONS</td>
              <td>PRICE</td>
            </tr>
            {itemsInBag.map(item => (
              <CartRow
                key={item.id}
                item={item}
                quantities={this.props.quantities}
                increasedQuantity={this.props.increasedQuantity}
                decreasedQuantity={this.props.decreasedQuantity}
                deletedFromCart={this.props.deletedFromCart}
              />
            ))}
          </tbody>
        </table>
        <div className="checkoutSection">
          <div className="cartTotal">
            YOUR TOTAL: $
            {itemsInBag
              .reduce((totalPrice, item) => {
                return (
                  totalPrice + item.price * this.props.quantities[item.name]
                )
              }, 0)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.00
          </div>
          {this.state.inCheckout ? (
            <div>
              <ShippingInfoForm />
              <button
                type="button"
                onClick={async () => {
                  await this.props.placeAnOrder(this.props.cart)
                  this.props.history.push({
                    pathname: '/confirmation'
                  })
                }}
              >
                Submit Order
              </button>
            </div>
          ) : (
            <button type="button" onClick={() => this.handleButtonClick()}>
              Checkout
            </button>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    itemsInBag: state.cart.cart,
    quantities: state.cart.quantities
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increasedQuantity: product => dispatch(increasedQuantity(product)),
    decreasedQuantity: product => dispatch(decreasedQuantity(product)),
    deletedFromCart: deletedProduct =>
      dispatch(deletedFromCart(deletedProduct)),
    placeAnOrder: cart => {
      dispatch(placeAnOrder(cart))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
