import React, {Component} from 'react'
import {connect} from 'react-redux'
// import Navbar from './navbar'
import CartRow from './cartRow'

// to do:
// x add URL route to cart on routes.js file
// - add link functionality to checkout button
// x add quantity count to CartRow
// x add + and - buttons for quantity
// - update test specs
// - add ternary to display full cart or "your cart is empty"

class Cart extends Component {
  render() {
    const {itemsInBag} = this.props

    return (
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
            {itemsInBag.map(item => <CartRow key={item.id} item={item} />)}
          </tbody>
        </table>
        <div>
          YOUR TOTAL:
          {itemsInBag.reduce((totalPrice, item) => {
            return totalPrice + item.price
          })}
        </div>
        <button type="button">CHECKOUT</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    itemsInBag: state.cart.items
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     increasedQuantity: () => dispatch(increasedQuantity()),
//     decreasedQuantity: () => dispatch(decreasedQuantity()),

//   }
// }

export default connect(mapStateToProps)(Cart)
