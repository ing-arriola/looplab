import React from "react";
import ExploreHeader from "../components/ExploreHeader";
import ExploreBody from "../components/ExploreBody";
import image from "../Assets/looplab/explore-section1.jpg";
function Explore() {
  return (
    <>
      <ExploreHeader
        background="bg-dark"
        title="Explore"
        outline="outline-secondary"
      />
      <ExploreBody image={image} bgColor="bg-light" />
    </>
  );
}

export default Explore;
