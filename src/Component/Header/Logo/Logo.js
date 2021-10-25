import React from "react";
import Logo1 from "../logo.png";
import Logo2 from "../cointrack.ai.png";
const Logo = () => {
  return (
    <div>
      <div className="logo">
        <img src={Logo1} />
        <img src={Logo2} />
      </div>
    </div>
  );
};

export default Logo;
