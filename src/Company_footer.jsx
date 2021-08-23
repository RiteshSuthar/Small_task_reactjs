import React from "react";
import { companyfooter } from "./Data";
import Companyfooter_data from "./Footer_datas";

const Company_footer = () => {
  return (
    <>
      <div className="col-lg-3">
        <ul>
          <h4>COMPANY</h4>
        </ul>
        {companyfooter.map((val, ind) => {
          return (
            <Companyfooter_data lname={val.lname} llink={val.llink} key={ind} />
          );
        })}
        <div className="copyright mt-5">
          <ul>
            <li>Copyright © 2021 xxxxxxxxxxx</li>
            <li>Powered by xxxxxxxxx</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Company_footer;
