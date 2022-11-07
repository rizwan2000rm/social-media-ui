import { ChangeEvent } from "react";

import Button from "../../shared/components/button";
import Input from "../../shared/components/input";

const SignUpForm = () => {
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
        labelText="Username"
        placeholder="Choose a preferred username"
        onChange={handleChange}
        type="text"
        id="username"
      />
      <Input
        labelText="Password"
        placeholder="Enter your password"
        onChange={handleChange}
        type="password"
        id="password"
      />
      <Button className="signup-button" text="Continue" isFullWidth={true} />
      <p className="muted-text">
        Already have an account? <a href="">Login →</a>
      </p>
    </>
  );
};

export default SignUpForm;
