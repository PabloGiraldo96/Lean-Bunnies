import { Button } from "@/components/ui/button";
import LeanLogo from "/LeanTechLogo.png";

export default function Example() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex flex-col justify-between">
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

      <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-white px-4">
        <div className="w-48 h-48 sm:w-64 sm:h-64 mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse" />
          <img src={LeanLogo} alt="Lean Tech Logo" className="rounded-full" />
        </div>
        <p className="text-lg sm:text-xl mb-8 text-center max-w-md">
          Put your skills to the test by answering questions about Lean Tech
          culture and much more!
        </p>
        <Button className="px-6 py-3 sm:px-8 sm:py-4 text-lg bg-gradient-to-r from-[#003049] to-[#003049] hover:from-[#002638] hover:to-[#002638] text-white font-bold rounded-full transition-all duration-200 transform hover:scale-105">
          START GAME
        </Button>
      </div>

      <div className="relative z-10 p-4 text-right">
        <p className="text-sm text-white opacity-70">
          Lean-Bunnies 2024 All Rights Reserved
        </p>
      </div>
    </div>
  );
}
