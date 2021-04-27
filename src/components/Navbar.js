import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import IG from "../images/instagram.svg";
import LOGO from "../images/circlelogo.png";
import Love from "../images/love.png";

function Navbar() {
  return (
    <div className="fixed">
      <div className="sticky">
        <img
          src={LOGO}
          className="h-30 w-32 ml-1.5 -mb-1.0 transform translate-x-1 translate-y-6"
        />
        <img
          src={Love}
          className="h-12 w-12 ml-1.5 transform translate-x-11 -translate-y-16"
        />
      </div>

      {/* <div className="absolute bottom-10"> */}
      <div className="flex font-nav fixed transform -translate-x-36 translate-y-64 -rotate-90  md:block hidden">
        <ScrollLink to="home" smooth={true} className="cursor-pointer" to="/ig">
          <img src={IG} className="inline h-8 w-8 mr-32" />
        </ScrollLink>
        <ScrollLink to="menu" smooth={true} className="mr-12 cursor-pointer">
          MENU
        </ScrollLink>
        <ScrollLink to="story" smooth={true} className="mr-12 cursor-pointer">
          STORY
        </ScrollLink>
        <ScrollLink to="home" smooth={true} className="mr-12 cursor-pointer">
          HOME
        </ScrollLink>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Navbar;
