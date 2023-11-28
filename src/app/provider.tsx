"use client";
import { ConfigProvider } from "antd";
import { ThemeProvider, useTheme } from "next-themes";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Provider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "rgba(23, 98, 0, 0.76)",
          fontFamily: inter.style.fontFamily,
        },
      }}
    >
      <ThemeProvider attribute="class" defaultTheme="light">
        {children}
      </ThemeProvider>
    </ConfigProvider>
  );
}
