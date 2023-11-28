"use client";
import JobCard from "@/components/ui/job";
import SearchBar from "@/components/ui/search";
import { useEffect, useState } from "react";

export default function Home() {
  const [page, setPage] = useState<"login" | "signup">("login");
  return (
    // shadow-[0_8px_30px_rgb(0,0,0,0.12)]
    <main className=" md:p-8 p-2 flex m-auto gap-16 w-[90%] h-fit justify-around  items-center flex-col ">
      <h1 className=" text-center w-[50%] min-w-[900px] font-extrabold text-5xl ">
        Rapidly get your <span className=" text-secondary ">Dream Job</span>{" "}
        without struggling.
      </h1>
      <SearchBar />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </main>
  );
}
