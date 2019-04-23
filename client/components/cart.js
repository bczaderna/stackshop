import React, {Component} from 'react'
import {connect} from 'react-redux'
import CartRow from './cartRow'
import EmptyCart from './emptyCart'
import {
  increasedQuantity,
  decreasedQuantity,
  deletedFromCart
} from '../store/cartReducer'

class Cart extends Component {
  render() {
    const itemsInBag = this.props.itemsInBag

    return itemsInBag.length === 0 ? (
      <EmptyCart />
    ) : (
      <div>
        <table id="cart">
          <tbody>
            <tr className="table-header">
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
        <div>
          YOUR TOTAL: $
          {itemsInBag
            .reduce((totalPrice, item) => {
              return totalPrice + item.price * this.props.quantities[item.name]
            }, 0)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.00
        </div>
        <button type="button">CHECKOUT</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    itemsInBag: state.cart.cart,
    quantities: state.cart.quantities
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increasedQuantity: product => dispatch(increasedQuantity(product)),
    decreasedQuantity: product => dispatch(decreasedQuantity(product)),
    deletedFromCart: deletedProduct => dispatch(deletedFromCart(deletedProduct))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
