"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Bell, Search, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  sidebarWidth: string;
  className?: string;
}

export function Header({ sidebarWidth, className }: HeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header
      className={cn(
        "flex h-16 items-center justify-between border-b bg-background/95 px-4 transition-all duration-300 floating-element",
        className
      )}
      style={{ width: `calc(100% - ${sidebarWidth})` }}
    >
      <div className="flex items-center gap-4 md:gap-8">
        <div className="md:hidden">
          {/* Mobile sidebar trigger is in the Sidebar component */}
        </div>
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-[200px] rounded-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
          />
        </div>
        {searchOpen ? (
          <div className="relative flex w-full items-center md:hidden">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-full bg-background pl-8"
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-0 h-full"
              onClick={() => setSearchOpen(false)}
            >
              Cancel
            </Button>
          </div>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        )}
      </div>
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-[#ffd71c] p-0 text-center text-xs font-bold text-black">
                3
              </Badge>
              <span className="sr-only">Notifications</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[300px]">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-[300px] overflow-auto">
              <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                <div className="font-medium">Tax Saving Opportunity</div>
                <div className="text-sm text-muted-foreground">
                  You may qualify for an additional ฿15,000 tax deduction.
                </div>
                <div className="text-xs text-muted-foreground">2 hours ago</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                <div className="font-medium">Budget Alert</div>
                <div className="text-sm text-muted-foreground">
                  You've reached 80% of your dining budget this month.
                </div>
                <div className="text-xs text-muted-foreground">5 hours ago</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                <div className="font-medium">Goal Achievement</div>
                <div className="text-sm text-muted-foreground">
                  Congratulations! You've reached your emergency fund goal.
                </div>
                <div className="text-xs text-muted-foreground">Yesterday</div>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-center">
              <Link href="/notifications" className="w-full">
                View all notifications
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatars/01.png" alt="User" />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/profile" className="w-full">
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/settings" className="w-full">
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/subscription" className="w-full">
                Subscription
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/help" className="w-full">
                Help & Support
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/api/auth/signout" className="w-full">
                Sign out
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
} 