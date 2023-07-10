import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
function Triggerevent() {
  const [payment, setPayment] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  });
  function handleCallback({ issuer }, isValid) {
    if (isValid) {
      setPayment({ issuer });
    }
  }
  function onInputFocus({ target }) {}
  function onInputUpdate({ target }) {
    console.log({ [target.name]: target.value });
  }
  function handleSubmit(e) {}
  const { name, number, expiry, cvc, focused, issuer } = payment;
  return (
    <div    className="mt-5 text-center " key="Payment">
      <div>
        <Cards
     className="col-md-6 "
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
          callback={handleCallback}
        />
        <form className="" onSubmit={handleSubmit}>
          <div className="form-group mb-3 mt-4 col-6 m-auto ">
            <input
              type="tel"
              name="number"
              className="form-control col-3"
              placeholder="Card Number"
              pattern="[\d| ]{16,22}"
              required
              onChange={onInputUpdate}
              onFocus={onInputFocus}
            />
          </div>
          <div className="form-group mb-3 col-6 m-auto ">
            <input
              type="text"
              name="name"
              className="form-control col-md-4"
              placeholder="Name"
              required
              onChange={onInputUpdate}
              onFocus={onInputFocus}
            />
          </div>
          <div className="row mb-4 col-6 m-auto ">
            <div className="col-6 ">
              <input
                type="tel"
                name="expiry"
                className="form-control ml-3"
                placeholder="Valid Thru"
                pattern="\d\d/\d\d"
                required
                onChange={onInputUpdate}
                onFocus={onInputFocus}
              />
            </div>
            <div className="col-6">
              <input
                type="tel"
                name="cvc"
                className="form-control col-3 ml-5"
                placeholder="CVC"
                pattern="\d{3,4}"
                required
                onChange={onInputUpdate}
                onFocus={onInputFocus}
              />
            </div>
          </div>
          <input type="hidden" name="issuer" value={issuer} />
          <div className="d-grid col-6 m-auto ">
            <button className="btn btn-dark">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Triggerevent;