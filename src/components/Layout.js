import React from "react";
import "./Layout.css";

const Layout = (props) => {
  return (
    <div className="frame">
      <div className="calculator">
        <br></br>
        <img />
        <div className="keys">
          <input
            type="button"
            value={"C"}
            className="button clear"
            onClick={() => {}}
          ></input>
          <input
            type="button"
            value={"DEL"}
            className="button clear"
            onClick={() => {}}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Layout;
