import React from "react";
import { product_data } from "./Data";
import Card from "./Card";

const Products = () => {
  return (
    <>
      <div className="products container  ">
        <div className="row">
          {product_data.map((val, ind) => {
            return (
              <Card
                name={val.name}
                category={val.category}
                by={val.by}
                img={val.img}
                id={ind}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
