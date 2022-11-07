import Card from "../../shared/components/card";
import SignUpForm from "./form";

import "./index.scss";

const SignUp = () => (
  <div className="signup-layout">
    <img src="/logo.svg" alt="" />
    <Card
      heading="Sign Up"
      subheading="Create an account to continue"
      className="w-full max-w-lg"
    >
      <SignUpForm />
    </Card>
  </div>
);

export default SignUp;
