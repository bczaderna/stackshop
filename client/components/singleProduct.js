import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {gettingSingleProduct} from '../store/productsReducer'
import {addedToCart, increasedQuantity} from '../store/cartReducer'

class SingleProduct extends Component {
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
    let idArr = this.props.cart.map(item => {
      return item.id
    })
    if (this.state.redirect) {
      if (idArr.includes(product.id)) {
        this.props.increasedQuantity(product)
      } else {
        this.props.addedToCart(product)
      }
      return <Redirect to="/" />
    }
  }

  render() {
    const {product} = this.props
    console.log("inventory is", product.inventory)

    if (!product.id) return <div>Loading...</div>
    else
      return (
        <div className="singleProduct">
          <h2>{product.name}</h2>
          <img src={product.imageUrl} />
          <div className="product-desc">"{product.description}"</div>
          <div>
            PRICE: ${product.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.00
          </div>
          {product.inventory === 1? <div>{`There is just one ${product.name} left! Buy now!`}</div>: null}
          
          {product.inventory <= 0? <div>{`We're sorry, ${product.name} has been so popular that it has sold out.`}</div>: 
          <div>
          {this.renderRedirect(product)}
          <button type="button" onClick={this.setRedirect}>
            Add to Bag
          </button>
          </div>}
          
        </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    product: state.products.selectedProduct,
    cart: state.cart.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    gettingSingleProduct: id => dispatch(gettingSingleProduct(id)),
    addedToCart: addedProduct => dispatch(addedToCart(addedProduct)),
    increasedQuantity: product => dispatch(increasedQuantity(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
