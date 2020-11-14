import React from "react";
import ExploreHeader from "../components/ExploreHeader";
import ExploreBody from "../components/ExploreBody";
import image from "../Assets/looplab/create-section1.jpg";
const Create = () => {
  return (
    <div id="create">
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
        CheckBg="bg-light"
        checkColor="text-primary"
      />
    </div>
  );
};

export default Create;
