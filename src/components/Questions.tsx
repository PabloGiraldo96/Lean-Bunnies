"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { Howl } from "howler";
import FullBunny from "/public/Lean- bunnies default character face.svg";
import WrongAnswer1 from "/public/Lean- bunnies 1.svg";
import WrongAnswer2 from "/public/Lean- bunnies 2.svg";
import WrongAnswer3 from "/public/Lean- bunnies 6.svg";
import WrongAnswer4 from "/public/Lean- bunnies 8.svg";
import WrongAnswer5 from "/public/leanBunnyHeadOne.svg";
import WrongAnswerGif from "/public/lv_0_20241007124836.gif";
import WhiteFlashGif from "/public/flash.gif";

import Player from "./LoginScreen.tsx";

type Player = {
  nickname: string;
  role: string;
};

export default function QuestionsComponent() {
  const soundStart = new Howl({
    src: [
      "./sounds/Undertale-Sound-Effect-Attack-Fernando-McKinney-_youtube_.wav",
    ],
  });
  const [soundPlayed, setSoundPlayed] = useState(false);

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
  const [lives, setLives] = useState(6);
  const [wrongAnswerAnimation, setWrongAnswerAnimation] = useState<
    string | null
  >(null);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [currentSvgIndex, setCurrentSvgIndex] = useState(0);
  const [player, setPlayer] = useState<Player | null>(null);
  const [whiteFlashAnimation, setWhiteFlashAnimation] =
    useState<boolean>(false);

  const wrongAnswerSvgs = [
    FullBunny,
    WrongAnswer1,
    WrongAnswer2,
    WrongAnswer3,
    WrongAnswer4,
    WrongAnswer5,
  ];

  const leanQuestions = [
    {
      question: "In which country is Lean Tech not present?",
      options: ["Guatemala", "Peru", "El Salvador", "Argentina"],
      answer: "El Salvador",
    },
    {
      question: "Which region does Lean Tech primarily source its talent from?",
      options: ["Asia", "Europe", "Latin America", "North America"],
      answer: "Latin America",
    },
    {
      question:
        "Lean Tech specializes in providing which of the following services",
      options: [
        "Marketing strategies",
        "IT solutions",
        "Real estate consulting",
        "Event planning",
      ],
      answer: "IT solutions",
    },
    {
      question: "How many countries does Lean Tech operate in?",
      options: ["3", "5", "10", "8"],
      answer: "8",
    },
    {
      question:
        "Which of the following roles is NOT typically filled by Lean Tech?",
      options: [
        "Data scientist",
        "Event Coordinator",
        "Full Stack Developer",
        "UX / UI Designer",
      ],
      answer: "Event Coordinator",
    },
    {
      question: "What technology does Lean Tech primarily focus on?",
      options: [
        "Blockchain",
        "Software Development",
        "Cybersecurity",
        "Recruitment",
      ],
      answer: "Software Development",
    },
    {
      question:
        "What is the primary advantage of Lean Tech's nearshoring model?",
      options: [
        "Lower wages",
        "Less paperwork",
        "Cultural proximity",
        "More vacation days",
      ],
      answer: "Cultural proximity",
    },
    {
      question: "Lean Tech is part of which parent company?",
      options: [
        "Lean Staffing",
        "Lean Solutions Group",
        "Lean Marketing",
        "Lean BPO",
      ],
      answer: "Lean Solutions Group",
    },
    {
      question:
        "In 2024, Lean Solutions Group ranked No. 795 on which prestigious list?",
      options: [
        "Fortune 500",
        "Forbes Global 2000",
        "Deloitte Fast 500",
        "Inc. 500",
      ],
      answer: "Inc. 500",
    },
    {
      question: "How many projects has Lean Tech completed?",
      options: ["100", "300", "180", "+ 500"],
      answer: "+ 500",
    },
    {
      question:
        "What is the average time it takes Lean Tech to hire a new employee?",
      options: ["15 Days", "20 Days", "35 Days", "29 Days"],
      answer: "29 Days",
    },
    {
      question:
        "How many programming languages does Lean Tech offer services in?",
      options: ["5", "8", "+ 14", "10"],
      answer: "+ 14",
    },
    {
      question:
        "What type of fee structure does Lean Tech offer its clients for employees working a 40-hour week?",
      options: [
        "Monthly flat rate fee",
        "Hourly rate",
        "Commission-based",
        "Project-based rate",
      ],
      answer: "Monthly flat rate fee",
    },
    {
      question: "Who is the CTO and Co-founder of Lean Solutions Group?",
      options: [
        "Bill Gates",
        "Alfonso Quijano",
        "Mark Zuckerberg",
        "Jeffrey Beezos",
      ],
      answer: "Alfonso Quijano",
    },
    {
      question: "What does MoodQ help you monitor?",
      options: [
        "Emotional state",
        "Physical activity",
        "Daily work hours",
        "Diet and nutrition",
      ],
      answer: "Emotional state",
    },
    {
      question: "What is WALT?",
      options: [
        "A fitness tracking tool",
        "A comprehensive Lean Tech information hub",
        "A virtual assistant for meetings",
        "An app for booking travel arrangements",
      ],
      answer: "A comprehensive Lean Tech information hub",
    },
    {
      question: "What is the Warrior Network?",
      options: [
        "A fitness challenge for employees",
        "A talent recruitment system",
        "A mentoring platform for senior staff",
        "A social network for tech professionals in LATAM",
      ],
      answer: "A social network for tech professionals in LATAM",
    },
    {
      question: "What does Let'z help you do?",
      options: [
        "Manage your projects",
        "Improve your English in a exciting way",
        "Track your daily exercise",
        "Plan your meals",
      ],
      answer: "Improve your English in a exciting way",
    },
    {
      question:
        "What can you request with the Brain Power Benefit at Lean Tech?",
      options: [
        "A $10 book/course monthly",
        "A $100 gym membership",
        "A free laptop for work",
        "Up to $30 for a vacation",
      ],
      answer: "A $10 book/course monthly",
    },
    {
      question: "What is Hustle for the Muscle at Lean Tech?",
      options: [
        "An incentive to improve health and personal care",
        "A financial savings program",
        "A program to develop software skills",
        "A tool for tracking emotional intelligence",
      ],
      answer: "An incentive to improve health and personal care",
    },
    {
      question:
        "What is the maximum amount you can request in advance with the Brain Power Benefit for courses related to soft or hard skills?",
      options: ["$50", "$30", "$20", "$5"],
      answer: "$50",
    },
    {
      question: "What does the Mentorship Program at Lean Tech help you with?",
      options: [
        "Organizing event",
        "Boosting your career and acquiring new skills",
        "Taking paid time off",
        "Finding housing",
      ],
      answer: "Boosting your career and acquiring new skills",
    },
    {
      question:
        "Where can English Training Program (ETP) requests be processed at Lean Tech?",
      options: [
        "Through Let'z",
        "Through LinkedIn",
        "Through Email",
        "Through WALT",
      ],
      answer: "Through WALT",
    },
    {
      question:
        "What can you request through WALT in relation to technical growth?",
      options: [
        "Recommendations for favorite restaurants",
        "Technical Plans to grow in different technologies",
        "Requests for personal loans",
        "Access to vacation plans",
      ],
      answer: "Technical Plans to grow in different technologies",
    },
    {
      question: "What does the Mentorship Program at Lean Tech help you with?",
      options: [
        "Organizing event",
        "Boosting your career and acquiring new skills",
        "Taking paid time off",
        "Finding housing",
      ],
      answer: "Boosting your career and acquiring new skills",
    },
    {
      question: "Among many things, what can you do on the Home page of WALT?",
      options: [
        "Make posts and view posts from Lean Tech colleagues",
        "Access financial reports",
        "Book meeting rooms",
        "Request tech equipment",
      ],
      answer: "Make posts and view posts from Lean Tech colleagues",
    },
  ];

  const shuffleArray = (arr: any[]) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const handleNextQuestion = useCallback(() => {
    setSelectedAnswer(null);
    if (currentQuestion < leanQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(13);
    } else {
      setQuizEnded(true);
    }
  }, [currentQuestion]);

  useEffect(() => {
    const savedPlayer = localStorage.getItem("player");
    if (savedPlayer) {
      setPlayer(JSON.parse(savedPlayer));
    }
    setShuffledOptions(
      shuffleArray([...leanQuestions[currentQuestion].options])
    );
  }, [currentQuestion]);

  useEffect(() => {
    if (timeLeft > 0 && !quizEnded) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !quizEnded) {
      setLives(lives - 1);
      handleNextQuestion();
    }
  }, [timeLeft, quizEnded, lives, handleNextQuestion]);

  useEffect(() => {
    if (lives === 0) {
      setQuizEnded(true);
    }
  }, [lives]);

  useEffect(() => {
    if (!soundPlayed) {
      soundStart.play();
      setSoundPlayed(true);
    }
  }, [setSoundPlayed, soundPlayed]);

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
      // Trigger wrong answer animation, SVG body animations goes here
      setWrongAnswerAnimation(WrongAnswerGif);
      setWhiteFlashAnimation(true);
      setCurrentSvgIndex(
        (prevIndex) => (prevIndex + 1) % wrongAnswerSvgs.length
      );
      soundStart.play();
    }
    setTimeout(() => {
      handleNextQuestion();
      setWrongAnswerAnimation(null); // Reset
    }, 1000);
    setTimeout(() => {
      setWhiteFlashAnimation(false);
    }, 100);
  };

  const showAnswersHandler = () => {
    setShowAnswers(true);
  };

  if (quizEnded) {
    return (
      <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8">
        <Card className="w-full max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-center mb-6">
              Lean Trivia Results!
            </h2>
            <p className="text-xl text-center mb-4">
              {player ? `Hey  ${player.nickname}!, your ` : "You, "} score is{" "}
              {score} out of {leanQuestions.length}!
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
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 min-h-screen flex flex-col justify-between p-4 sm:p-6 lg:p-8 ">
      {wrongAnswerAnimation && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <img
            src={wrongAnswerAnimation}
            alt="Wrong Answer"
            className="w-64 h-84 -mt-32 animate-bounce"
          />
        </div>
      )}
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
        {whiteFlashAnimation && (
          <div className="fixed inset-0 z-40">
            <img
              src={WhiteFlashGif}
              alt="White Flash"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="relative w-64 h-full sm:w-80 sm:h-80 overflow-hidden">
          <img
            src={wrongAnswerSvgs[currentSvgIndex]}
            alt="Lean Bunny"
            className="w-full h-full object-contain"
          />
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
                className="p-4 text-sm sm:text-base md:text-lg h-auto min-h-[60px] sm:min-h-[80px] flex items-center justify-center"
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
