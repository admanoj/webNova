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
    name: "Manoj Adhikari",
    role: "Frontend Developer",
    expertise: "React, Next.js",
  },
  {
    name: "Prasanna Wagle",
    role: "Project Management, React Developer",
    expertise: "React, Project Management",
  },
  {
    name: "Ritika Shrestha",
    role: "Digital Marketing Specialist",
    expertise: "SEO, Content Marketing",
  },
  {
    name: "Rajnish Adhikari",
    role: "Data Analyst",
    expertise: "Python, R, Tableau",
  },
  {
    name: "Ritik Gaire",
    role: "Backend Developer",
    expertise: "Node.js, Express, MongoDB",
  },
  {
    name: "Sofiya Pandey",
    role: "UI/UX Designer",
    expertise: "Sketch, figma",
  },
];

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
    // In a real application, you would handle form submission here
    // For now, we'll just log the values
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Empowering Your Business Success
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to our comprehensive business solutions hub. At [Your Company
          Name], we're dedicated to propelling your organization towards
          unprecedented growth and efficiency. Our team of seasoned experts
          brings a wealth of experience across various domains, ensuring that we
          can address your unique challenges with innovative, tailored
          solutions.
        </p>
      </section>

      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
          <CardDescription>Get in touch with our team</CardDescription>
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
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          {...field}
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
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Acme Inc." {...field} />
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
                      <FormLabel>Phone (optional)</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          {...field}
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
                    <FormLabel>Project Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
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
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your project"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Send
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <section className="w-full max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Expertise</h2>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Meet our team of experts who bring a wealth of experience across
          various domains.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {member.name}
                </CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Expertise: {member.expertise}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
