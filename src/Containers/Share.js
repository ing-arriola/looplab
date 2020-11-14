import React from "react";
import ExploreHeader from "../components/ExploreHeader";
import ExploreBody from "../components/ExploreBody";
import image from "../Assets/looplab/share-section1.jpg";
const Share = () => {
  return (
    <>
      <ExploreHeader
        background="bg-primary"
        title="Share"
        outline="outline-light"
      />
      <ExploreBody
        image={image}
        bgColor="bg-light"
        textColor="text-muted"
        CheckBg="bg-dark"
        checkColor="text-light"
      />
    </>
  );
};

export default Share;
