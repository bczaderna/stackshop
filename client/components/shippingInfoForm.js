import React, {Component} from 'react'
import {connect} from 'react-redux'

//make this a dumb component for now that just renders out a fake form ?

class ShippingInfoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      streetName: '',
      city: '',
      state: '',
      zipCode: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.addShippingInfo(this.state)
    this.setState({
      streetName: '',
      city: '',
      state: '',
      zipCode: ''
    })
  }

  render() {
    return (
      <div>
        <form className="background" onSubmit={this.handleSubmit}>
          <br />
          <span className="section-title">
            Add Your Shipping Information Here:
          </span>
          <br />
          <br />
          <label className="label">
            Street Address:
            <input
              type="text"
              name="streetName"
              onChange={this.handleChange}
              value={this.state.streetName}
              required
            />
          </label>
          <br />

          <label className="label">
            City:
            <input
              type="text"
              name="city"
              onChange={this.handleChange}
              value={this.state.city}
              required
            />
          </label>
          <br />

          <label className="label">
            State:
            <input
              type="text"
              name="state"
              onChange={this.handleChange}
              value={this.state.state}
            />
          </label>
          <br />

          <label className="label">
            Zip Code:
            <input
              type="text"
              name="zipCode"
              onChange={this.handleChange}
              value={this.state.zipCode}
            />
          </label>
          <br />

          <br />

          {/* <button type="submit" className="label">
            Submit Shipping Info
          </button> */}
        </form>
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     //saving this for later when we want to add shipping info to the database
//     addShippingInfo: shippingInfo => dispatch(addShippingInfo(shippingInfo))
//   };
// };

export default connect(null, null)(ShippingInfoForm)
