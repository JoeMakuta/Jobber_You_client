"use client";

import Image from "next/image";
import Input from "../global/input";
import { Button } from "../global/button";

const Login = () => {
  return (
    <form className=" h-fit w-full flex flex-col  gap-3">
      <Input label="Email" type="email" placeholder="Enter your email" />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
      <Button className="mt-3" label="Login" size={"medium"} />
    </form>
  );
};

export default Login;
