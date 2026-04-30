import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Slavsquatch Software Co.",
  description:
    "We make software simple. Custom applications that support your entire business process, from intake to outcome.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}