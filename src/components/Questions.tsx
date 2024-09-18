"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function QuestionsComponent() {
  const [timeLeft, setTimeLeft] = useState(10);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleAnswerClick = (index: number) => {
    setSelectedAnswer(index);
    // Here you would typically check if the answer is correct and handle the result
  };

  return (
    <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 min-h-screen flex flex-col justify-between p-4 sm:p-6 lg:p-8">
      {/* Timer */}
      <div className="self-end mb-4">
        <div className="bg-white text-primary rounded-full p-2 text-xl font-bold">
          {timeLeft}s
        </div>
      </div>

      {/* Image placeholder */}
      <div className="flex-grow flex justify-center items-center mb-8">
        <div className="relative w-64 h-full sm:w-80 sm:h-80  overflow-hidden">
          {" "}
          <img
            src="/leanBunnyDefaultCharacter.svg"
            alt="Quiz question image"
          />{" "}
        </div>
      </div>

      {/* Question card */}
      <Card className="w-full max-w-4xl mx-auto mb-8">
        <CardContent className="p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
            In which country is Lean Tech not present?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Guatemala", "Argentina", "Peru", "El Salvador"].map(
              (answer, index) => (
                <Button
                  key={index}
                  variant={selectedAnswer === index ? "default" : "outline"}
                  className="p-4 text-base sm:text-lg"
                  onClick={() => handleAnswerClick(index)}
                >
                  {answer}
                </Button>
              )
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
