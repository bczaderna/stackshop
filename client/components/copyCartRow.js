import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  increasedQuantity,
  decreasedQuantity,
  deletedFromCart
} from '../store/cartReducer'

class CartRow extends Component {
  render() {
    let item = this.props.item
    let quantities = this.props.quantities
    console.log('PROPS!!!!!', this.props)

    return (
      <tr>
        <td>
          <img src={item.imageUrl} className="cart-item-img" />
        </td>
        <td>{item.name}</td>
        <td>
          <button
            type="button"
            onClick={() => this.props.decreasedQuantity(item)}
          >
            -
          </button>
          {quantities[item.name]}
          <button
            type="button"
            onClick={() => this.props.increasedQuantity(item)}
          >
            +
          </button>
        </td>
        <td>
          <button
            type="button"
            onClick={() => this.props.deletedFromCart(item)}
          >
            Remove
          </button>
        </td>
        <td>${item.price}.00</td>
      </tr>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartRow)
