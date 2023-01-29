import styled from "styled-components";

import {SignUpForm} from "../../components/sign-up-form/sign-up-form.component";
import {SignInForm} from "../../components/sign-in-form/sign-in-form.component";

const AuthenticationContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;
`;

export default function Authentication(){
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};