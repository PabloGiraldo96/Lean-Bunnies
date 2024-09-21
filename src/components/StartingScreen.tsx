"use client";

import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import LeanLogo from "/LeanTechLogo.png";

export default function Example() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500 opacity-30 rounded-full"
            style={{
              width: `${Math.random() * 5 + 1}px`,
              height: `${Math.random() * 5 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 50 + 5}s linear infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl px-4">
        <div className="flex-shrink-0 md:mr-8 mb-8 md:mb-0">
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 relative">
            <img
              src={LeanLogo}
              alt="Lean Tech Logo"
              className="rounded-full animate-pulse"
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            Lean Tech
          </h1>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6 animate-fade-in"
            style={{
              animationDelay: "0.2s",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Quiz Game
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl mb-8 text-white animate-fade-in"
            style={{
              animationDelay: "0.4s",
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            Put your skills to the test by answering questions about Lean Tech
            culture and much more!
          </p>
          <Button
            className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-base sm:text-lg md:text-xl bg-gradient-to-r from-[#003049] to-[#003049] hover:from-[#002638] hover:to-[#002638] text-white font-bold rounded-full transition-all duration-200 transform hover:scale-105 animate-fade-in"
            onClick={() => navigate("/login")}
            style={{ animationDelay: "0.6s" }}
          >
            START GAME
          </Button>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 z-10">
        <p className="text-xs sm:text-sm text-white opacity-70">
          Lean-Bunnies 2024 All Rights Reserved
        </p>
      </div>
    </div>
  );
}
