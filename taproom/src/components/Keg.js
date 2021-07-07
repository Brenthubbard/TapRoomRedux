import React from "react";
import PropTypes from "prop-types";
import KegDetail from "./KegDetails"

function Keg(props) {
  return (

    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
      <h3>{props.name}</h3>
      <h3>{props.brand}</h3>
      <h3>{props.price}</h3>
      <h3>{props.ac}</h3>
        <h3>{props.pints}</h3>
      </div>
    </React.Fragment>
  );
}
KegDetail.propTypes = {
  keg: PropTypes.object
}

Keg.prototype = {
  whenKegIsClicked: PropTypes.func,
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  ac: PropTypes.number,
  pints: PropTypes.number,
  id: PropTypes.string,
};

export default Keg;