import React from "react";

function Hero (props) {
  return (
    <div className="hero">
      <header>
        <img src={props.loopstudios} alt="" />
        <button
          onClick={function () {
            props.setOpenMobileMenu((openMobileMenu) => !openMobileMenu);
            props.setBodyScroll(props.openMobileMenu);
          }}
          className={props.openMobileMenu ? "open" : "close"}
          id="mobile-menu"
        ></button>

        <div className="desktopMenu">
          <a>About</a>
          <a>Careers</a>
          <a>Events</a>
          <a>Products</a>
          <a>Support</a>
        </div>
      </header>
      <div className={props.openMobileMenu ? "menu" : "menu close"}>
        <a>About</a>
        <a>Careers</a>
        <a>Events</a>
        <a>Products</a>
        <a>Support</a>
      </div>
      <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
    </div>
  );
}

export default Hero;
  