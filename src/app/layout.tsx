import { ClerkProvider } from "@clerk/nextjs";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/src/components/Navbar";

export const metadata = {
  title: "My App",
  description: "Example App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <ClerkProvider
            appearance={{ variables: { colorPrimary: "#fe5933" } }}
          >
            <Navbar />
            {children}
          </ClerkProvider>
        </Suspense>
      </body>
    </html>
  );
}
