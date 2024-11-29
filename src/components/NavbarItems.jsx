"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";

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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@/components/ui/visually-hidden";

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
        "sticky top-0 z-50 w-full transition-colors duration-300 ",
        isScrolled ? "bg-blue-600 text-white" : "bg-white text-blue-600"
      )}
    >
      <div className="container flex h-20 items-center justify-between ">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/ksvn.png"
            alt="Company Logo"
            width={96}
            height={96}
            className="h-24 w-28"
          />
        </Link>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-black hover:bg-blue-100 hover:text-blue-600"
                  )}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="text-black hover:bg-blue-100 hover:text-blue-600">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                    {item.items.map((subItem) => (
                      <li key={subItem.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={subItem.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600"
                          >
                            <div className="text-sm font-medium leading-none text-black">
                              {subItem.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-blue-500">
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
          <Button
            asChild
            size="lg"
            className="hidden lg:flex bg-blue-600 text-white hover:bg-blue-700"
          >
            <Link href="/crm/dashboard">For Business</Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-current"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="w-full sm:w-[350px] bg-white overflow-y-auto">
              <VisuallyHidden>
                <DialogTitle>Navigation Menu</DialogTitle>
              </VisuallyHidden>
              <div className="grid gap-4 py-6">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src="/ksvn.png"
                    alt="Company Logo"
                    width={48}
                    height={48}
                    className="h-12 w-12"
                  />
                </Link>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="home">
                    <AccordionTrigger className="text-black hover:text-blue-600">
                      Home
                    </AccordionTrigger>
                  </AccordionItem>
                  {navigationItems.map((section, index) => (
                    <AccordionItem value={`item-${index}`} key={section.title}>
                      <AccordionTrigger className="text-black hover:text-blue-600">
                        {section.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid gap-2 pl-4">
                          {section.items.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="text-black hover:text-blue-600 py-2"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <Link href="/crm/dashboard" className="mt-4">
                  <Button
                    size="lg"
                    className="w-full bg-blue-600 text-white hover:bg-blue-700"
                  >
                    For Business
                  </Button>
                </Link>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
