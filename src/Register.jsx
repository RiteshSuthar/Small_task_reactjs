import React, { useState } from "react";

const Register = () => {
  const [curtext, nexttext] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    mobile: "",
    email: "",
    com_name: "",
    com_address: "",
    com_website: "",
    city: "",
    state: "",
    address2: "",
  });

  const type = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    nexttext((allitems) => {
      return {
        ...allitems,
        [name]: value,
      };
    });
  };
  const onSubmits = (event) => {
    event.preventDefault();
  };
  const onsubmit = () => {
    alert(
      `First Name : ${curtext.firstname} \n Last Name : ${curtext.lastname} \n Phone : ${curtext.phone} \n Mobile Phone : ${curtext.mobile}
        \n Company Name : ${curtext.com_name} \n Company Address : ${curtext.com_address} \n Company Website : ${curtext.com_website}
        \n Address 2 : ${curtext.address2} \n City : ${curtext.city} \n State : ${curtext.state}`
    );
  };

  return (
    <>
      <div className="register_back">
        <div className="register_panel col-lg-4">
          <form onSubmit={onSubmits}>
            <h2>Register</h2>
            <div className="row mt-5">
              <div className="col-lg-6">
                <label className="mb-2">FIRST NAME</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={type}
                  value={curtext.firstname}
                  name="firstname"
                  required
                ></input>
              </div>
              <div className="col-lg-6">
                <label className="mb-2">LAST NAME</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={type}
                  value={curtext.lastname}
                  name="lastname"
                  required
                ></input>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6">
                <label className="mb-2">PHONE</label>
                <input
                  type="number"
                  className="form-control"
                  onChange={type}
                  value={curtext.phone}
                  name="phone"
                  required
                ></input>
              </div>
              <div className="col-lg-6">
                <label className="mb-2">MOBILE PHONE</label>
                <input
                  type="number"
                  className="form-control"
                  onChange={type}
                  value={curtext.mobile}
                  name="mobile"
                  required
                ></input>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6">
                <label className="mb-2">EMAIL</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={type}
                  value={curtext.email}
                  name="email"
                  required
                ></input>
              </div>
            </div>
            <div className="hr">
              <hr></hr>
            </div>
            <div className="row mt-5">
              <div className="col-lg-6">
                <label className="mb-2">COMPANY NAME</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={type}
                  value={curtext.com_name}
                  name="com_name"
                  required
                ></input>
              </div>
              <div className="col-lg-6">
                <label className="mb-2">COMPANY WEBSITE</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={type}
                  value={curtext.com_website}
                  name="com_website"
                  required
                ></input>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6">
                <label className="mb-2">COMPANY ADDRESS</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={type}
                  value={curtext.com_address}
                  name="com_address"
                  required
                ></input>
              </div>
              <div className="col-lg-6">
                <label className="mb-2">ADDRESS 2</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={type}
                  value={curtext.address2}
                  name="address2"
                  required
                ></input>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6">
                <label className="mb-2">CITY</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={type}
                  value={curtext.city}
                  name="city"
                  required
                ></input>
              </div>
              <div className="col-lg-6">
                <label className="mb-2">STATE</label>
                <select
                  name="state"
                  class="form-select"
                  aria-label="Default select example"
                  required
                >
                  <option selected>Select a State</option>
                  <option>Mumbai</option>
                  <option>Rajasthan</option>
                  <option>Gujarat</option>
                  <option>.....</option>
                </select>
              </div>
            </div>
            <div className="mt-5 text-center">
              <button className="btn btn-success" onClick={onsubmit}>
                Register Yourself
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
