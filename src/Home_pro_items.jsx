import React from "react";

const Home_pro_items = (props) => {
  return (
    <>
      <div className="col-lg-4 mmm">
        <img src={props.pimg} className="img-fluid"></img>
        <div className="pro_template">
          <div className="pro_content">
            <h3>EXPLORE</h3>
            <h2>{props.pname}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_pro_items;
