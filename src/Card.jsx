import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-lg-3 mt-5">
        <div className="card mt-5" style={{ width: "18rem;" }}>
          <NavLink to={`/products/${props.id}`}>
            <img src={props.img} class="card-img-top" alt={props.name} />
          </NavLink>
          <div className="card-body text-center">
            <NavLink to="#">
              <span>{props.name}</span>
            </NavLink>
            <p>{props.category}</p>
            <p>{props.by}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
