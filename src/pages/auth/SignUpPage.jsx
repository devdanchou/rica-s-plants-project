import { useState } from "react";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link, useNavigate } from "react-router-dom";
import * as userService from "services/users";

const SignUpPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  let navigate = useNavigate();

  return (
    <FormContainer>
      <div className="text-red-600 font-lato">{errorMessage}</div>
      <AuthForm
        fields={[
          { label: "username", type: "text" },
          { label: "password", type: "password" },
          {
            label: "confirm password",
            type: "password",
          },
        ]}
        submitButtonText="create account"
        onSubmit={async (values) => {
          if (values.username.length < 4) {
            setErrorMessage("username too short");
            return;
          }

          if (values.password.length < 4) {
            setErrorMessage("password too short");
            return;
          }

          if (values.password !== values["confirm password"]) {
            setErrorMessage("passwords do not match");
            return;
          }

          const response = await userService.createUser({
            username: values.username,
            password: values.password,
          });

          if (response.status === 201) {
            const successMsg = await response.json();
            console.log(successMsg.message);
            setErrorMessage("");
            navigate("/", {
              state: {
                accountCreated: true,
              },
            });
          } else {
            const errorDetails = await response.json();
            setErrorMessage(errorDetails.error);
          }
        }}
      />
      <Link to="/" className="text-sm text-green-600 underline">
        sign in
      </Link>
    </FormContainer>
  );
};

export default SignUpPage;
