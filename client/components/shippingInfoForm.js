import React, { Component } from "react";
import { connect } from "react-redux";

//make this a dumb component for now that just renders out a fake form ?

class ShippingInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addShippingInfo(this.state);
    this.setState({
      address: ''
    });
  }

  render() {
    return (
      <div>
        <form className="background" onSubmit={this.handleSubmit}>
          <br />
          <span className="section-title">Add Your Shipping Information Here :</span>
          <br />
          <br />
          <label className="label">
            Address:
            <input
              type="text"
              name="address"
              onChange={this.handleChange}
              value={this.state.address}
              required
            />
          </label>
          <br />

          <label className="label">
            Shipping Method:
            <input
              type="text"
              name="shippingmethod"
              onChange={this.handleChange}
              value={this.state.shippingmethod}
              required
            />
          </label>
          <br />

          <label className="label">
            More Shipping Stuff:
            <input
              type="text"
              name="moreshippingstuff"
              onChange={this.handleChange}
              value={this.state.moreshippingstuff}
            />
          </label>
          <br />
          <br />

          <button type="submit" className="label">
            Submit Shipping Info
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    //what needs to go here? Do I even need any piece of Redux state here?
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addShippingInfo: shippingInfo => dispatch(addShippingInfo(shippingInfo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShippingInfoForm);