import Card from "../../shared/components/card";
import LoginForm from "./form";

import "./index.scss";

const Login = () => (
  <div className="login-layout">
    <img src="/logo.svg" alt="" />
    <Card
      heading="WELCOME BACK"
      subheading="Log into your account"
      className="w-full max-w-lg"
    >
      <LoginForm />
    </Card>
  </div>
);

export default Login;
