"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigationItems = [
  {
    title: "About Us",
    items: [
      {
        title: "FAQs",
        href: "#faqs",
        description: "Frequently asked questions about our services",
      },
      {
        title: "Culture",
        href: "#culture",
        description: "Learn about our company culture and values",
      },
      {
        title: "Testimonials",
        href: "#testimonials",
        description: "What our clients say about us",
      },
      {
        title: "How We Work",
        href: "#how-we-work",
        description: "Our process and methodology",
      },
    ],
  },
  {
    title: "Find Projects",
    items: [
      {
        title: "Save Project",
        href: "#save-project",
        description: "Save projects for later reference",
      },
      {
        title: "Proposals",
        href: "#proposals",
        description: "View and manage project proposals",
      },
      {
        title: "Offers",
        href: "#offers",
        description: "Current project opportunities",
      },
      {
        title: "Homepage",
        href: "#homepage",
        description: "Return to the main project listing",
      },
    ],
  },
  {
    title: "Join Our Team",
    items: [
      {
        title: "Application Process",
        href: "#application-process",
        description: "Learn how to join our team",
      },
      {
        title: "Benefits",
        href: "#benefits",
        description: "Explore our employee benefits",
      },
      {
        title: "Open Positions",
        href: "#open-positions",
        description: "View current job openings",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "See All",
        href: "#see-all",
        description: "Browse all resources",
      },
      {
        title: "Articles",
        href: "#articles",
        description: "Read our latest articles",
      },
      {
        title: "Resources",
        href: "#resources",
        description: "Helpful tools and guides",
      },
      {
        title: "Use Cases",
        href: "#use-cases",
        description: "Real-world applications",
      },
    ],
  },
];

export function NavbarItems() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/ksvn.png"
            alt="KSVA Logo"
            width={96}
            height={96}
            className="h-24 w-24"
          />
          <span className="text-3xl font-bold tracking-tight text-primary">
            KSVA
          </span>
        </Link>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {item.items.map((subItem) => (
                      <li key={subItem.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={subItem.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {subItem.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {subItem.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center space-x-4">
          <Button asChild size="lg" className="hidden lg:flex">
            <Link href="/crm/dashboard">For Business</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[350px]">
              <div className="grid gap-4 py-6">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src="/ksvn.png"
                    alt="KSVA Logo"
                    width={48}
                    height={48}
                    className="h-12 w-12"
                  />
                  <span className="text-xl font-bold">KSVA</span>
                </Link>
                <div className="grid gap-2">
                  <Link
                    href="/"
                    className="flex w-full items-center py-2 text-lg font-semibold"
                  >
                    Home
                  </Link>
                  {navigationItems.map((section) => (
                    <div key={section.title} className="grid gap-2">
                      <div className="flex w-full items-center py-2 text-lg font-semibold">
                        {section.title}
                      </div>
                      <div className="grid gap-2 pl-4">
                        {section.items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="text-muted-foreground hover:text-primary"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/crm/dashboard">
                  {" "}
                  <Button asChild size="lg">
                    For Business{" "}
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
