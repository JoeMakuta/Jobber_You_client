"use client";

import Image from "next/image";
import Input from "../global/input";
import { Button } from "../global/button";

const Signup = () => {
  return (
    <form className=" w-full flex flex-col gap-3 ">
      <Input label="First name" type="text" placeholder="First name " />
      <Input label="Last name" type="text" placeholder="Last name " />
      <Input label="Email" type="email" placeholder="exemple@exemple.exemple" />
      <Input label="First name" type="password" placeholder="First name " />
      <Input label="First name" type="password" placeholder="First name " />
      <Input label="First name" type="password" placeholder="First name " />
      <Input label="First name" type="password" placeholder="First name " />
      <Input label="First name" type="password" placeholder="First name " />
      <Button className="mt-3" label="Signup" size={"medium"} />
    </form>
  );
};

export default Signup;
