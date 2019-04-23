import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {gettingSingleProduct} from '../store/productsReducer'
import {addedToCart} from '../store/cartReducer'

class SingleProduct extends Component {
  //On Tuesday, get id from React Router using req.params.match...? then use id as an argument in the thunk

  state = {
    redirect: false
  }

  componentDidMount() {
    let id = this.props.match.params.id
    this.props.gettingSingleProduct(id)
  }
  setRedirect = () => {
    this.setState({redirect: true})
  }

  renderRedirect = product => {
    if (this.state.redirect) {
      this.props.addedToCart(product)
      return <Redirect to="/" />
    }
  }

  render() {
    const {product, cart} = this.props

    if (!product.id) return <div>Loading...</div>
    else
      return (
        <div>
          <h2>{product.name}</h2>
          <img src={product.imageUrl} />

          {this.renderRedirect(product)}
          <button type="button" onClick={this.setRedirect}>
            Add to Bag
          </button>
        </div>
      )
  }
}

//addToCart(state.product)

const mapStateToProps = state => {
  return {
    product: state.products.selectedProduct,
    cart: state.cart.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    gettingSingleProduct: id => dispatch(gettingSingleProduct(id)),
    addedToCart: addedProduct => dispatch(addedToCart(addedProduct))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
