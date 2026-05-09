import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/providers/providers";

export const metadata: Metadata = {
  title: "Nitin Singh Negi | Portfolio",
  description:
    "Nitin Singh Negi's personal portfolio showcasing projects, skills, and experience in software development.",
  icons: {
    icon: "https://code.visualstudio.com/assets/branding/code-stable.png",
    shortcut: "https://code.visualstudio.com/assets/branding/code-stable.png",
    apple: "https://code.visualstudio.com/assets/branding/code-stable.png",
  },
};

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", jetbrainsMono.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
