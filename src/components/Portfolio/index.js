import React from "react";
import divingImage from "./portfolioimages/diving.jpg";
import oceanImage from "./portfolioimages/oceancleanup.jpg";
import oldImage from "./portfolioimages/oldpups.jpg";
import travelImage from "./portfolioimages/travel.jpg";
import runBuddyImage from "./portfolioimages/runbuddy.jpg";

function Portfolio() {
  return (
    <section className="my-5">
      <h1 id="about">Portfolio</h1>
      <img
        src={divingImage}
        className="my-2"
        style={{ width: "25%" }}
        alt="diving"
      />
      <img
        src={oceanImage}
        className="my-2"
        style={{ width: "25%" }}
        alt="cleaning the ocean"
      />
      <img
        src={oldImage}
        className="my-2"
        style={{ width: "25%" }}
        alt="old doggos"
      />
      <img
        src={travelImage}
        className="my-2"
        style={{ width: "25%" }}
        alt="bali"
      />
      <img
        src={runBuddyImage}
        className="my-2"
        style={{ width: "25%" }}
        alt="trainer platform"
      />

      <div className="my-2">
        <p>Check out my projects above! </p>
      </div>
    </section>
  );
}

export default Portfolio;
