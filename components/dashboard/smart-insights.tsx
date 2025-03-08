"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, Lightbulb, TrendingUp, TrendingDown, AlertTriangle, CheckCircle2 } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";

interface Insight {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  type: "positive" | "negative" | "warning" | "info";
  actionText?: string;
  actionLink?: string;
}

const insights: Insight[] = [
  {
    id: "electricity-increase",
    title: "Electricity spending increased",
    description: "Your electricity spending is 40% higher than last month. Consider checking for energy-intensive appliances that might need maintenance.",
    icon: <TrendingUp className="h-5 w-5" />,
    type: "negative",
    actionText: "View Utility Expenses",
    actionLink: "/transactions?category=utilities",
  },
  {
    id: "emergency-fund",
    title: "Emergency fund goal progress",
    description: "You're on track to reach your emergency fund goal 2 months earlier than planned. Keep up the good work!",
    icon: <TrendingUp className="h-5 w-5" />,
    type: "positive",
    actionText: "View Goal Details",
    actionLink: "/goals/emergency-fund",
  },
  {
    id: "subscription-overlap",
    title: "Subscription overlap detected",
    description: "You're paying for both Netflix and Disney+. Consider if you need both services or if you could alternate between them.",
    icon: <AlertTriangle className="h-5 w-5" />,
    type: "warning",
    actionText: "Review Subscriptions",
    actionLink: "/subscriptions",
  },
  {
    id: "tax-deduction",
    title: "New tax deduction opportunity",
    description: "Based on your recent medical expenses, you may qualify for an additional tax deduction of up to ฿20,000.",
    icon: <CheckCircle2 className="h-5 w-5" />,
    type: "positive",
    actionText: "Explore Tax Savings",
    actionLink: "/tax",
  },
];

export function SmartInsights() {
  // Get icon color based on insight type
  const getIconColor = (type: string) => {
    switch (type) {
      case "positive":
        return "text-green-500";
      case "negative":
        return "text-red-500";
      case "warning":
        return "text-yellow-500";
      case "info":
        return "text-blue-500";
      default:
        return "text-gray-500";
    }
  };
  
  // Get badge style based on insight type
  const getBadgeStyle = (type: string) => {
    switch (type) {
      case "positive":
        return "bg-green-100 text-green-800";
      case "negative":
        return "bg-red-100 text-red-800";
      case "warning":
        return "bg-yellow-100 text-yellow-800";
      case "info":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  
  return (
    <Card className="card h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">Smart Insights</CardTitle>
          <HoverCard>
            <HoverCardTrigger asChild>
              <button className="rounded-full p-1 hover:bg-muted">
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
                <span className="sr-only">About Smart Insights</span>
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">About Smart Insights</h4>
                <p className="text-sm text-muted-foreground">
                  Smart Insights uses AI to analyze your financial data and identify patterns, opportunities, and potential issues. These insights are updated daily based on your latest transactions and financial activities.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <CardDescription>AI-powered observations about your finances</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight) => (
            <div key={insight.id} className="rounded-lg border p-3">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className={`rounded-full p-1.5 ${getBadgeStyle(insight.type)}`}>
                      <div className={getIconColor(insight.type)}>
                        {insight.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">{insight.title}</h3>
                      <p className="text-xs text-muted-foreground">{insight.description}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className={getBadgeStyle(insight.type)}>
                    {insight.type === "positive" ? "Positive" : 
                     insight.type === "negative" ? "Alert" : 
                     insight.type === "warning" ? "Warning" : "Info"}
                  </Badge>
                </div>
                {insight.actionText && (
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    {insight.actionText}
                  </Button>
                )}
              </div>
            </div>
          ))}
          
          <div className="flex items-center justify-center gap-2 pt-2">
            <Lightbulb className="h-4 w-4 text-muted-foreground" />
            <p className="text-xs text-muted-foreground">
              Insights are generated based on your financial activity
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 