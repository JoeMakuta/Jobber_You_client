"use client";

import Image from "next/image";
import Input from "../global/input";
import MyInput from "antd/es/input/Input";
import { Button } from "../global/button";
import { Radio } from "antd";

const Signup = () => {
  return (
    <form className=" w-full flex flex-col gap-3 ">
      <Input
        label="First name"
        type="text"
        placeholder="Enter your first name "
      />
      <Input label="Last name" type="text" placeholder="Enter yout last name" />
      <Input label="Username" type="text" placeholder="Enter your user name" />
      <Input
        label="Telephone"
        type="tel"
        placeholder="Enter your phone number "
      />
      <Input label="Email" type="email" placeholder="exemple@exemple.exemple" />
      <Radio.Group className=" flex flex-col gap-3 ">
        <span className="text-gray-700 text-sm dark:text-white ">
          What fit you best :
        </span>
        <div className=" border border-black/25 p-3 rounded-lg">
          <Radio className="text-xs" value={1}>
            Job Seeker
          </Radio>
          <Radio className="text-xs" value={2}>
            Job poster
          </Radio>
          <Radio className="text-xs" value={3}>
            Both
          </Radio>
        </div>
      </Radio.Group>
      <Button className="mt-3" label="Signup" size={"medium"} />
    </form>
  );
};

export default Signup;
