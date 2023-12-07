import SignUpForm from "../../components/Authentication/SignUpForm/SignUpForm";
import SignInForm from "../../components/Authentication/SignInForm/SignInForm";

import { AuthenticationContianer } from "./Authentication.styles";

const Authentication = () => {
  return (
    <AuthenticationContianer className="wrapper">
      <SignInForm />
      <SignUpForm />
    </AuthenticationContianer>
  );
};

export default Authentication;
