import React from "react";
import tapRoom from "./../img/tapRoom.jpg";

function Header() {
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={tapRoom} alt="An image of tickets" />
    </React.Fragment>
  );
}

export default Header;