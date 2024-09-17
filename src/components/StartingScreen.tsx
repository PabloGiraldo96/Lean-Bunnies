import { Button } from "@/components/ui/button";
import LeanLogo from "/LeanTechLogo.png";

export default function Example() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500 opacity-30 rounded-full"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s linear infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-start h-full text-white mt-0">
        <div className="relative w-64 h-64 mb-8 ">
          {/*<div className="absolute inset-0" />*/}
        </div>
        <img
          src={LeanLogo}
          alt="Cyborg Robot"
          className="relative inset-0 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"
        />
        <p className="text-xl mb-8 mt-8 text-center max-w-md">
          Put your skills to the test by answering questions about Lean Tech
          culture and much more!
        </p>

        <Button className="px-8 py-4 text-lg bg-gradient-to-r from-[#003049] to-[#003049] hover:from-[#002638] hover:to-[#002638] text-white font-bold rounded-full transition-all duration-200 transform hover:scale-105">
          START GAME
        </Button>

        <div className="absolute bottom-12 right-4 text-sm opacity-70">
          Lean-Bunnies 2024 All Rights Reserved{" "}
        </div>
      </div>
    </div>
  );
}
