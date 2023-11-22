"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [page, setPage] = useState<"login" | "signup">("login");
  return (
    // shadow-[0_8px_30px_rgb(0,0,0,0.12)]
    <main className=" md:p-8 p-2 flex  m-auto w-[90%] md:w-[35%] h-fit justify-center items-center flex-col ">
      Hello world
    </main>
  );
}
