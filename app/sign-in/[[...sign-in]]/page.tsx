"use client";

import { SignIn, SignUp } from "@clerk/nextjs";
import React, { useState } from "react";

export default function HomePage() {
  const [mode, setMode] = useState<"signIn" | "signUp">("signIn");

  return (
    <div className="min-h-screen flex">
      {/* left panel with background paths / branding */}
      <div className="hidden md:flex w-1/2 bg-black relative">
        {/* you can reuse your FloatingPaths component here if desired */}
        <div className="absolute inset-0">
          {/* …background graphics… */}
        </div>
        <div className="m-auto text-white p-8">
          <h1 className="text-3xl font-bold">efferd</h1>
          <p className="mt-4">
            “This platform has helped me to save time and serve my clients faster than
            ever before.” – Raza Hassan
          </p>
        </div>
      </div>

      {/* right panel with auth forms */}
      <div className="flex-1 flex flex-col justify-center items-center p-8">
        <div className="max-w-md w-full space-y-6">
          <button
            className={`w-full py-2 rounded ${
              mode === "signIn" ? "bg-gray-800 text-white" : "bg-gray-200"
            }`}
            onClick={() => setMode("signIn")}
          >
            Sign in
          </button>
          <button
            className={`w-full py-2 rounded ${
              mode === "signUp" ? "bg-gray-800 text-white" : "bg-gray-200"
            }`}
            onClick={() => setMode("signUp")}
          >
            Sign up
          </button>

          {mode === "signIn" ? (
            <SignIn path="/sign-in" routing="path" />
          ) : (
            <SignUp path="/sign-up" routing="path" />
          )}
        </div>
      </div>
    </div>
  );
}