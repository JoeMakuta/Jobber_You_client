"use client";

import { useTheme } from "next-themes";

const Theme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <button
        onClick={() => {
          setTheme("dark");
        }}
      >
        Dark
      </button>
      <button
        onClick={() => {
          setTheme("light");
        }}
      >
        White
      </button>
    </div>
  );
};

export default Theme;
