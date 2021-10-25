import React from "react";
import Button1Items from "./Button1Item";

const Button1 = () => {
  return (
    <div>
      <div className="allButton1">
        <div className="btn-group ">
          <button
            type="button"
            className="first btn  dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <b>BTC</b>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <Button1Items text={"action"} />
            <Button1Items text={"set"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Button1;
