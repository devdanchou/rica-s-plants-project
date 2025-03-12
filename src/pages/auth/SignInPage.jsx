import { useState, useContext } from "react";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import * as userService from "services/user";
import { Link, useLocation } from "react-router-dom";
import SessionContext from "contexts/SessionContext";
import RedirectToPlantsIfSignedIn from "shared-components/RedirectToPlantsIfSignedIn";

const SignInPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const sessionContext = useContext(SessionContext);

  return (
    <RedirectToPlantsIfSignedIn>
    <FormContainer>
      <div className="text-red-600 font-lato">{errorMessage}</div>
      {location.state?.accountCreated && (
        <div className="p-4 mt-2 mb-8 bg-green-200 rounded-lg border-emerald-500 text-emerald-700">
          Account created successfully. Please sign in.
        </div>
      )}
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

          const data = await response.json();
          if (response.status === 201) {
            sessionContext.signIn(data.capstone_session_token);
            setErrorMessage("");
          } else {
            setErrorMessage(data.error);
          }
        }}
      />
      <Link to="/sign-up" className="text-sm text-green-600 underline">
        create account
      </Link>
    </FormContainer>
    </RedirectToPlantsIfSignedIn>
  );
};

export default SignInPage;
