import React from "react";
import { FaCheck } from "react-icons/fa";
const RowHeader = ({ color, background }) => {
  return (
    <div className="d-flex">
      <div className="p-4 align-self-start">
        <FaCheck
          className="check"
          size={30}
          style={{ background: background, color: color }}
        />
      </div>
      <div className="p-4 align-self-end">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        libero, distinctio reprehenderit tenetur fugiat sapiente tempora nemo
        itaque dolore dolorum necessitatibus.
      </div>
    </div>
  );
};

export default RowHeader;
