import React from "react";
import ExploreHeader from "../components/ExploreHeader";
import ExploreBody from "../components/ExploreBody";
import image from "../Assets/looplab/create-section1.jpg";
const Create = () => {
  return (
    <>
      <ExploreHeader
        background="bg-primary"
        title="Create"
        outline="outline-light"
      />
      <ExploreBody
        orderImage="order-2"
        orderText="order-1"
        image={image}
        bgColor="bg-dark"
      />
    </>
  );
};

export default Create;
