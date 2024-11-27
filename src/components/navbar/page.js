"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NavItem = ({ href, children }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      href={href}
      className="text-black hover:text-blue-500 font-medium transition-colors duration-200 relative group text-lg"
    >
      {children}
      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
    </Link>
  </motion.div>
);

const NavDropdown = ({ trigger, items }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <motion.button
          className="p-0 font-medium text-black hover:text-blue-500 hover:bg-transparent group text-lg flex items-center"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {trigger}
          <ChevronDown className="ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
        </motion.button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-56 bg-blue-600 text-black border-blue-600"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {items.map((item) => (
          <DropdownMenuItem key={item.href} asChild>
            <Link
              href={item.href}
              className="w-full hover:bg-blue-600 transition-colors duration-200 text-base"
            >
              {item.title}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2"
          >
            <Link href="/" className="flex items-center space-x-2 group">
              <img
                src="/ksvn.png"
                alt="KSVA Logo"
                className="h-24 w-24 transform transition-transform duration-300 ease-in-out "
              />
              <span className="text-3xl font-bold text-blue-700 tracking-tight">
                KSVA
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <NavItem href="/">Home</NavItem>
            <NavDropdown
              trigger="About Us"
              items={[
                { title: "FAQs", href: "#faqs" },
                { title: "Culture", href: "#culture" },
                { title: "Testimonials", href: "#testimonials" },
                { title: "How We Work", href: "#how-we-work" },
              ]}
            />
            <NavDropdown
              trigger="Find Projects"
              items={[
                { title: "Save Project", href: "#save-project" },
                { title: "Proposals", href: "#proposals" },
                { title: "Offers", href: "#offers" },
                { title: "Homepage", href: "#homepage" },
              ]}
            />
            <NavDropdown
              trigger="Join Our Team"
              items={[
                { title: "Application Process", href: "#application-process" },
                { title: "Benefits", href: "#benefits" },
                { title: "Open Positions", href: "#open-positions" },
              ]}
            />
            <NavDropdown
              trigger="Resources"
              items={[
                { title: "See All", href: "#see-all" },
                { title: "Articles", href: "#articles" },
                { title: "Resources", href: "#resources" },
                { title: "Use Cases", href: "#use-cases" },
              ]}
            />
          </div>

          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                className="bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg transform hover:-translate-y-0.5 text-lg"
              >
                <Link href="/crm/dashboard">For Business</Link>
              </Button>
            </motion.div>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-white"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-blue-800 text-white">
                <nav className="flex flex-col space-y-4 mt-6">
                  <Link
                    href="/"
                    className="text-black hover:text-blue-500 font-medium text-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <NavDropdown
                    trigger="About Us"
                    items={[
                      { title: "FAQs", href: "#faqs" },
                      { title: "Culture", href: "#culture" },
                      { title: "Testimonials", href: "#testimonials" },
                      { title: "How We Work", href: "#how-we-work" },
                    ]}
                  />
                  <NavDropdown
                    trigger="Find Projects"
                    items={[
                      { title: "Save Project", href: "#save-project" },
                      { title: "Proposals", href: "#proposals" },
                      { title: "Offers", href: "#offers" },
                      { title: "Homepage", href: "#homepage" },
                    ]}
                  />
                  <NavDropdown
                    trigger="Join Our Team"
                    items={[
                      {
                        title: "Application Process",
                        href: "#application-process",
                      },
                      { title: "Benefits", href: "#benefits" },
                      { title: "Open Positions", href: "#open-positions" },
                    ]}
                  />
                  <NavDropdown
                    trigger="Resources"
                    items={[
                      { title: "See All", href: "#see-all" },
                      { title: "Articles", href: "#articles" },
                      { title: "Resources", href: "#resources" },
                      { title: "Use Cases", href: "#use-cases" },
                    ]}
                  />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
