import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'


const Navbar = ({handleClick, isLoggedIn, email, quantities}) => {
  let bagQuantity = Object.values(quantities).reduce((totalQ, Q) => {
    return totalQ + Q
  }, 0)

  return (
    <div>
      <Link to="/">
        {/* <h1>HappyMart</h1> */}
        <div id='logo'>
        <img id='logo-image' src='https://i.imgur.com/2tn83wM.png'/></div>
      </Link>
      <nav>
        {isLoggedIn ? (
          <div>
            <div>Welcome, {email}!</div>
            <div className="allNavLinks">
              {/* The navbar will show these links after you log in */}
              <div className="navLinks">
                <Link to="/home">View Account</Link>
                <a href="#" onClick={handleClick}>
                  Logout
                </a>
                <Link to="/">Shop All</Link>
              </div>
              <Link to="/cart" className="cartLink">
                <img
                  src="https://cdn0.iconfinder.com/data/icons/shopping-76/100/Artboard_18-512.png"
                  className="cartIcon"
                />
                {bagQuantity}
              </Link>
            </div>
          </div>
        ) : (
          <div className="allNavLinks">
            {/* The navbar will show these links before you log in */}
            <div className="navLinks">
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
              <Link to="/">Shop All</Link>
            </div>
            <Link to="/cart" className="cartLink">
              <img
                src="https://cdn0.iconfinder.com/data/icons/shopping-76/100/Artboard_18-512.png"
                className="cartIcon"
              />
              <div className="bagQuantity">{bagQuantity}</div>
            </Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    email: state.user.email,
    quantities: state.cart.quantities
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
