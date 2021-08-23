import React from "react";
import { followusfooter } from "./Data";
import { Followusfooter_data } from "./Footer_datas";

const Follow_us = () => {
  return (
    <>
      <div className="col-lg-3 follow_us">
        <ul>
          <h4>FOLLOW US OUT THERE</h4>
        </ul>

        {followusfooter.map((val, ind) => {
          return (
            <Followusfooter_data
              licon={val.licon}
              lname={val.lname}
              llink={val.llink}
              key={ind}
            />
          );
        })}
      </div>
    </>
  );
};
export default Follow_us;
