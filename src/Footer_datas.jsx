import React from "react";
import { NavLink } from "react-router-dom";

const Companyfooter_data = (props) => {
  return (
    <span>
      <ul>
        <li>
          <NavLink className="nav-link" exact to={props.llink}>
            {props.lname}
          </NavLink>
        </li>
      </ul>
    </span>
  );
};
const Followusfooter_data = (props) => {
  return (
    <span>
      <ul>
        <div className="socio">
          <i class={props.licon}></i>
          <li>
            <NavLink className="nav-link" exact to={props.llink}>
              {props.lname}
            </NavLink>
          </li>
        </div>
      </ul>
    </span>
  );
};
export default Companyfooter_data;
export { Followusfooter_data };
