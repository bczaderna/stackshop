import React, {Component} from 'react'
import {connect} from 'react-redux'
import Navbar from './navbar'
import CartRow from './cartRow'

class Cart extends Component {
  //   componentDidMount() {
  //     this.props.gettingAllProducts()
  //   }

  render() {
    const {itemsInBag} = this.props

    return (
      <div>
        <Navbar />
        {itemsInBag.map(item => <CartRow key={item.id} item={item} />)}
        <div>
          Your total:
          {itemsInBag.reduce((totalPrice, item) => {
            return totalPrice + item.price
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    itemsInBag: state.items
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     increasedQuantity: () => dispatch(increasedQuantity()),
//     decreasedQuantity: () => dispatch(decreasedQuantity()),

//   }
// }

export default connect(mapStateToProps)(Cart)
