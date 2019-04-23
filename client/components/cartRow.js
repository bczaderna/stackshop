import React from 'react'

const CartRow = props => {
  let item = props.item
  let quantities = props.quantities
  console.log('PROPS!!!!!', props.item)

  return (
    <tr>
      <td>
        <img src={item.imageUrl} className="cart-item-img" />
      </td>
      <td>{item.name}</td>
      <td>
        <button type="button" onClick={props.decreasedQuantity}>
          -
        </button>
        {quantities[item.name]}
        <button type="button" onClick={props.increasedQuantity}>
          +
        </button>
      </td>
      <td>
        <button type="button" onClick={props.deletedFromCart}>
          Remove
        </button>
      </td>
      <td>${item.price}.00</td>
    </tr>
  )
}

export default CartRow
