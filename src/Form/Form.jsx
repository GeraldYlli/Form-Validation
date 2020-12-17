import React, { useState, useEffect } from "react";
import "./Form.scss";

const Form = () => {
  const initialValues = {
    email: "",
    businessUnitCode: "",
    Name: "",
    vatCode: "",
    users: "",
    website: "",
    city: ""
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log(formValues);
  };
  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValues));
    setIsSubmitting(true);
  };

  //form validation
  const validate = (values) => {
    let errors = {};

    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const businessUnitCodeRegex = /[a-z]{2}[0-9]{3}[a-z]{2}[0-9]{3}/;

    if (!emailRegex.test(values.email) && values.email) {
      errors.email = "Invalid email format";
    }

    if (!values.businessUnitCode) {
      errors.businessUnitCode = "Cannot be blank";
    } else if (!businessUnitCodeRegex.test(values.businessUnitCode)) {
      errors.businessUnitCode = "Invalid Code format";
    }

    if (!values.Name) {
      errors.Name = "Cannot be blank";
    }

    if (!values.vatCode) {
      errors.vatCode = "Cannot be blank";
    }

    if (!values.users) {
      errors.users = "Cannot be blank";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmitting) {
      submit();
    }
  });

  return (
    <div className="container">
      <h1>Form Validation Test</h1>
      {Object.keys(formError).length === 0 && isSubmitting && (
        <span className="success-msg">Form submitted successfully</span>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
            required={false}
            className={formError.email && "input-error"}
          />
          {formError.email && <span className="error">{formError.email}</span>}
        </div>

        <br />
        <div className="form-row">
          <label htmlFor="password">UnitCode</label>
          <input
            type="text"
            name="businessUnitCode"
            id="businessUnitCode"
            value={formValues.businessUnitCode}
            onChange={handleChange}
            className={formError.businessUnitCode && "input-error"}
          />
          {formError.businessUnitCode && (
            <span className="error">{formError.businessUnitCode}</span>
          )}
        </div>
        <br />

        <div className="form-row">
          <label htmlFor="password">Name</label>
          <input
            type="text"
            name="Name"
            id="Name"
            value={formValues.Name}
            onChange={handleChange}
            className={formError.Name && "input-error"}
          />
          {formError.Name && <span className="error">{formError.Name}</span>}
        </div>
        <br />

        <div className="form-row">
          <label htmlFor="password">Vat Code</label>
          <input
            type="text"
            name="vatCode"
            id="vatCode"
            value={formValues.vatCode}
            onChange={handleChange}
            className={formError.vatCode && "input-error"}
          />
          {formError.vatCode && (
            <span className="error">{formError.vatCode}</span>
          )}
        </div>
        <br />

        <div className="form-row">
          <label htmlFor="password">Users</label>
          <input
            type="number"
            name="users"
            id="users"
            value={formValues.users}
            onChange={handleChange}
            className={formError.users && "input-error"}
          />
          {formError.users && <span className="error">{formError.users}</span>}
        </div>
        <br />

        <div className="form-row">
          <label htmlFor="password">Website</label>
          <input
            type="text"
            name="website"
            id="website"
            value={formValues.website}
            onChange={handleChange}
            className={formError.website && "input-error"}
          />
          {formError.website && (
            <span className="error">{formError.website}</span>
          )}
        </div>
        <br />
        <div className="form-row">
          <label htmlFor="password">City</label>
          <input
            type="text"
            name="city"
            id="city"
            value={formValues.city}
            onChange={handleChange}
            className={formError.city && "input-error"}
          />
          {formError.city && <span className="error">{formError.city}</span>}
        </div>
        <br />

        <button type="submit">Validate</button>
      </form>
    </div>
  );
};

export default Form;
