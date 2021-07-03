import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
// import ReusableForm from "./ReusableForm";

function NewKegForm(props) {
  const keg = {};
  keg.id = v4();

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
   
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      pint: 124,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Beverage Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand of Bev' />
        <input
          type='text'
          name='price'
          placeholder='Price' />
        <input
          type='text'
          name='alcoholContent'
          placeholder='AlcoholContent' />
        <input
          name='pintsLeft'
          placeholder='Pints left in Keg' />
        <button type='submit'>Add Keg to List</button>
      </form>
    </React.Fragment>
  );
}
NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};


export default NewKegForm;