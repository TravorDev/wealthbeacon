"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, ChevronRight, Clock } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";

// Format currency for Thai Baht
const formatCurrency = (value: number) => {
  return `฿${value.toLocaleString("th-TH")}`;
};

interface TaxSavingOpportunity {
  id: string;
  title: string;
  description: string;
  potentialSaving: number;
  category: string;
  difficulty: "easy" | "medium" | "hard";
  deadline?: string;
}

const taxSavingOpportunities: TaxSavingOpportunity[] = [
  {
    id: "rmf-contribution",
    title: "Maximize RMF Contribution",
    description: "Contribute to your Retirement Mutual Fund (RMF) to receive tax deductions up to 30% of your income.",
    potentialSaving: 45000,
    category: "Investment",
    difficulty: "medium",
    deadline: "December 30, 2025",
  },
  {
    id: "ssf-contribution",
    title: "Invest in Super Savings Fund",
    description: "Invest in SSF to receive tax deductions up to 30% of your income (max ฿200,000).",
    potentialSaving: 30000,
    category: "Investment",
    difficulty: "medium",
    deadline: "December 30, 2025",
  },
  {
    id: "donation",
    title: "Charitable Donations",
    description: "Make donations to qualified charities for tax deductions up to 10% of your income after expenses.",
    potentialSaving: 15000,
    category: "Donation",
    difficulty: "easy",
  },
  {
    id: "health-insurance",
    title: "Health Insurance Premium",
    description: "Pay for health insurance to receive tax deductions up to ฿25,000.",
    potentialSaving: 5000,
    category: "Insurance",
    difficulty: "easy",
  },
];

export function TaxSavings() {
  const totalPotentialSavings = taxSavingOpportunities.reduce(
    (sum, opportunity) => sum + opportunity.potentialSaving,
    0
  );
  
  const identifiedSavings = 75000;
  const potentialAdditionalSavings = totalPotentialSavings;
  
  // Calculate days until tax filing deadline
  const today = new Date();
  const taxDeadline = new Date(today.getFullYear(), 2, 31); // March 31
  if (today > taxDeadline) {
    taxDeadline.setFullYear(today.getFullYear() + 1);
  }
  const daysUntilDeadline = Math.ceil(
    (taxDeadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );
  
  // Get difficulty badge color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  
  return (
    <Card className="card h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">Tax Savings Opportunities</CardTitle>
          <HoverCard>
            <HoverCardTrigger asChild>
              <button className="rounded-full p-1 hover:bg-muted">
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
                <span className="sr-only">About Tax Savings</span>
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">About Tax Savings</h4>
                <p className="text-sm text-muted-foreground">
                  These are personalized tax-saving opportunities based on your financial profile and Thai tax regulations. Taking advantage of these can reduce your tax liability.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <CardDescription>Optimize your Thai tax situation</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Summary */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Identified Savings</p>
              <p className="text-lg font-bold text-green-600">{formatCurrency(identifiedSavings)}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Potential Additional</p>
              <p className="text-lg font-bold text-[#ffd71c]">{formatCurrency(potentialAdditionalSavings)}</p>
            </div>
          </div>
          
          {/* Tax filing countdown */}
          <div className="rounded-lg border bg-card p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Tax Filing Deadline</p>
                  <p className="text-xs text-muted-foreground">March 31, {today.getFullYear() + (today > taxDeadline ? 1 : 0)}</p>
                </div>
              </div>
              <div className="rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800">
                {daysUntilDeadline} days left
              </div>
            </div>
          </div>
          
          {/* Opportunities list */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Recommended Actions</h3>
            {taxSavingOpportunities.slice(0, 3).map((opportunity) => (
              <div key={opportunity.id} className="rounded-lg border p-3">
                <div className="flex justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-medium">{opportunity.title}</h4>
                      <Badge variant="outline" className={getDifficultyColor(opportunity.difficulty)}>
                        {opportunity.difficulty}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{opportunity.description}</p>
                    {opportunity.deadline && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>Deadline: {opportunity.deadline}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <span className="text-sm font-bold text-green-600">
                      {formatCurrency(opportunity.potentialSaving)}
                    </span>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            
            <Button variant="outline" className="w-full text-xs" size="sm">
              View All Opportunities
            </Button>
          </div>
          
          {/* Progress toward maximum deductions */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span>Progress toward maximum deductions</span>
              <span>45%</span>
            </div>
            <Progress value={45} className="h-1.5" />
            <p className="text-xs text-muted-foreground">
              You've utilized 45% of your available tax deductions for this year.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 