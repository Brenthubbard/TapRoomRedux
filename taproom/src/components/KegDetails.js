import React from "react";
import PropTypes from "prop-types";

function KegDetails(props) {

  const { KegDetails, onClickingDelete, onClickingEdit, onSubtractPint } = props;

  return (
    <React.Fragment>
      <p><em>Name of Bev = {props.Keg.name}</em></p>
      <h3>Brand of Bev = {props.Keg.brand} </h3>
      <h3>Price of Bev = {props.Keg.price}</h3>
      <h3>Alcohol Content of Bev = {props.Keg.ac}</h3>
      <h3>Pints Left in Keg = {props.Keg.pint}</h3>


      <button onClick={() => onClickingDelete(KegDetails.id)}>Remove Item</button>
      <button onClick={() => onSubtractPint(KegDetails.id)}>Purchased Pint</button>
      <button onClick={() => onClickingEdit(KegDetails.id)}>Edit Keg Details</button>

      <hr />
    </React.Fragment>
  );
}

KegDetails.propTypes = {

  Keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onSubtractPint: PropTypes.func,


  // name: PropTypes.string.isRequired,
  // brand: PropTypes.string,
  // price: PropTypes.string,
  // ac: PropTypes.string,
  // pint: PropTypes.string
}

export default KegDetails;