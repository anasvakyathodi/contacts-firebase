import React, { useState, useEffect } from "react";
const ContactForm = (props) => {
  const initialState = {
    fullname: "",
    mobile: "",
    email: "",
    address: "",
  };
  const [values, setValues] = useState(initialState);
  useEffect(() => {
    if (props.currentId == "") {
      setValues({
        ...initialState,
      });
    } else {
      setValues({
        ...props.contactObjects[props.currentId],
      });
    }
  }, [props.currentId, props.contactObjects]);
  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          className="form-control"
          placeholder="Full Name"
          value={values.fullname}
          name="fullname"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-row">
        <div className="col-md-6 form-group">
          <input
            className="form-control"
            placeholder="Mobile"
            value={values.mobile}
            name="mobile"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-md-6 form-group">
          <input
            className="form-control"
            placeholder="Email"
            value={values.email}
            name="email"
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Address"
          name="address"
          value={values.address}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="form-group">
        <input
          type="submit"
          className="btn btn-primary btn-block"
          value={props.currentId == "" ? "save" : "Update"}
        />
      </div>
    </form>
  );
};

export default ContactForm;
