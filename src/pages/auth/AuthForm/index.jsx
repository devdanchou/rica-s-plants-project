import { useState } from "react";
import Field from "./Field";

const AuthForm = (props) => {
  const { fields, submitButtonText, onSubmit } = props;
  const [values, setValues] = useState(() => {
    const initialState = {};

    for (let field of fields) {
      initialState[field.label] = "";
    }

    return initialState;
  });

  const [isLoading, setIsLoading] = useState(false);

  return (
    <form
      className="p-4 m-4 border border-slate-200 rounded-lg font-lato bg-white"
      onSubmit={async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await onSubmit(values);
        setIsLoading(false);
      }}
    >
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
      <button className="relative w-full py-2 mt-4 text-white rounded-lg bg-emerald-700">
        {submitButtonText}
        <div className="absolute top-0 right-5 flex h-full items-center">
          {isLoading && (
            <i className="fa-solid fa-circle-notch text-2xl text-green-200 animate-spin"></i>
          )}
        </div>
      </button>
    </form>
  );
};

export default AuthForm;
