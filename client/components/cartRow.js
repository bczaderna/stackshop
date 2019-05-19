import React from 'react'
import {Link} from 'react-router-dom'

const CartRow = props => {
  let item = props.item
  let quantities = props.quantities
  return (
    <tr className="cart-row">
      <td>
        <Link to={`/products/${item.id}`}>
          <img src={item.imageUrl} className="cart-item-img" />
        </Link>
      </td>
      <td>
        <Link to={`/products/${item.id}`}>{item.name}</Link>
      </td>
      <td>
        <button
          type="button"
          className="minus-quantity-button"
          onClick={() => props.decreasedQuantity(item)}
        >
          -
        </button>
        {quantities[item.name]}
        <button
          type="button"
          className="plus-quantity-button"
          onClick={() => props.increasedQuantity(item)}
        >
          +
        </button>
      </td>
      <td>
        <button type="button" onClick={() => props.deletedFromCart(item)}>
          Remove
        </button>
      </td>
      <td>${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.00</td>
    </tr>
  )
}

export default CartRow
