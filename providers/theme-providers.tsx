"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="aahana-dark"
      disableTransitionOnChange={false}
      themes={[
        "aahana-dark",
        "rose-pine",
        "tokyo-night",
        "catppuccin",
        "nord",
        "gruvbox",
      ]}
    >
      {children}
    </NextThemesProvider>
  );
}
