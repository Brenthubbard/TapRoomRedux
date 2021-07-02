import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <p><em>{props.name}</em></p>
      <h3>{props.brand} - {props.price}</h3>
      <h3>{props.alcoholContent} - {props.pintsLeft}</h3>
      <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  pintsLeft: PropTypes.string
};

export default Keg;