import React from "react";
import ChocChips from "../images/chochips.png";
import Classic from "../images/classic.png";
import Biscoff from "../images/biscoff.png";
import Oreo from "../images/oreo.png";
import Smores from "../images/smores.png";

function Menu() {
  return (
    <div className="pt-20" id="menu">
      <img
        className="w-3/6 h-22 absolute transform rotate-45 right-0 md:block hidden"
        src={ChocChips}
      />

      <div className="md:flex flex-row">
        <img className="ml-4 max-w-sm max-h-96" src={Classic} />
        <div className="flex flex-col pt-10">
          <p className="font-title text-center text-5xl pt-10 text-title md:text-left">
            Belgian Chocolate
          </p>
          <p className="font-body text-center text-sm pt-5 text-body md:w-64 text-justify">
            A squared gourmet brownies with a modern twist best paired with milk
            or ice-cream. The texture falls between gooey and chewy. You get the
            thick chocolate texture.
          </p>
        </div>
      </div>

      <div className="md:flex flex-row-reverse pt-20">
        <img className="ml-4 max-w-sm max-h-96" src={Biscoff} />
        <div className="flex flex-col pt-10">
          <p className="font-title text-center text-5xl pt-10 text-title md:text-left">
            Lotus Biscoff Caramel
          </p>
          <div className="flex justify-end">
            <p className="font-body text-center text-sm pt-5 text-body md:w-64 text-justify justify-end">
              Curated for caramel addicts. Topped with Lotus Biscoff sauce for
              that creamy and thick caramel texture. We also added Biscoff
              crumbs to enhance the flavour of caramel to bring out the best in
              caramel.
            </p>
          </div>
        </div>
        <img
          className="w-2/5 h-22 absolute left-0 mt-64 ml-32 md:block hidden"
          src={ChocChips}
        />
      </div>

      <div className="md:flex flex-row pt-20">
        <img className="ml-4 max-w-sm max-h-96" src={Smores} />
        <div className="flex flex-col pt-10">
          <p className="font-title text-center text-5xl pt-10 text-title md:text-left">
            Hershey's Toasted Smores
          </p>
          <p className="font-body text-center text-sm pt-5 text-body md:w-64 text-justify">
            Rich chocolate brownies topped with toasted marshmallow and soften
            dark chocolate, giving you a better biting texture and experience
            with our fluffy and soft marshmallow.
          </p>
        </div>
      </div>
      <div className="md:flex flex-row-reverse pt-20">
        <div className="w-full h-80 -mt-20">
          <img
            className="absolute right-0 ml-4 max-w-5xl max-h-96 transform rotate-90 md:ml-20"
            src={Oreo}
          />
        </div>
        <div className="w-full flex flex-col md:pl-96">
          <div className="md:pl-20">
            <p className="font-title text-center text-5xl pt-10 text-title md:text-left">
              Crunchy Oreo
            </p>
            <p className="font-body text-center text-sm pt-5 text-body md:w-64 text-justify">
              The most infamous sandwich cookies that nobody could resists are
              DE-LI-COUSSS !!! Pairing it with our thick and moist brownies. I
              mean what is better than this combo ?
            </p>
          </div>
        </div>
      </div>

      <p className="p-20 text-4xl font-title">JUST GOT BAKED ...</p>
    </div>
  );
}

export default Menu;
