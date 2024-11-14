"use client";

import * as React from "react";
import {
  Search,
  LayoutDashboard,
  CheckSquare,
  Calendar,
  Mail,
  PuzzleIcon,
  Users,
  Star,
  BarChart3,
  TrendingUp,
  Package,
  Settings,
  HelpCircle,
  Menu,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Component() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar className="border-r" collapsible="icon">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-4 py-2">
              <BarChart3 className="h-6 w-6" />
              <h1 className="text-lg font-semibold">CRM Pro</h1>
            </div>
            <div className="px-4 py-2">
              <Input className="w-full" placeholder="Search..." type="search" />
            </div>
          </SidebarHeader>
          <ScrollArea className="flex-1">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <CheckSquare className="mr-2 h-4 w-4" />
                        <span>Tasks</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>Calendar</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel>Products</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Mail className="mr-2 h-4 w-4" />
                        <span>Emails</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <PuzzleIcon className="mr-2 h-4 w-4" />
                        <span>Integrations</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Users className="mr-2 h-4 w-4" />
                        <span>Contacts</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel>Favorites</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Star className="mr-2 h-4 w-4" />
                        <span>Opportunity Stages</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <TrendingUp className="mr-2 h-4 w-4" />
                        <span>Key Metrics</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Package className="mr-2 h-4 w-4" />
                        <span>Product Plan</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </ScrollArea>
          <SidebarFooter>
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage
                    alt="User avatar"
                    src="/placeholder-avatar.jpg"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">
                    john@example.com
                  </p>
                </div>
              </div>
              <div className="flex gap-1">
                <Button size="icon" variant="ghost">
                  <Settings className="h-4 w-4" />
                  <span className="sr-only">Settings</span>
                </Button>
                <Button size="icon" variant="ghost">
                  <HelpCircle className="h-4 w-4" />
                  <span className="sr-only">Help Center</span>
                </Button>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1 p-4">
          <SidebarTrigger className="mb-4 md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Sidebar</span>
          </SidebarTrigger>
          {/* Your main content goes here */}
          <h1 className="text-2xl font-bold">Welcome to CRM Pro</h1>
          <p className="mt-2">
            Select an option from the sidebar to get started.
          </p>
        </main>
      </div>
    </SidebarProvider>
  );
}
