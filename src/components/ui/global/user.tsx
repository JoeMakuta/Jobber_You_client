"use client";
import Image from "next/image";
import { Button } from "./button";
import { useState } from "react";

export interface UserInterface {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const User = ({ src, alt, width, height }: UserInterface) => {
  return (
    <div className=" rounded-full w-10 h-10 overflow-hidden">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default User;
