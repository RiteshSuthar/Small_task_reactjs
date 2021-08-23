import React from "react";
import Company_footer from "./Company_footer";
import Follow_us from "./Follow_us";
import Newletter_footer from "./Newletter_footer";
import Thank_footer from "./Thank_footer";

const Footer = () => {
  return (
    <>
      <div>
        <div className="hr">
          <hr></hr>
        </div>
        <div className="row footer">
          <Company_footer />
          <Follow_us />
          <Thank_footer />
          <Newletter_footer />
        </div>
      </div>
    </>
  );
};
export default Footer;
