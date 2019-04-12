import React, { useState } from 'react';

const SmurfForm = ({onSubmit, initialValues, buttonText, ...props}) => {
  const [values, setValues] = useState(initialValues || {name: "", age: "", height: ""});
  const onChange = e => setValues({...values, [e.target.name]: e.target.value});
  return (
    <form onSubmit={onSubmit}>
      <input type="text"
             name="name"
             placeholder="name"
             onChange={onChange}
             value={values.name} />
      <input type="number"
             name="age"
             placeholder="age"
             onChange={onChange}
             value={values.age} />
      <input type="text"
             name="height"
             placeholder="height"
             onChange={onChange}
             value={values.height} />
      <button type="submit">{buttonText || "Submit"}</button>
    </form>
  );
};


export default SmurfForm;

