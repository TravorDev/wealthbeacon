"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { HelpCircle } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

// Format currency for Thai Baht
const formatCurrency = (value: number) => {
  return `฿${value.toLocaleString("th-TH")}`;
};

interface MonthlyCashFlowProps {
  income: number;
  expenses: number;
  savings: number;
  monthProgress: number; // 0-100 representing percentage of month completed
}

export function MonthlyCashFlow({
  income = 120000,
  expenses = 75000,
  savings = 45000,
  monthProgress = 65,
}: MonthlyCashFlowProps) {
  // Calculate percentages
  const expensePercentage = (expenses / income) * 100;
  const savingsPercentage = (savings / income) * 100;
  
  // Calculate burn rate (percentage of income spent so far)
  const burnRate = (expenses / income) * 100;
  
  // Determine if spending is on track
  const isOnTrack = burnRate <= monthProgress;
  
  return (
    <Card className="card h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">Monthly Cash Flow</CardTitle>
          <HoverCard>
            <HoverCardTrigger asChild>
              <button className="rounded-full p-1 hover:bg-muted">
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
                <span className="sr-only">About Cash Flow</span>
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">About Monthly Cash Flow</h4>
                <p className="text-sm text-muted-foreground">
                  This shows your income, expenses, and savings for the current month. The progress bar indicates how much of your income has been spent relative to how far we are in the month.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <CardDescription>Track your income and expenses this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Month progress */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-sm">
              <span>Month Progress</span>
              <span className="font-medium">{monthProgress}%</span>
            </div>
            <Progress value={monthProgress} className="h-2" />
          </div>
          
          {/* Income */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm">Income</span>
              <span className="font-medium">{formatCurrency(income)}</span>
            </div>
            <div className="h-2 w-full rounded-full bg-green-100">
              <div className="h-2 rounded-full bg-green-500" style={{ width: "100%" }} />
            </div>
          </div>
          
          {/* Expenses */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm">Expenses</span>
              <span className="font-medium">{formatCurrency(expenses)}</span>
            </div>
            <div className="h-2 w-full rounded-full bg-red-100">
              <div 
                className="h-2 rounded-full bg-red-500" 
                style={{ width: `${expensePercentage}%` }} 
              />
            </div>
          </div>
          
          {/* Savings */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm">Savings</span>
              <span className="font-medium">{formatCurrency(savings)}</span>
            </div>
            <div className="h-2 w-full rounded-full bg-blue-100">
              <div 
                className="h-2 rounded-full bg-blue-500" 
                style={{ width: `${savingsPercentage}%` }} 
              />
            </div>
          </div>
          
          {/* Spending pace */}
          <div className="rounded-lg bg-muted p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Spending Pace</p>
                <p className="text-xs text-muted-foreground">
                  {isOnTrack 
                    ? "You're spending at a good pace" 
                    : "You're spending faster than the month is progressing"}
                </p>
              </div>
              <div className={`rounded-full px-2 py-1 text-xs font-medium ${
                isOnTrack ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}>
                {isOnTrack ? "On Track" : "Over Budget"}
              </div>
            </div>
          </div>
          
          {/* Organic shape visualization */}
          <div className="relative h-24 w-full overflow-hidden rounded-lg bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef]">
            {/* Income blob */}
            <div 
              className="absolute left-0 top-0 h-full w-full bg-green-500 opacity-20"
              style={{
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              }}
            />
            
            {/* Expenses blob */}
            <div 
              className="absolute left-0 top-0 h-full bg-red-500 opacity-30"
              style={{
                width: `${expensePercentage}%`,
                borderRadius: "40% 60% 60% 40% / 40% 40% 60% 60%",
              }}
            />
            
            {/* Savings blob */}
            <div 
              className="absolute right-0 top-0 h-full bg-blue-500 opacity-30"
              style={{
                width: `${savingsPercentage}%`,
                borderRadius: "60% 40% 40% 60% / 60% 60% 40% 40%",
              }}
            />
            
            {/* Labels */}
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <span className="text-xs font-medium text-green-800">Income</span>
              <span className="text-xs font-medium text-blue-800">Savings</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 