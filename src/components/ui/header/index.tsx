"use client";
import { useState } from "react";
import User from "../global/user";
import { Button } from "../global/button";
import { useRouter } from "next/navigation";
import Theme from "../global/theme";
import Menu from "../menu";

const Header = () => {
  const [isSigned, setIsSigned] = useState<boolean>(false);
  const router = useRouter();
  return (
    <header className="flex bg-white dark:bg-black items-center justify-between w-screen shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:shadow-[0_3px_10px_rgb(255,255,255,0.2)] z-50   h-[10vh] max-h-24 min-h-20 fixed left-0 top-0 p-3 ">
      <h1 className=" font-extrabold text-2xl ">JobberYou</h1>
      <Menu />
      <div className=" flex gap-3 ">
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
              router.push("/auth");
            }}
            label="Signin"
            intent={"primary"}
            className=" min-w-[130px] "
          />
        )}
        <Theme />
      </div>
    </header>
  );
};

export default Header;
