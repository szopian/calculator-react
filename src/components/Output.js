import React from "react";
import OutputRow from "../components/OutputRow";

const Output = (props) => {
  return (
    <div>
      <OutputRow value={99} textSize={{ fontSize: "25px" }} />
      <OutputRow value={100} textSize={{ fontSize: "25px" }} />
    </div>
  );
};

export default Output;
