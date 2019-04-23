import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class OrderConfirmation extends Component {

  render () {
    console.log("order Num", this.props.orderNum)

    return (
    <div className="orderConfirmation">
      <h2>Your order has been recieved. Thank you for shopping with us!</h2>
      <h4>Your order number is: {this.props.orderNum}.</h4>
    </div>
    )

    }
}

const mapStateToProps = state => {
  return {
    orderNum: state.cart.orderNum
  }
}

export default connect(mapStateToProps, null)(OrderConfirmation)
