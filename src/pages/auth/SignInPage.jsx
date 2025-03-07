import { useState } from "react";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import * as userService from "services/users";
import { Link, useLocation } from "react-router-dom";

const SignInPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  console.log(location.state)

  return (
    <FormContainer>
      <div className="text-red-600 font-lato">{errorMessage}</div>
      {
        location.state?.accountCreated && <div className="p-4 mt-2 mb-8 bg-green-200 rounded-lg border-emerald-500 text-emerald-700">Account created successfully. Please sign in.</div>
      }
      <AuthForm
        fields={[
          { label: "username", type: "text" },
          {
            label: "password",
            type: "password",
          },
        ]}
        submitButtonText="sign in"
        onSubmit={async (values) => {
          const response = await userService.createSession({
            username: values.username,
            password: values.password,
          });

          if (response.status === 201) {
            console.log("signed in successfully ");
            setErrorMessage("");
          } else {
            const errorDetails = await response.json();
            setErrorMessage(errorDetails.error);
          }
        }}
      />
      <Link to="/sign-up" className="text-sm text-green-600 underline">
        create account
      </Link>
    </FormContainer>
  );
};

export default SignInPage;
