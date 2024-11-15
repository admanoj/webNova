"use client";

import * as React from "react";
import {
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
  FileText,
  Phone,
  UserPlus,
} from "lucide-react";

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
import Link from "next/link";

export function CrmSidebar() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        {/* Sidebar Component */}
        <Sidebar className="border-r hidden md:block" collapsible="icon">
          {/* Header Section */}
          <SidebarHeader>
            <div className="flex items-center gap-2 px-4 py-2">
              <BarChart3 className="h-6 w-6" />
              <h1 className="text-lg font-semibold">CRM Pro</h1>
            </div>
            <div className="px-4 py-2">
              <Input className="w-full" placeholder="Search..." type="search" />
            </div>
          </SidebarHeader>

          {/* Sidebar Content */}
          <ScrollArea className="flex-1">
            <SidebarContent>
              {/* Main Menu */}
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <Link href="/crm/dashboard" passHref>
                        <SidebarMenuButton>
                          <LayoutDashboard className="mr-2 h-4 w-4" />
                          <span>Dashboard</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <Link href="/crm/tasks" passHref>
                        <SidebarMenuButton>
                          <CheckSquare className="mr-2 h-4 w-4" />
                          <span>Tasks</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <Link href="/crm/leads" passHref>
                        <SidebarMenuButton>
                          <UserPlus className="mr-2 h-4 w-4" />
                          <span>Leads</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <Link href="/crm/opportunities" passHref>
                        <SidebarMenuButton>
                          <TrendingUp className="mr-2 h-4 w-4" />
                          <span>Opportunities</span>
                        </SidebarMenuButton>
                      </Link>
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

              {/* Products Section */}
              <SidebarGroup>
                <SidebarGroupLabel>Marketing</SidebarGroupLabel>

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

              {/* Reports Section */}
              <SidebarGroup>
                <SidebarGroupLabel>Analytics</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <FileText className="mr-2 h-4 w-4" />
                        <span>Reports</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Star className="mr-2 h-4 w-4" />
                        <span>Key Metrics</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </ScrollArea>

          {/* Footer Section */}
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

        {/* Main Content Area */}
        <main className="flex-1 p-4">
          <SidebarTrigger className="mb-4 md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Sidebar</span>
          </SidebarTrigger>
          {/* Main content goes here */}
        </main>
      </div>
    </SidebarProvider>
  );
}
