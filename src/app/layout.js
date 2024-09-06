import { Inter } from "next/font/google";
import "./globals.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import UserLayout from "@/layout/user";
import { Box } from "@mui/material";
import { AppProvider } from "@/context/app";
import FeedbackComponents from "@/components/feedback";
import { initializeAxios } from "@/config/axios";
import { AuthProvider } from "@/context/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserLayout>{children}</UserLayout>
      </body>
    </html>
  );
}
