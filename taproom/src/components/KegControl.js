import React from 'react';
import NewKeg from './NewKeg';
import KegList from './KegList';
import KegDetails from "./KegDetails";
import EditForm from "./EditForm";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null,
      editing: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingToList = (newKegForm) => {
    const newMasterKegList = this.state.masterKegList.concat(newKegForm);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    });
  }
  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(Keg => Keg.id === id)[0];
    this.setState({ selectedKeg: selectedKeg });
  }

  handleDeletedKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(Keg => Keg.id !== id);
    this.setState({ masterKegList: newMasterKegList, selectedKeg: null });
  }


  handleEditClick = () => {
    this.setState({ editing: true })
  };


  handleEditingKegInList = (kegToEdit) => {
    const editedMasterKegList = this.setState.masterKegList
      .filter(Keg => Keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.state({
      masterKegList: editedMasterKegList,
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
        onClickingDelete={this.handleDeletingKeg}
        onClickingEdit={this.handleEditClick}
        onSubtractPint={this.handleSubtractPint} />

      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentVisibleState = <NewKeg onNewKegCreation={this.handleAddingNewKegToList} />;

    } else {
      currentVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "View List";
    }
    return (
      <React.Fragment>
        {currentVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;