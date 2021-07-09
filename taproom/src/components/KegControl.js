import React from 'react';
import NewKeg from './NewKeg';
import KegList from './KegList';
import KegDetails from "./KegDetails";
import EditForm from "./EditForm";
import { connect } from 'react-redux';
import PropTypes from "prop-types";



class KegControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      // formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  handleAddingToList = (newKegForm) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, alcoholContent } = newKegForm;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }
  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({ selectedKeg: selectedKeg });
  }

  handleDeletedKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action);
    this.setState({ selectedKeg: null });
  }


  handleEditClick = () => {
    this.setState({ editing: true })
  };


  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const { id, names, brand, price, alcoholContent } = kegToEdit;
    const action = {
      type: 'ADD_TICKET',
      id: id,
      names: names,
      brand: brand,
      price: price,
      alcoholContent:  alcoholContent
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }
  handleSubtractPint = (id) => {
    const selectedKeg = this.state.masterKegList.filter(Keg => Keg.id === id)[0];

    if (selectedKeg.pint > 0) {
      selectedKeg.pint -= 1;
      this.setState({ selectedKeg: selectedKeg });
    }
  }

  render() {

    let currentVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {

      currentVisibleState = <EditForm Keg ={this.state.selectedKeg} onEditKeg={this.handleEditingKegInList} />
      buttonText = "Return to Keg List";

    } else if (this.state.selectedKeg != null) {
      currentVisibleState = <KegDetails Keg={this.state.selectedKeg}
        onClickingDelete={this.handleDeletedKeg}
        onClickingEdit={this.handleEditClick}
        onSubtractPint={this.handleSubtractPint} />

      buttonText = "Return to Keg List";
    } else if (this.props.formVisibleOnPage) {
      currentVisibleState = <NewKeg onNewKegCreation={this.handleAddingToList} />;

    } else {
      currentVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Create New Keg";
    }
    return (
      <React.Fragment>
        {currentVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}
KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;