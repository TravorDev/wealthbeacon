"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowUp, HelpCircle } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";

interface FinancialHealthScoreProps {
  score: number;
  previousScore: number;
  lastUpdated: string;
}

export function FinancialHealthScore({
  score,
  previousScore,
  lastUpdated,
}: FinancialHealthScoreProps) {
  const scoreDifference = score - previousScore;
  const isImproved = scoreDifference > 0;

  // Function to determine color based on score
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 60) return "text-yellow-500";
    if (score >= 40) return "text-orange-500";
    return "text-red-500";
  };

  // Function to determine progress color based on score
  const getProgressColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-yellow-500";
    if (score >= 40) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <Card className="card h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">Financial Health Score</CardTitle>
          <HoverCard>
            <HoverCardTrigger asChild>
              <button className="rounded-full p-1 hover:bg-muted">
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
                <span className="sr-only">About Financial Health Score</span>
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">About Financial Health Score</h4>
                <p className="text-sm text-muted-foreground">
                  Your Financial Health Score is calculated based on debt management, emergency savings, retirement readiness, insurance coverage, and investment diversification.
                </p>
                <div className="pt-2">
                  <p className="text-xs text-muted-foreground">
                    Last updated: {lastUpdated}
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <CardDescription>Your overall financial wellbeing</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative flex h-36 w-36 items-center justify-center">
            {/* Circular background with gradient */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] shadow-inner" />
            
            {/* Circular progress indicator */}
            <svg className="absolute h-full w-full" viewBox="0 0 100 100">
              <circle
                className="stroke-[#e9ecef]"
                cx="50"
                cy="50"
                r="40"
                strokeWidth="8"
                fill="none"
              />
              <circle
                className={`${getProgressColor(score)} transition-all duration-1000 ease-in-out`}
                cx="50"
                cy="50"
                r="40"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${(score / 100) * 251.2} 251.2`}
                transform="rotate(-90 50 50)"
              />
            </svg>
            
            {/* Score display */}
            <div className="relative flex flex-col items-center">
              <span className={`text-3xl font-bold ${getScoreColor(score)}`}>{score}</span>
              <span className="text-xs text-muted-foreground">out of 100</span>
            </div>
          </div>
          
          {/* Score change indicator */}
          <div className="flex items-center space-x-1">
            {isImproved ? (
              <ArrowUp className="h-4 w-4 text-green-500" />
            ) : (
              <ArrowUp className="h-4 w-4 rotate-180 text-red-500" />
            )}
            <span className={isImproved ? "text-green-500" : "text-red-500"}>
              {Math.abs(scoreDifference)} points {isImproved ? "increase" : "decrease"}
            </span>
          </div>
          
          {/* Component scores */}
          <div className="w-full space-y-2 pt-4">
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Debt Management</span>
                <span className="font-medium">75/100</span>
              </div>
              <Progress value={75} className="h-1.5" />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Emergency Savings</span>
                <span className="font-medium">60/100</span>
              </div>
              <Progress value={60} className="h-1.5" />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Retirement Readiness</span>
                <span className="font-medium">85/100</span>
              </div>
              <Progress value={85} className="h-1.5" />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Insurance Coverage</span>
                <span className="font-medium">90/100</span>
              </div>
              <Progress value={90} className="h-1.5" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 