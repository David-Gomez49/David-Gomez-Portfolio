import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Gómez Agudelo | Software Engineer",
  description:
    "Software Engineer & Full-Stack Developer building web applications with React, Next.js, Spring Boot and Laravel. Based in Medellín, Colombia.",
  openGraph: {
    title: "David Gómez Agudelo | Software Engineer",
    description:
      "Software Engineer & Full-Stack Developer building web applications with React, Next.js, Spring Boot and Laravel. Based in Medellín, Colombia.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
