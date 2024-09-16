import { Crown, Medal, Award } from "lucide-react";

const people = [
  {
    name: "Leslie the knight",
    score: 6500,
    role: "Spartan",
    image: "/warriorKnight.svg",
  },
  {
    name: "Michael the Wiser",
    score: 6350,
    role: "Wizard",
    image: "/wizard.svg",
  },
  {
    name: "Dries the Magic",
    score: 5700,
    role: "Persian",
    image: "/persian.svg",
  },
  {
    name: "Lindsay the Slippery",
    score: 5350,
    role: "Arcane",
    image: "/arcane.svg",
  },
];

export default function ScoreboardComponent() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          The most knowledgeable Lean Tech folks!{" "}
        </h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          {people.map((person, index) => (
            <div
              key={person.name}
              className="flex items-center justify-between p-6 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 relative">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={person.image}
                    alt=""
                  />
                  <div className="absolute -top-2 -left-2 bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <div className="text-lg font-medium text-gray-900">
                    {person.name}
                  </div>
                  <div className="text-sm text-gray-500">{person.role}</div>
                </div>
              </div>
              <div className="text-2xl font-bold text-blue-600 flex items-center">
                {index === 0 && <Crown className="text-yellow-400 mr-2" />}
                {index === 1 && <Medal className="text-gray-400 mr-2" />}
                {index === 2 && <Award className="text-orange-400 mr-2" />}
                {person.score.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
