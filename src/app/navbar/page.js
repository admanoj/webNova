"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "#",
    dropdownItems: [
      { name: "Our Story", href: "/about/story", icon: "📖" },
      { name: "Team", href: "/about/team", icon: "👥" },
      { name: "Mission & Values", href: "/about/mission", icon: "🎯" },
    ],
  },
  {
    name: "Career",
    href: "#",
    dropdownItems: [
      { name: "Open Positions", href: "/career/positions", icon: "💼" },
      { name: "Internships", href: "/career/internships", icon: "🎓" },
      { name: "Life at KSVA", href: "/career/life-at-ksva", icon: "🌟" },
    ],
  },
  {
    name: "Resources",
    href: "#",
    dropdownItems: [
      { name: "Blog", href: "/blog", icon: "✍️" },
      { name: "Case Studies", href: "/case-studies", icon: "📊" },
      { name: "Whitepapers", href: "/whitepapers", icon: "📄" },
      { name: "Webinars", href: "/webinars", icon: "🎥" },
      { name: "FAQ", href: "/faq", icon: "❓" },
    ],
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 transition-shadow duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                className="h-24 w-auto"
                src="/ksvn.png"
                alt="KSVA Logo"
                width={150}
                height={150}
              />
              <span className="ml-2 text-xl font-bold text-gray-800">KSVA</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {navItems.map((item) => (
              <React.Fragment key={item.name}>
                {item.dropdownItems ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                      {item.dropdownItems.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.name} asChild>
                          <Link
                            href={dropdownItem.href}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors duration-150"
                          >
                            <span className="mr-2">{dropdownItem.icon}</span>
                            {dropdownItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-50"
                  >
                    {item.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button
              asChild
              className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
            >
              <Link href="/business">For Business</Link>
            </Button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <Button
              variant="ghost"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "sm:hidden transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <React.Fragment key={item.name}>
              {item.dropdownItems ? (
                <div className="space-y-1">
                  <Button
                    variant="ghost"
                    className="w-full text-left justify-start text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.name}
                  </Button>
                  <div className="pl-4 space-y-1">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-150"
                      >
                        <span className="mr-2">{dropdownItem.icon}</span>
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )}
            </React.Fragment>
          ))}
          <div className="mt-4">
            <Link href="/business">For Business</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
