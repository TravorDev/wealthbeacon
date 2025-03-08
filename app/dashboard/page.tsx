"use client";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { FinancialHealthScore } from "@/components/dashboard/financial-health-score";
import { NetWorthTracker } from "@/components/dashboard/net-worth-tracker";
import { MonthlyCashFlow } from "@/components/dashboard/monthly-cash-flow";
import { TaxSavings } from "@/components/dashboard/tax-savings";
import { SmartInsights } from "@/components/dashboard/smart-insights";
import { FinancialGoals } from "@/components/dashboard/financial-goals";
import { FinancialCalendar } from "@/components/dashboard/financial-calendar";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col items-start justify-between space-y-2 sm:flex-row sm:items-center sm:space-y-0">
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              Welcome back! Here's an overview of your finances.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground sm:text-sm">Last updated: Today, 10:30 AM</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Financial Health Score */}
          <div className="lg:col-span-1">
            <FinancialHealthScore 
              score={78} 
              previousScore={72} 
              lastUpdated="March 8, 2025"
            />
          </div>
          
          {/* Net Worth Tracker */}
          <div className="md:col-span-2">
            <NetWorthTracker />
          </div>
          
          {/* Monthly Cash Flow */}
          <div>
            <MonthlyCashFlow 
              income={120000} 
              expenses={75000} 
              savings={45000} 
              monthProgress={65}
            />
          </div>
          
          {/* Tax Savings */}
          <div>
            <TaxSavings />
          </div>
          
          {/* Smart Insights */}
          <div>
            <SmartInsights />
          </div>
          
          {/* Financial Goals */}
          <div className="md:col-span-2 lg:col-span-2">
            <FinancialGoals />
          </div>
          
          {/* Financial Calendar */}
          <div className="md:col-span-2 lg:col-span-1">
            <FinancialCalendar />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 