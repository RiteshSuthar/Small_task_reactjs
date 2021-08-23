import React from "react";
import Home_pro_items from "./Home_pro_items";
import products from "./Data";

const Home_products = () => {
  return (
    <>
      <div className="hr">
        <hr></hr>
      </div>
      <div className="home_products">
        <div className="row p-1">
          {products.map((val, ind) => {
            return (
              <Home_pro_items pname={val.pname} pimg={val.pimg} key={ind} />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home_products;
