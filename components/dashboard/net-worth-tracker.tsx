"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HelpCircle } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { 
  Area, 
  AreaChart, 
  Bar, 
  BarChart, 
  CartesianGrid, 
  Cell,
  Legend, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from "recharts";

// Sample data for the chart
const netWorthData = [
  { month: "Jan", assets: 1200000, liabilities: 800000, netWorth: 400000 },
  { month: "Feb", assets: 1250000, liabilities: 790000, netWorth: 460000 },
  { month: "Mar", assets: 1300000, liabilities: 780000, netWorth: 520000 },
  { month: "Apr", assets: 1350000, liabilities: 770000, netWorth: 580000 },
  { month: "May", assets: 1400000, liabilities: 760000, netWorth: 640000 },
  { month: "Jun", assets: 1450000, liabilities: 750000, netWorth: 700000 },
];

// Sample data for asset breakdown
const assetBreakdown = [
  { name: "Cash", value: 300000, color: "#36B37E" },
  { name: "Investments", value: 500000, color: "#00B8D9" },
  { name: "Property", value: 600000, color: "#6554C0" },
  { name: "Other", value: 50000, color: "#FFAB00" },
];

// Sample data for liability breakdown
const liabilityBreakdown = [
  { name: "Mortgage", value: 500000, color: "#FF5630" },
  { name: "Car Loan", value: 150000, color: "#FF8B00" },
  { name: "Credit Cards", value: 50000, color: "#FF5630" },
  { name: "Other Debt", value: 50000, color: "#FF8B00" },
];

// Format currency for Thai Baht
const formatCurrency = (value: number) => {
  return `฿${value.toLocaleString("th-TH")}`;
};

export function NetWorthTracker() {
  return (
    <Card className="card h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">Net Worth Tracker</CardTitle>
          <HoverCard>
            <HoverCardTrigger asChild>
              <button className="rounded-full p-1 hover:bg-muted">
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
                <span className="sr-only">About Net Worth</span>
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">About Net Worth</h4>
                <p className="text-sm text-muted-foreground">
                  Your net worth is calculated by subtracting your total liabilities (what you owe) from your total assets (what you own).
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <CardDescription>Track your assets and liabilities over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Total Assets</p>
              <p className="text-lg font-bold text-green-600">{formatCurrency(1450000)}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Total Liabilities</p>
              <p className="text-lg font-bold text-red-600">{formatCurrency(750000)}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Net Worth</p>
              <p className="text-lg font-bold">{formatCurrency(700000)}</p>
            </div>
          </div>

          <Tabs defaultValue="trend">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="trend">Trend</TabsTrigger>
              <TabsTrigger value="assets">Assets</TabsTrigger>
              <TabsTrigger value="liabilities">Liabilities</TabsTrigger>
            </TabsList>
            <TabsContent value="trend" className="h-[200px] pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={netWorthData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                  <defs>
                    <linearGradient id="colorAssets" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#36B37E" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#36B37E" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorLiabilities" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF5630" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#FF5630" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorNetWorth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00B8D9" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#00B8D9" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                  <YAxis 
                    tickFormatter={(value) => `฿${(value / 1000).toFixed(0)}k`} 
                    tick={{ fontSize: 10 }}
                  />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <Tooltip 
                    formatter={(value: number) => formatCurrency(value)}
                    labelStyle={{ fontWeight: "bold" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="assets"
                    stroke="#36B37E"
                    fillOpacity={1}
                    fill="url(#colorAssets)"
                    name="Assets"
                  />
                  <Area
                    type="monotone"
                    dataKey="liabilities"
                    stroke="#FF5630"
                    fillOpacity={1}
                    fill="url(#colorLiabilities)"
                    name="Liabilities"
                  />
                  <Area
                    type="monotone"
                    dataKey="netWorth"
                    stroke="#00B8D9"
                    fillOpacity={1}
                    fill="url(#colorNetWorth)"
                    name="Net Worth"
                  />
                  <Legend wrapperStyle={{ fontSize: "10px" }} />
                </AreaChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="assets" className="h-[200px] pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={assetBreakdown} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                  <YAxis 
                    tickFormatter={(value) => `฿${(value / 1000).toFixed(0)}k`} 
                    tick={{ fontSize: 10 }}
                  />
                  <Tooltip 
                    formatter={(value: number) => formatCurrency(value)}
                    labelStyle={{ fontWeight: "bold" }}
                  />
                  <Bar dataKey="value" name="Value">
                    {assetBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="liabilities" className="h-[200px] pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={liabilityBreakdown} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                  <YAxis 
                    tickFormatter={(value) => `฿${(value / 1000).toFixed(0)}k`} 
                    tick={{ fontSize: 10 }}
                  />
                  <Tooltip 
                    formatter={(value: number) => formatCurrency(value)}
                    labelStyle={{ fontWeight: "bold" }}
                  />
                  <Bar dataKey="value" name="Value">
                    {liabilityBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  );
} 