import React from 'react'

const CartRow = props => {
  let item = props.item
  let quantities = props.quantities
  return (
    <tr>
      <td>
        <img src={item.imageUrl} className="cart-item-img" />
      </td>
      <td>{item.name}</td>
      <td>
        <button type="button" onClick={() => props.decreasedQuantity(item)}>
          -
        </button>
        {quantities[item.name]}
        <button type="button" onClick={() => props.increasedQuantity(item)}>
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
