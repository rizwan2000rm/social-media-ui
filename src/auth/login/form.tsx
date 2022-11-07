import { ChangeEvent } from "react";

import Button from "../../shared/components/button";
import Input from "../../shared/components/input";

const LoginForm = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <>
      <Input
        labelText="Email or Username"
        placeholder="Enter your email"
        onChange={handleChange}
        type="email"
        id="email"
      />
      <Input
        labelText="Password"
        placeholder="Enter your password"
        onChange={handleChange}
        type="password"
        id="password"
      />
      <Button className="login-button" text="Login now" isFullWidth={true} />
      <p className="muted-text">
        Not registered yet? <a href="">Register →</a>
      </p>
    </>
  );
};

export default LoginForm;
