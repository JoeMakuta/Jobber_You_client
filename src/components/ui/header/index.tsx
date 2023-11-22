"use client";
import { useState } from "react";
import User from "../global/user";
import Image from "next/image";
import { Button } from "../global/button";

const Header = () => {
  const [isSigned, setIsSigned] = useState<boolean>(false);
  return (
    <header className="flex bg-white w-full border-b-[1px] border-black/20 h-16 fixed top-0 p-3">
      {isSigned ? (
        <User
          alt="Photo"
          height={50}
          width={50}
          src="/assets/JobberYou Logo.png"
        />
      ) : (
        <Button
          action={() => {
            setIsSigned(true);
          }}
          label="Signin"
          intent={"primary"}
        />
      )}
    </header>
  );
};

export default Header;
