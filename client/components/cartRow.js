import React, {Component} from 'react'
// import {connect} from 'react-redux'

class CartRow extends Component {
  //   componentDidMount() {
  //     this.props.gettingAllProducts()
  //   }

  render() {
    const {item} = this.props

    return (
      <tr>
        <td>
          <img src={item.imageUrl} />
        </td>
        <td>{item.name}</td>
        <td>{/*Insert Quantity Here*/}</td>
        <td>
          <button type="button">Remove</button>
        </td>
        <td>{item.price}</td>
      </tr>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     itemsInBag: state.items
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increasedQuantity: () => dispatch(increasedQuantity()),
//     decreasedQuantity: () => dispatch(decreasedQuantity()),

//   }
// }

export default CartRow
