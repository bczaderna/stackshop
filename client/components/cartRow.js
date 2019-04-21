import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  increasedQuantity,
  decreasedQuantity,
  deletedFromCart
} from '../store/cartReducer'

class CartRow extends Component {
  //   componentDidMount() {
  //     this.props.gettingAllProducts()
  //   }

  render() {
    // how do these props get passed from separate places?
    const {item} = this.props
    const quantities = this.props.quantities

    return (
      <tr>
        <td>
          <img src={item.imageUrl} className="cart-item-img" />
        </td>
        <td>{item.name}</td>
        <td>
          <button type="button" onClick={decreasedQuantity}>
            -
          </button>
          {quantities[item.name]}
          <button type="button" onClick={increasedQuantity}>
            +
          </button>
        </td>
        <td>
          <button type="button" onClick={deletedFromCart}>
            Remove
          </button>
        </td>
        <td>{item.price}</td>
      </tr>
    )
  }
}

const mapStateToProps = state => {
  return {
    quantities: state.quantities
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increasedQuantity: () => dispatch(increasedQuantity()),
    decreasedQuantity: () => dispatch(decreasedQuantity()),
    deletedFromCart: () => dispatch(deletedFromCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartRow)
