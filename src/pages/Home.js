import React from "react";
import Cocoa from "../images/cocoa.png";

const Home = () => {
  return (
    <div id="home">
      <img
        className="p-18 absolute top-0 flex transform rotate-90 h-26 w-50"
        src={Cocoa}
      />
      <div className="static flex flex-col font-title text-4xl pt-96 text-center md:text-right">
        <h1>A BROWNIE A DAY,</h1>
        <h1>KEEPS YOUR FROWNIE AWAY.</h1>
      </div>
    </div>
  );
};

export default Home;
