import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50/50 flex items-center justify-center">
      {/*Bg Patter */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right, #e5e5e5_1px, transparent_1px), linear_gradient(to_bottom, #e5e5e5e5_1px, transparent_1px)] bg-[size:6rem_4rem]" />

      <section className="w-full px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col items-center space-y-10 text-center">
        <header className="space-y-6">
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
            AI Agent
          </h1>
          <p className="max-w-[600px] text-lg text-gray-600 md:text-xl/relaxed xl:text-2xl/relaxed">
            Meet you AI chat companion that goes beyond talking. It can actually get things done.
            <br />
            <span className="text-gray-400 text-sm">
            Powered by IBM
          </span>
          </p>
          
          

        </header>
        <SignedIn>
          <Link href="/dashboard">
            <button className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-0.5" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from gray-900/20 to gray-800/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            </Link>
        </SignedIn>


        <SignedOut>
          <SignInButton mode="modal" fallbackRedirectUrl={"/dashboard"} forceRedirectUrl={"/dashboard"}>
            <button className="group relative inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-4xl">
              Sign In
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-0.5" />
            </button>
          </SignInButton>
        </SignedOut>
      </section>

    </main>
  );
}
