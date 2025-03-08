"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, Plus } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";

// Format currency for Thai Baht
const formatCurrency = (value: number) => {
  return `฿${value.toLocaleString("th-TH")}`;
};

interface FinancialGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: string;
  category: "savings" | "debt" | "investment" | "purchase";
  priority: "high" | "medium" | "low";
}

const financialGoals: FinancialGoal[] = [
  {
    id: "emergency-fund",
    name: "Emergency Fund",
    targetAmount: 300000,
    currentAmount: 225000,
    targetDate: "2025-12-31",
    category: "savings",
    priority: "high",
  },
  {
    id: "car-down-payment",
    name: "Car Down Payment",
    targetAmount: 200000,
    currentAmount: 80000,
    targetDate: "2026-06-30",
    category: "purchase",
    priority: "medium",
  },
  {
    id: "credit-card-debt",
    name: "Pay Off Credit Card",
    targetAmount: 150000,
    currentAmount: 120000,
    targetDate: "2025-09-30",
    category: "debt",
    priority: "high",
  },
  {
    id: "retirement-boost",
    name: "Retirement Boost",
    targetAmount: 500000,
    currentAmount: 100000,
    targetDate: "2027-12-31",
    category: "investment",
    priority: "medium",
  },
];

export function FinancialGoals() {
  // Get category color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "savings":
        return "bg-blue-100 text-blue-800";
      case "debt":
        return "bg-red-100 text-red-800";
      case "investment":
        return "bg-green-100 text-green-800";
      case "purchase":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  
  // Get progress color based on percentage
  const getProgressColor = (percentage: number) => {
    if (percentage >= 75) return "#36B37E"; // Green
    if (percentage >= 50) return "#00B8D9"; // Blue
    if (percentage >= 25) return "#FFAB00"; // Yellow
    return "#FF5630"; // Red
  };
  
  // Calculate days remaining until target date
  const getDaysRemaining = (targetDate: string) => {
    const today = new Date();
    const target = new Date(targetDate);
    const diffTime = target.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  
  // Format target date to readable format
  const formatTargetDate = (targetDate: string) => {
    const date = new Date(targetDate);
    return date.toLocaleDateString("th-TH", { year: "numeric", month: "short", day: "numeric" });
  };
  
  return (
    <Card className="card h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">Financial Goals</CardTitle>
          <HoverCard>
            <HoverCardTrigger asChild>
              <button className="rounded-full p-1 hover:bg-muted">
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
                <span className="sr-only">About Financial Goals</span>
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">About Financial Goals</h4>
                <p className="text-sm text-muted-foreground">
                  Track your progress toward important financial goals. Each goal shows your current progress, time remaining, and priority level.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <CardDescription>Track progress toward your financial objectives</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {financialGoals.slice(0, 4).map((goal) => {
              const percentage = Math.round((goal.currentAmount / goal.targetAmount) * 100);
              const daysRemaining = getDaysRemaining(goal.targetDate);
              const progressColor = getProgressColor(percentage);
              
              return (
                <div key={goal.id} className="rounded-lg border p-3">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-sm font-medium">{goal.name}</h3>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className={getCategoryColor(goal.category)}>
                            {goal.category}
                          </Badge>
                          {goal.priority === "high" && (
                            <Badge variant="outline" className="bg-orange-100 text-orange-800">
                              High Priority
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Circular progress indicator */}
                    <div className="flex items-center justify-between">
                      <div className="relative flex h-16 w-16 items-center justify-center">
                        {/* Background circle */}
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
                            className="transition-all duration-1000 ease-in-out"
                            cx="50"
                            cy="50"
                            r="40"
                            strokeWidth="8"
                            fill="none"
                            stroke={progressColor}
                            strokeLinecap="round"
                            strokeDasharray={`${(percentage / 100) * 251.2} 251.2`}
                            transform="rotate(-90 50 50)"
                          />
                        </svg>
                        
                        {/* Percentage text */}
                        <span className="text-sm font-bold">{percentage}%</span>
                      </div>
                      
                      <div className="space-y-1 text-right">
                        <p className="text-xs text-muted-foreground">Target</p>
                        <p className="text-sm font-medium">{formatCurrency(goal.targetAmount)}</p>
                        <p className="text-xs text-muted-foreground">Current</p>
                        <p className="text-sm font-medium">{formatCurrency(goal.currentAmount)}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">
                        {daysRemaining > 0 ? `${daysRemaining} days left` : "Overdue"}
                      </span>
                      <span className="text-muted-foreground">
                        Due: {formatTargetDate(goal.targetDate)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <Button variant="outline" className="w-full" size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add New Goal
          </Button>
        </div>
      </CardContent>
    </Card>
  );
} 