import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import { StudioTuner } from "@/components/dev/studio-tuner";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Clario Vault",
  description: "Internal platform for Clario's strategy docs and R&D",
};

import { CommandMenu } from '@/components/search/CommandMenu'
import { AchievementNotifier } from '@/components/gamification/AchievementNotifier'
import { DynamicNavbar } from '@/components/enhanced-ux/dynamic-navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <CommandMenu />
            <AchievementNotifier />
            <DynamicNavbar />
            {children}
            <StudioTuner />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
