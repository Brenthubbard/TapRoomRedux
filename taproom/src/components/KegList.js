import React from "react";
import Keg from "./CurrentKegInfo";
import PropTypes from "prop-types";


function KegList(props) {
  return (
    <React.Fragment>
      {/* <hr /> */}
      {props.kegList.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          pintsLeft={keg.pintsLeft}
          key={index} />
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;