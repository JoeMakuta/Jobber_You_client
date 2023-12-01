"use client";

import Image from "next/image";
import Input from "../global/input";
import { Button } from "../global/button";
import { FormEvent, useState } from "react";
import { AxiosResponse, isAxiosError } from "axios";
import { ApiClient } from "@/helpers/axios/helper";
import { Modal } from "antd";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const Response: AxiosResponse<any, any> = await ApiClient.post({
        url: "/api/user/auth/login",
        data: {
          email,
          password,
        },
      });
      console.log(Response);
      Modal.success({
        title: "Success",
        content: Response?.data.message,
        okType: "default",
        centered: true,
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      if (isAxiosError(error)) {
        Modal.error({
          title: "Erreur",
          content: error?.response?.data.message,
          okType: "default",
          centered: true,
        });
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" h-fit w-full flex flex-col  gap-3"
    >
      <Input
        setState={setEmail}
        label="Email"
        type="email"
        placeholder="Enter your email"
      />
      <Input
        setState={setPassword}
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
      <Button
        loading={loading}
        className="mt-3"
        label="Login"
        size={"medium"}
      />
    </form>
  );
};

export default Login;
