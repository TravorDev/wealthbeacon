"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarWidth, setSidebarWidth] = useState("250px");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Handle sidebar collapse state
  useEffect(() => {
    setIsMounted(true);
    
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarWidth("0px");
        setSidebarCollapsed(true);
      } else {
        setSidebarWidth(sidebarCollapsed ? "70px" : "250px");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [sidebarCollapsed]);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
    setSidebarWidth(!sidebarCollapsed ? "70px" : "250px");
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Floating Sidebar */}
      <Sidebar 
        className="fixed left-0 top-0 z-30 h-screen shadow-md"
        collapsed={sidebarCollapsed}
        onToggle={toggleSidebar}
      />
      
      <div 
        className="flex flex-1 flex-col transition-all duration-300"
        style={{ marginLeft: sidebarWidth }}
      >
        {/* Floating Header */}
        <Header 
          sidebarWidth={sidebarWidth} 
          className="fixed top-0 z-20 w-full shadow-sm"
        />
        
        {/* Main Content with padding to account for floating header */}
        <main className="flex-1 overflow-auto px-4 pb-8 pt-20 md:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 