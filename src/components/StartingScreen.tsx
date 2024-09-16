import { Button } from "@/components/ui/button";

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

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        {/*<h1 className="text-6xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          LEAN BUNNIES!!
        </h1>
*/}
        <div className="relative w-64 h-64 mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse" />
        </div>

        <p className="text-xl mb-8 text-center max-w-md">
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
