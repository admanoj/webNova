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
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const components = [
  {
    title: "Web Development",
    href: "/services/web-development",
    description:
      "Create stunning and functional websites tailored to your needs.",
  },
  {
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    description:
      "Build powerful mobile applications for iOS and Android platforms.",
  },
  {
    title: "Cloud Solutions",
    href: "/services/cloud-solutions",
    description:
      "Leverage cloud technology to scale your business efficiently.",
  },
];

const navItemStyles = `
  inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50 relative
  before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-blue-600 before:transition-all before:duration-700 hover:before:w-full
  text-black hover:text-blue-600 transition-all duration-700 ease-out text-xl
`;

export function NavbarItems() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-200 bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/ksvn.png?height=32&width=32"
            alt="KSVA Tech Logo"
            width={100}
            height={100}
          />
          <span className="hidden font-bold text-blue-600 sm:inline-block">
            KSVA Tech
          </span>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex space-x-4">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navItemStyles}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={navItemStyles}>
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-700 p-6 no-underline outline-none focus:shadow-md "
                        href="/services"
                      >
                        <div className="mt-4 text-lg font-medium text-white ">
                          Our Services
                        </div>
                        <p className="text-sm leading-tight text-white/90">
                          Explore our range of IT solutions tailored for your
                          business needs.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {components.map((component) => (
                    <ListItem
                      className="hover:bg-blue-200"
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={navItemStyles}>
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] md:grid-cols-2 lg:w-[500px] ">
                  <ListItem
                    title="About Us"
                    href="/company/about"
                    className="hover:bg-blue-200"
                  >
                    Learn about our mission, vision, and values.
                  </ListItem>
                  <ListItem
                    title="Team"
                    href="/company/team"
                    className="hover:bg-blue-200"
                  >
                    Meet the experts behind KSVA Tech.
                  </ListItem>
                  <ListItem
                    title="Careers"
                    href="/company/careers"
                    className="hover:bg-blue-200"
                  >
                    Join our team and grow your career in tech.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={navItemStyles}>
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
                  <ListItem
                    title="Documentation"
                    href="/resources/documentation"
                    className="hover:bg-blue-200"
                  >
                    Comprehensive guides for our products and services.
                  </ListItem>
                  <ListItem
                    title="Tutorials"
                    href="/resources/tutorials"
                    className="hover:bg-blue-200"
                  >
                    Step-by-step tutorials to help you get started.
                  </ListItem>
                  <ListItem
                    title="Case Studies"
                    href="/resources/case-studies"
                    className="hover:bg-blue-200"
                  >
                    Real-world examples of our solutions in action.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navItemStyles}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center space-x-4">
          <Link href="/crm/dashboard">
            {" "}
            <Button className="bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600 varian">
              For Business
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-500">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

function MobileNav() {
  return (
    <div className="flex flex-col space-y-4">
      <Link href="/" className="text-lg font-semibold">
        Home
      </Link>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="services">
          <AccordionTrigger>Services</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2">
              <Link href="/services/web-development" className="text-sm">
                Web Development
              </Link>
              <Link href="/services/mobile-app-development" className="text-sm">
                Mobile App Development
              </Link>
              <Link href="/services/cloud-solutions" className="text-sm">
                Cloud Solutions
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="company">
          <AccordionTrigger>Company</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2">
              <Link href="/company/about" className="text-sm">
                About Us
              </Link>
              <Link href="/company/team" className="text-sm">
                Team
              </Link>
              <Link href="/company/careers" className="text-sm">
                Careers
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="resources">
          <AccordionTrigger>Resources</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2">
              <Link href="/resources/documentation" className="text-sm">
                Documentation
              </Link>
              <Link href="/resources/tutorials" className="text-sm">
                Tutorials
              </Link>
              <Link href="/resources/case-studies" className="text-sm">
                Case Studies
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Link href="/blog" className="text-lg font-semibold">
        Blog
      </Link>
    </div>
  );
}
