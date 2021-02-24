import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push("/profile")}
          className="nav__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gidhok4ETDD2Q-_O7PTcHOuLSuUB-nYSmA&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
