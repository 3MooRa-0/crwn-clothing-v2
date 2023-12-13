import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button, { BUTTON_TYPE_CLASSES } from "../../global/Button/Button";
import FormInput from "../FormInput/FormInput";

import {
  SignContainer,
  ButtonsContainer,
  SignTitle,
  SignText,
} from "./SignInForm.styles";
import {
  emailSignInStart,
  googleSignInStart,
  signInSuccess,
} from "../../../store/user/user.action";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());

    if (signInSuccess) {
      setTimeout(() => {
        navigate("/");
      }, 10000);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      if (signInSuccess) {
        navigate("/");
      }
      resetFormFields();
    } catch (error) {
      window.alert("Incorrect email or password");
    }
  };

  return (
    <SignContainer>
      <SignTitle>Already have an account?</SignTitle>
      <SignText>Sign In</SignText>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Google Sign
          </Button>
        </ButtonsContainer>
      </form>
    </SignContainer>
  );
};

export default SignInForm;
