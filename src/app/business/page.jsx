"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const formSchema = z.object({
  name: z.string().min(2, { message: "Required" }),
  email: z.string().email({ message: "Invalid email" }),
  company: z.string().min(2, { message: "Required" }),
  phone: z.string().optional(),
  projectType: z.string({ required_error: "Required" }),
  message: z.string().min(10, { message: "Min 10 characters" }),
});

const teamMembers = [
  {
    name: "Vasavi Thandu",
    title: "Chief Executive Officer",
    description:
      "Visionary leader with over 15 years of experience in tech industry. Drives company strategy, fosters innovation, and ensures sustainable growth.",
    image: "/vasavi.jpg?height=400&width=400",
  },
  {
    name: "Ishan Bhatta",
    title: "Chief Operating Officer",
    description:
      "Seasoned executive overseeing daily operations. Implements strategic initiatives and optimizes business processes for maximum efficiency.",
    image: "/ishan.jpg?height=400&width=400",
  },
  {
    name: "Rajnish Adhikari",
    title: "Operations Manager",
    description:
      "Detail-oriented professional coordinating cross-functional teams. Streamlines workflows and ensures seamless project execution.",
    image: "/rajnish.jpg?height=400&width=400",
  },
  {
    name: "Prasana Wagle",
    title: "Project Manager",
    description:
      "Certified PMP with a track record of successful project deliveries. Ensures client satisfaction through effective communication and resource management.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Manoj Adhikari",
    title: "Web Developer",
    description:
      "Skilled developer with expertise in React and Node.js. Creates responsive, user-friendly web applications with a focus on performance.",
    image: "/man.jpg?height=400&width=400",
  },
  {
    name: "Kritika Shrestha",
    title: "Digital Marketing Manager",
    description:
      "Creative strategist with a data-driven approach. Develops and implements comprehensive online marketing campaigns to boost brand visibility.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Prasana Wagle",
    title: "Project Manager",
    description:
      "Certified PMP with a track record of successful project deliveries. Ensures client satisfaction through effective communication and resource management.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Sofia Pandey",
    title: "UI/UX Designer",
    description:
      "Innovative designer with a keen eye for aesthetics. Creates intuitive and visually appealing interfaces that enhance user experience.",
    image: "/sofiya.jpg?height=400&width=400",
  },
  {
    name: "Isha Bhatta",
    title: "Web Developer",
    description:
      "Full-stack developer specializing in modern web technologies. Builds scalable and maintainable applications with a focus on clean code.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Nishu Dangal",
    title: "Web Developer",
    description:
      "Front-end expert with a passion for creating pixel-perfect designs. Skilled in HTML5, CSS3, and JavaScript frameworks.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Diego Valenzuela",
    title: "Sales Manager",
    description:
      "Results-driven professional with a proven track record in B2B sales. Develops and maintains strong client relationships to drive revenue growth.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Bikram Singh",
    title: "Business Development Manager",
    description:
      "Strategic thinker with a knack for identifying new opportunities. Expands market presence and forges valuable partnerships to fuel company growth.",
    image: "/placeholder.svg?height=400&width=400",
  },
];

function TeamMemberCard({ member }) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white overflow-hidden">
      <div className="relative w-full pt-[100%]">
        <Image
          src={member.image}
          alt={`${member.name} portrait`}
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-gray-800">
          {member.name}
        </CardTitle>
        <CardDescription className="text-sm font-medium text-gray-600">
          {member.title}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600 leading-relaxed">
          {member.description}
        </p>
      </CardContent>
    </Card>
  );
}

export default function BusinessLandingPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      projectType: "",
      message: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 space-y-8 sm:space-y-12 font-sans">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4 text-gray-800">
          Empowering Your Business Success
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Welcome to our comprehensive business solutions hub. At KSVA TECH,
          we're dedicated to propelling your organization towards unprecedented
          growth and efficiency.
        </p>
      </section>

      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-800">
            Contact Us
          </CardTitle>
          <CardDescription className="text-gray-600">
            Get in touch with our team
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                          className="bg-gray-50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          {...field}
                          className="bg-gray-50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Company</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Acme Inc."
                          {...field}
                          className="bg-gray-50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">
                        Phone (optional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          {...field}
                          className="bg-gray-50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Project Type
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-gray-50">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="web">Web Development</SelectItem>
                        <SelectItem value="mobile">Mobile App</SelectItem>
                        <SelectItem value="design">UI/UX Design</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your project"
                        className="min-h-[100px] bg-gray-50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Send
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <section className="w-full max-w-7xl mx-auto pb-[7%] px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-6 text-center text-gray-800">
          Our Team
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 text-center max-w-3xl mx-auto">
          Meet our dedicated team of professionals who are committed to your
          success. With diverse expertise and a passion for excellence, we're
          here to drive your business forward.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
}
