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
        <h1>Happy Mart</h1>
      </Link>
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <div>Welcome, {email}!</div>
            <Link to="/home">View Account</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
            <Link to="/cart">
              <img
                src="https://cdn0.iconfinder.com/data/icons/shopping-76/100/Artboard_18-512.png"
                width="30px"
              />
            </Link>
            {bagQuantity}
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}

            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/cart">
              <img
                src="https://cdn0.iconfinder.com/data/icons/shopping-76/100/Artboard_18-512.png"
                width="30px"
              />
              {bagQuantity}
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
