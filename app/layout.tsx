import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redirect",
  description: "Redirect service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
