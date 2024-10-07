"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

type ScoreEntry = {
  id: string;
  playerName: string;
  score: number;
  date: string;
};

export default function GlobalScorecard() {
  const [scores, setScores] = useState<ScoreEntry[]>([]);

  useEffect(() => {
    const storedScores = localStorage.getItem("globalScores");
    if (storedScores) {
      setScores(JSON.parse(storedScores));
    }
  }, []);

  const clearScores = () => {
    localStorage.removeItem("globalScores");
    setScores([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4 sm:p-6 lg:p-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Global Scorecard
          </CardTitle>
        </CardHeader>
        <CardContent>
          {scores.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Player Name</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {scores.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell>{entry.playerName}</TableCell>
                    <TableCell>{entry.score}</TableCell>
                    <TableCell>{entry.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-center text-gray-500">No scores recorded yet.</p>
          )}
          {scores.length > 0 && (
            <div className="mt-4 flex justify-center">
              <Button onClick={clearScores} variant="destructive">
                Clear All Scores
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
