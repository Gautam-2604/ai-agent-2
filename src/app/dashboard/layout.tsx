"use client";
import { Authenticated } from "convex/react";
import Header from "../../components/Header";
import NavigationProvider from "@/components/NavigationProvider";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NavigationProvider>
    <div className="flex h-screen">
      <Authenticated>
        <Sidebar />
      </Authenticated>
      <div className="flex-1">
        <Header />
        <main>{children}</main>
      </div>
    </div>
    </NavigationProvider>
  );
}
