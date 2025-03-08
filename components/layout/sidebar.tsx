"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  BarChart3, 
  CreditCard, 
  DollarSign, 
  Home, 
  LineChart, 
  Menu, 
  PiggyBank, 
  Receipt, 
  Settings, 
  Users, 
  Calendar, 
  Target, 
  FileText,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface SidebarProps {
  className?: string;
  collapsed?: boolean;
  onToggle?: () => void;
}

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

export function Sidebar({ className, collapsed = false, onToggle }: SidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(collapsed);
  
  // Update internal state when prop changes
  useEffect(() => {
    setIsCollapsed(collapsed);
  }, [collapsed]);

  // Handle internal toggle and propagate to parent if provided
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
    if (onToggle) {
      onToggle();
    }
  };

  const navItems: NavItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: "Accounts & Balances",
      href: "/accounts",
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      title: "Transactions",
      href: "/transactions",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      title: "Budgeting",
      href: "/budgeting",
      icon: <PiggyBank className="h-5 w-5" />,
    },
    {
      title: "Tax Optimization",
      href: "/tax",
      icon: <Receipt className="h-5 w-5" />,
    },
    {
      title: "Investments",
      href: "/investments",
      icon: <LineChart className="h-5 w-5" />,
    },
    {
      title: "Goals & Planning",
      href: "/goals",
      icon: <Target className="h-5 w-5" />,
    },
    {
      title: "Financial Calendar",
      href: "/calendar",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      title: "Documents",
      href: "/documents",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      title: "Reports",
      href: "/reports",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      title: "Partner Dashboard",
      href: "/partner",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="fixed left-4 top-4 z-40 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-[#5c504c] text-white p-0 floating-element">
          <div className="h-full px-3 py-4">
            <div className="mb-10 flex items-center justify-center py-4">
              <h2 className="text-2xl font-bold">WealthBeacon</h2>
            </div>
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center rounded-lg px-3 py-2 text-sm transition-colors hover:bg-[#6c605c] hover:text-white",
                    pathname === item.href ? "bg-[#6c605c] text-white" : "text-gray-200"
                  )}
                >
                  {item.icon}
                  <span className="ml-3">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div
        className={cn(
          "hidden md:flex flex-col h-screen bg-[#5c504c] text-white transition-all duration-300 floating-element",
          isCollapsed ? "w-[70px]" : "w-[250px]",
          className
        )}
      >
        <div className="flex items-center justify-between p-4">
          {!isCollapsed && <h2 className="text-xl font-bold">WealthBeacon</h2>}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleToggle}
            className="text-white hover:bg-[#6c605c]"
          >
            {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </Button>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="space-y-1 px-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center rounded-lg px-3 py-2 text-sm transition-colors hover:bg-[#6c605c] hover:text-white",
                  pathname === item.href ? "bg-[#6c605c] text-white" : "text-gray-200",
                  isCollapsed && "justify-center px-2"
                )}
              >
                {item.icon}
                {!isCollapsed && <span className="ml-3">{item.title}</span>}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
} 