import { useState } from "react";
import Field from "./Field";

/**
 *  username: 'daniel',
 *  password: ''
 *
 */

const AuthForm = (props) => {
  const { fields, submitButtonText } = props;
  const [values, setValues] = useState(() => {
    const initialState = {};

    for (let field of fields) {
      initialState[field.label] = "";
    }

    return initialState;
  });

  return (
    <form className="p-4 m-4 border border-slate-200 rounded-lg font-lato bg-white">
      {fields.map((field) => (
        <Field
          key={field.label}
          label={field.label}
          type={field.type}
          value={values[field.label]}
          onChange={(e) =>
            setValues({ ...values, [field.label]: e.target.value })
          }
        />
      ))}
      <button className="w-full py-2 mt-4 text-white rounded-lg bg-emerald-700">{submitButtonText}</button>
    </form>
  );
};

export default AuthForm;
