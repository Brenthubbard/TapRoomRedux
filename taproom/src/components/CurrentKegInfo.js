import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <p><em>Name of Bev = {props.name}</em></p>
      <h3>Brand of Bev = {props.brand} </h3>
      <h3>Price of Bev = {props.price}</h3>
      <h3>Alcohol Content of Bev = {props.ac}</h3>
        <h3>Pints Left in Keg = {props.pintsLeft}</h3>
      <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string,
  price: PropTypes.string,
  ac: PropTypes.string,
  pintsLeft: PropTypes.string
}

export default Keg;