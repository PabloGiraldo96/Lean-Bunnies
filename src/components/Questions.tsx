"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

export default function QuestionsComponent() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState<
    Array<{
      question: string;
      incorrectAnswer: string;
      correctAnswer: string;
    }>
  >([]);
  const [timeLeft, setTimeLeft] = useState(10);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizEnded, setQuizEnded] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [lives, setLives] = useState(5);

  const leanQuestions = [
    {
      question: "In which country is Lean Tech not present?",
      options: ["Guatemala", "Peru", "El Salvador", "Argentina"],
      answer: "El Salvador",
    },
    {
      question:
        "What is the industry which not applies to the Lean Tech industries?",
      options: ["Retail", "Collections", "Insurance", "Manufacturing"],
      answer: "Collections",
    },
    {
      question: "What is NOT a solution provided by Lean Tech?",
      options: ["Operations", "Tech", "Furniture", "Sales"],
      answer: "Furniture",
    },
    {
      question:
        "What is a representative phrase to demonstrate passion inside the corporation?",
      options: ["Lets go team", "AU AU AU", "Start with positiveness", "Ohana"],
      answer: "AU AU AU",
    },
    {
      question: "What of the options is NOT a Lean BPO service?",
      options: [
        "Customer Support",
        "Professional Services",
        "Cleaning ",
        "Recruitment",
      ],
      answer: "Cleaning",
    },
    {
      question: "What are the initials of the name of our CTO?",
      options: ["JE", "AK", "JH", "AQ"],
      answer: "AQ",
    },
  ];

  const shuffleArray = (arr: any[]) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

  // SHUFFLED QUESTIONS

  useEffect(() => {
    setShuffledOptions(
      shuffleArray([...leanQuestions[currentQuestion].options])
    );
  }, [currentQuestion]);

  //USEEFFECT FOR TIMER AND ITS RELATION WITH LIVES

  useEffect(() => {
    if (timeLeft > 0 && !quizEnded) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !quizEnded) {
      setLives(lives - 1);
      handleNextQuestion();
    }
  }, [timeLeft, quizEnded]);

  // ENDING THE TRIVIA WHEN LIVES REACH 0

  useEffect(() => {
    if (lives == 0) {
      setQuizEnded(true);
    }
  }, [lives]);

  // MOST IMPORTANT FUNCTION

  const handleAnswerClick = (index: number) => {
    setSelectedAnswer(index);
    const currentQuestionData = leanQuestions[currentQuestion];
    if (shuffledOptions[index] === currentQuestionData.answer) {
      setScore(score + 1);
    } else {
      setLives(lives - 1);
      setIncorrectAnswers([
        ...incorrectAnswers,
        {
          question: currentQuestionData.question,
          incorrectAnswer: shuffledOptions[index],
          correctAnswer: currentQuestionData.answer,
        },
      ]);
    }
    setTimeout(handleNextQuestion, 400);
  };

  // FUNCTION WHICH HANDLE NEXT QUESTION

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    if (currentQuestion < leanQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(7);
    } else {
      setQuizEnded(true);
    }
  };

  //const retryQuiz = () => {
  //  setCurrentQuestion(0);
  //  setScore(0);
  //  setIncorrectAnswers([]);
  //  setTimeLeft(7);
  //  setQuizEnded(false);
  //  setShowAnswers(false);
  //};

  const showAnswersHandler = () => {
    setShowAnswers(true);
  };

  if (quizEnded) {
    return (
      <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8">
        <Card className="w-full max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-center mb-6">
              Trivia Results!
            </h2>
            <p className="text-xl text-center mb-4">
              You scored {score} out of {leanQuestions.length}!
            </p>
            {showAnswers ? (
              <div>
                <h3 className="text-xl font-bold mt-4 mb-8">
                  Incorrect Answers:
                </h3>
                {incorrectAnswers.map((item, index) => (
                  <div key={index} className="mb-4">
                    <p className="mt-2 mb-2">
                      <strong>Question:</strong> {item.question}
                    </p>
                    <p className="mt-2 mb-2">
                      <strong>Your Answer:</strong> {item.incorrectAnswer}
                    </p>
                    <p className="mt-2 mb-8">
                      <strong>Correct Answer:</strong> {item.correctAnswer}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex justify-center gap-4">
                <Button onClick={showAnswersHandler}>Show Answers</Button>
                {/*<Button onClick={retryQuiz}>Retry Quiz</Button>*/}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 min-h-screen flex flex-col justify-between p-4 sm:p-6 lg:p-8">
      <div className="self-end mb-4 flex items-center gap-4">
        <div className="bg-white text-primary rounded-full p-2 text-xl font-bold">
          {timeLeft}s
        </div>
        <div className="flex">
          {[...Array(lives)].map((_, i) => (
            <Heart key={i} className="w-6 h-6 text-red-500 fill-current" />
          ))}
        </div>
      </div>

      <div className="flex-grow flex justify-center items-center mb-8">
        <div className="relative w-64 h-full sm:w-80 sm:h-80  overflow-hidden">
          {" "}
          <img src="/leanBunnyWithFace.svg" alt="Quiz question image" />{" "}
        </div>
      </div>

      <Card className="w-full max-w-4xl mx-auto mb-8">
        <CardContent className="p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
            {leanQuestions[currentQuestion].question}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {shuffledOptions.map((answer, index) => (
              <Button
                key={index}
                variant={selectedAnswer === index ? "default" : "outline"}
                className="p-4 text-base sm:text-lg"
                onClick={() => handleAnswerClick(index)}
                disabled={selectedAnswer !== null}
              >
                {answer}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
