"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

//const answers = [
//  {
//    question: "Calvin Hawkins",
//    answer: "calvin.hawkins@example.com",
//  },
//  {
//    question: "Calvin Hawkins",
//    answer: "calvin.hawkins@example.com",
//  },
//  {
//    question: "Calvin Hawkins",
//    answer: "calvin.hawkins@example.com",
//  },
//];

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
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="w-1/3"></div>
            <div className="w-1/3 flex justify-center"></div>
            <div className="w-1/3 flex justify-end">
              <div className="bg-primary text-primary-foreground rounded-full p-2 text-xl font-bold">
                {timeLeft}s
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center mb-8">
            In which country is Lean Tech not present?{" "}
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {["Guatemala", "Argentina", "Peru", "El Salvador"].map(
              (answer, index) => (
                <Button
                  key={index}
                  variant={selectedAnswer === index ? "default" : "outline"}
                  className="p-4 text-lg"
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
