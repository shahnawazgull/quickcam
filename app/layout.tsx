import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>QuickCampaigns.io</title>
        <link rel="icon" href="/public/assets/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}