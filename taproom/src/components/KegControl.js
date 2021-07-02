import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formShowingOnPage: !prevState.formShowingOnPage
    }));
  }
  handleAddingNewKegToKegList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formShowingOnPage: false
    });
  }
  render() {
    let currentScreenState = null;
    let buttonText = null;
    if (this.state.formShowingOnPage) {
      currentScreenState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToKegList} />;
      buttonText = "Return to Keg List";
    } else {
      currentScreenState = <KegList kegList={this.state.newMasterKegList} />;
      buttonText = "Add another Keg"
    }
    return (
      <React.Fragment>
        {currentScreenState}
        <button onClick={this.handle}>{buttonText}</button>{ }
      </React.Fragment>
    );
  }
}

export default KegControl; 