// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu } from "lucide-react";
// import { VisuallyHidden } from "@/components/ui/visually-hidden";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { DialogTitle } from "@/components/ui/dialog";

// const navItems = [
//   { title: "Home", href: "/" },
//   { title: "About Us", href: "/aboutTeam" },
//   {
//     title: "Services",
//     href: "/services",
//     content: [
//       {
//         title: "IT Consulting",
//         href: "/dropdown/consulting",
//         description: "Expert advice for your IT needs",
//       },
//       {
//         title: "Software Development",
//         href: "/dropdown/software",
//         description: "Custom software solutions",
//       },
//       {
//         title: "Cloud Services",
//         href: "/services/cloud",
//         description: "Scalable cloud infrastructure",
//       },
//       {
//         title: "Cybersecurity",
//         href: "/services/security",
//         description: "Protect your digital assets",
//       },
//     ],
//   },
//   { title: "Careers", href: "/careers" },
//   {
//     title: "Resources",
//     href: "/resources",
//     content: [
//       {
//         title: "Blog",
//         href: "/dropdown/blog",
//         description: "Read our latest articles and insights",
//       },
//       {
//         title: "Case Studies",
//         href: "/dropdown/caseStudies",
//         description: "Explore our client success stories",
//       },
//       {
//         title: "Whitepapers",
//         href: "/dropdown/whitepapers",
//         description: "In-depth research and analysis",
//       },
//       {
//         title: "FAQ",
//         href: "/dropdown/faq",
//         description: "Answers to commonly asked questions",
//       },
//     ],
//   },
// ];

// const ListItem = React.forwardRef((props, ref) => {
//   const { className, title, children, ...rest } = props;
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600",
//             className
//           )}
//           {...rest}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";

// export function NavbarItems() {
//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-blue-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
//       <div className="container mx-auto flex h-16 items-center justify-between px-4">
//         <Link href="/" className="flex items-center">
//           <Image src="/ksvn.png" alt="KSVN Logo" width={120} height={40} />
//         </Link>
//         <NavigationMenu className="hidden lg:flex">
//           <NavigationMenuList>
//             {navItems.map((item) => (
//               <NavigationMenuItem key={item.title}>
//                 {item.content ? (
//                   <NavigationMenuTrigger className="text-sm">
//                     {item.title}
//                   </NavigationMenuTrigger>
//                 ) : (
//                   <Link href={item.href} legacyBehavior passHref>
//                     <NavigationMenuLink
//                       className={navigationMenuTriggerStyle()}
//                     >
//                       {item.title}
//                     </NavigationMenuLink>
//                   </Link>
//                 )}
//                 {item.content && (
//                   <NavigationMenuContent>
//                     <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
//                       {item.content.map((subItem) => (
//                         <ListItem
//                           key={subItem.title}
//                           title={subItem.title}
//                           href={subItem.href}
//                         >
//                           {subItem.description}
//                         </ListItem>
//                       ))}
//                     </ul>
//                   </NavigationMenuContent>
//                 )}
//               </NavigationMenuItem>
//             ))}
//           </NavigationMenuList>
//         </NavigationMenu>
//         <div className="flex items-center space-x-4">
//           <Link href="/business" className="hidden md:inline-flex">
//             <Button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900">
//               For Business
//             </Button>
//           </Link>
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button variant="outline" size="icon" className="lg:hidden">
//                 <Menu className="h-5 w-5" />
//                 <span className="sr-only">Toggle menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-[300px] sm:w-[400px]">
//               <VisuallyHidden>
//                 <DialogTitle>Navigation Menu</DialogTitle>
//               </VisuallyHidden>
//               <nav className="flex flex-col space-y-4">
//                 {navItems.map((item) => (
//                   <div key={item.title} className="space-y-2">
//                     <Link
//                       href={item.href}
//                       className="text-lg font-medium text-blue-600 hover:text-blue-800"
//                     >
//                       {item.title}
//                     </Link>
//                     {item.content && (
//                       <ul className="ml-4 space-y-2">
//                         {item.content.map((subItem) => (
//                           <li key={subItem.title}>
//                             <Link
//                               href={subItem.href}
//                               className="text-sm text-gray-600 hover:text-blue-600"
//                             >
//                               {subItem.title}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>
//                 ))}
//                 <Link href="/business">
//                   <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
//                     For Business
//                   </Button>
//                 </Link>
//               </nav>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { VisuallyHidden } from "@/components/ui/visually-hidden";

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
import { DialogTitle } from "@/components/ui/dialog";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/aboutTeam" },
  {
    title: "Services",
    href: "/services",
    content: [
      {
        title: "IT Consulting",
        href: "/dropdown/consulting",
        description: "Expert advice for your IT needs",
        image: "/IT.svg",
      },
      {
        title: "Software Development",
        href: "/dropdown/software",
        description: "Custom software solutions",
        image: "/software.svg",
      },
      {
        title: "Cloud Services",
        href: "/dropdown/cloud",
        description: "Scalable cloud infrastructure",
        image: "/cloud.svg",
      },
      {
        title: "Cybersecurity",
        href: "/dropdown/cyber",
        description: "Protect your digital assets",
        image: "/cyber.svg",
      },
    ],
  },
  { title: "Careers", href: "/careers" },
  {
    title: "Resources",
    href: "/resources",
    content: [
      {
        title: "Blog",
        href: "/dropdown/blog",
        description: "Read our latest articles and insights",
        image: "/blog.svg",
      },
      {
        title: "Case Studies",
        href: "/dropdown/caseStudies",
        description: "Explore our client success stories",
        image: "/case.svg",
      },
      {
        title: "Whitepapers",
        href: "/dropdown/whitepaper",
        description: "In-depth research and analysis",
        image: "/paper.svg",
      },
      {
        title: "FAQ",
        href: "/dropdown/faq",
        description: "Answers to commonly asked questions",
        image: "/faq.svg",
      },
    ],
  },
];

const ListItem = React.forwardRef((props, ref) => {
  const { className, title, children, image, ...rest } = props;
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600",
            className
          )}
          {...rest}
        >
          <div className="flex items-center space-x-4">
            <Image
              src={image}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 object-cover"
            />
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function NavbarItems() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image src="/ksvn.png" alt="KSVN Logo" width={120} height={40} />
        </Link>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.content ? (
                  <NavigationMenuTrigger className="text-sm">
                    {item.title}
                  </NavigationMenuTrigger>
                ) : (
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                )}
                {item.content && (
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.content.map((subItem) => (
                        <ListItem
                          key={subItem.title}
                          title={subItem.title}
                          href={subItem.href}
                          image={subItem.image}
                        >
                          {subItem.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center space-x-4">
          <Link href="/business" className="hidden md:inline-flex">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900">
              For Business
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden ">
                <Menu className="h-5 w-5" />
                <VisuallyHidden>Toggle menu</VisuallyHidden>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] ">
              <VisuallyHidden>
                <DialogTitle>Navigation Menu</DialogTitle>
              </VisuallyHidden>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-blue-600 hover:text-blue-800"
                    >
                      {item.title}
                    </Link>
                    {item.content && (
                      <ul className="ml-4 space-y-2">
                        {item.content.map((subItem) => (
                          <li
                            key={subItem.title}
                            className="flex items-center space-x-4"
                          >
                            <Image
                              src={subItem.image}
                              alt=""
                              width={40}
                              height={40}
                              className="h-10 w-10 object-cover"
                            />
                            <Link
                              href={subItem.href}
                              className="text-sm text-gray-600 hover:text-blue-600"
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
                <Link href="/business">
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                    For Business
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
