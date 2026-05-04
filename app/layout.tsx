import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AppBundle — Bundle Web Apps Into Single Executables",
  description: "Package React, Vue, or vanilla JS apps into cross-platform single-file binaries. No installation required."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="eb3d0862-2a72-44b5-9f0f-abbd806018ce"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
