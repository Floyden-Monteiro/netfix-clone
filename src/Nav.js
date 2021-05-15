import React, { useState, useEffect } from "react";
import "./Nav.css";

const Nav = () => {
//   const [show, handleShow] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 100) {
//         handleShow(true);
//       } else handleShow(false);
//     });
//         console.log(show)
//     return () => {
//       window.removeEventListener("scroll");
//     };
//   }, []);

const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);

  console.log(offset); 



  return (
    <div className={`nav ${offset && "nav__black"}`}>
      <img
        alt="Netflix Logo"
        class="nav__logo"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
      />
      <img
        alt="Profile"
        className="Profile"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
      />
    </div>
  );
  }

export default Nav;
