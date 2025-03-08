"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { HelpCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { addMonths, format, isSameDay, isSameMonth, subMonths } from "date-fns";

interface FinancialEvent {
  id: string;
  title: string;
  date: Date;
  type: "bill" | "income" | "tax" | "investment" | "goal";
  amount?: number;
  description?: string;
}

// Sample financial events
const financialEvents: FinancialEvent[] = [
  {
    id: "rent-payment",
    title: "Rent Payment",
    date: new Date(2025, 2, 5), // March 5, 2025
    type: "bill",
    amount: 15000,
    description: "Monthly apartment rent",
  },
  {
    id: "salary-deposit",
    title: "Salary Deposit",
    date: new Date(2025, 2, 28), // March 28, 2025
    type: "income",
    amount: 85000,
    description: "Monthly salary from ABC Company",
  },
  {
    id: "car-insurance",
    title: "Car Insurance",
    date: new Date(2025, 2, 15), // March 15, 2025
    type: "bill",
    amount: 8500,
    description: "Quarterly car insurance premium",
  },
  {
    id: "tax-filing-deadline",
    title: "Tax Filing Deadline",
    date: new Date(2025, 2, 31), // March 31, 2025
    type: "tax",
    description: "Personal income tax filing deadline",
  },
  {
    id: "investment-dividend",
    title: "Dividend Payment",
    date: new Date(2025, 2, 10), // March 10, 2025
    type: "investment",
    amount: 3500,
    description: "Quarterly dividend from SET50 ETF",
  },
  {
    id: "emergency-fund-goal",
    title: "Emergency Fund Goal",
    date: new Date(2025, 2, 20), // March 20, 2025
    type: "goal",
    amount: 300000,
    description: "Target date for emergency fund completion",
  },
];

// Format currency for Thai Baht
const formatCurrency = (value: number) => {
  return `฿${value.toLocaleString("th-TH")}`;
};

export function FinancialCalendar() {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  // Get events for the selected date
  const selectedDateEvents = selectedDate
    ? financialEvents.filter((event) => isSameDay(event.date, selectedDate))
    : [];
  
  // Get events for the current month
  const currentMonthEvents = financialEvents.filter((event) => 
    isSameMonth(event.date, date)
  );
  
  // Get event type color
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "bill":
        return "bg-red-100 text-red-800";
      case "income":
        return "bg-green-100 text-green-800";
      case "tax":
        return "bg-orange-100 text-orange-800";
      case "investment":
        return "bg-blue-100 text-blue-800";
      case "goal":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  
  return (
    <Card className="card h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">Financial Calendar</CardTitle>
          <HoverCard>
            <HoverCardTrigger asChild>
              <button className="rounded-full p-1 hover:bg-muted">
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
                <span className="sr-only">About Financial Calendar</span>
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">About Financial Calendar</h4>
                <p className="text-sm text-muted-foreground">
                  Track important financial dates including bill payments, income deposits, tax deadlines, investment events, and financial goal milestones.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <CardDescription>Important financial dates and events</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setDate(subMonths(date, 1))}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-sm font-medium">
              {format(date, "MMMM yyyy")}
            </h2>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setDate(addMonths(date, 1))}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            month={date}
            onMonthChange={setDate}
            className="rounded-md border"
          />
          
          <div className="space-y-3">
            <h3 className="text-sm font-medium">
              {selectedDate ? format(selectedDate, "MMMM d, yyyy") : "No date selected"}
            </h3>
            
            {selectedDateEvents.length > 0 ? (
              <div className="space-y-2">
                {selectedDateEvents.map((event) => (
                  <div key={event.id} className="rounded-lg border p-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-medium">{event.title}</h4>
                          <Badge variant="outline" className={getEventTypeColor(event.type)}>
                            {event.type}
                          </Badge>
                        </div>
                        {event.description && (
                          <p className="text-xs text-muted-foreground">{event.description}</p>
                        )}
                      </div>
                      {event.amount && (
                        <span className={`text-sm font-medium ${
                          event.type === "income" || event.type === "investment" 
                            ? "text-green-600" 
                            : event.type === "bill" 
                            ? "text-red-600" 
                            : ""
                        }`}>
                          {formatCurrency(event.amount)}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : selectedDate ? (
              <p className="text-xs text-muted-foreground">No events scheduled for this date</p>
            ) : null}
          </div>
          
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Upcoming Events</h3>
            <div className="space-y-2">
              {currentMonthEvents
                .sort((a, b) => a.date.getTime() - b.date.getTime())
                .slice(0, 3)
                .map((event) => (
                  <div key={event.id} className="flex items-center justify-between rounded-lg border p-2">
                    <div className="flex items-center gap-2">
                      <div className={`h-2 w-2 rounded-full ${
                        event.type === "bill" ? "bg-red-500" :
                        event.type === "income" ? "bg-green-500" :
                        event.type === "tax" ? "bg-orange-500" :
                        event.type === "investment" ? "bg-blue-500" :
                        "bg-purple-500"
                      }`} />
                      <span className="text-xs font-medium">{event.title}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {format(event.date, "MMM d")}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 