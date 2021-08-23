import React from "react";
import { useParams } from "react-router";
import { product_data } from "./Data";

const Details = ({ match }) => {
  const { id } = useParams();
  const details = product_data.filter((product_data, index) => {
    return product_data.id === id;
  });

  return (
    <>
      <div className="products container  ">
        {details.map((val, ind) => {
          return (
            <>
              <div className="row">
                <div className="left_part col-lg-6">
                  <img src={val.img} className="img-fluid"></img>
                </div>
                <div className="right_part col-lg-6 text-center">
                  <div className="right_part_temp">
                    <div className="cat_header">
                      <h3>Framed Art Print</h3>
                    </div>
                    <div className="artist mt-2">
                      <span>
                        {val.name} BY {val.category}
                      </span>
                    </div>
                    <div className="pro_header mt-3">
                      <span>product details</span>
                    </div>
                    <div className="img_round mt-5">
                      <img src={val.img}></img>
                    </div>
                    <div>
                      <img src=""></img>
                    </div>
                    <div className="form">
                      <form className="col-lg-11 mx-auto">
                        <div className="mb-3">
                          <label className="float-start">STYLE</label>
                          <select className="form-select">
                            <option className="selected">Select Style</option>
                            {val.style.map((style, ind) => {
                              return <option>{style}</option>;
                            })}
                          </select>
                        </div>
                        <div className="mb-3">
                          <label className="float-start">FRAME</label>
                          <select className="form-select">
                            <option className="selected">Select Frame</option>
                            <option>Black</option>
                            <option>White</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label className="float-start">SIZE</label>
                          <select className="form-select">
                            <option className="selected">Select Size</option>
                            {val.size.map((size, ind) => {
                              return <option>{size}</option>;
                            })}
                          </select>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Details;
