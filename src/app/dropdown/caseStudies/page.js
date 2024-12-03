"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Cloud Migration for Fortune 500 Company",
    description:
      "Successfully migrated a Fortune 500 company's entire infrastructure to the cloud, resulting in 40% cost savings and improved scalability.",
    category: "Cloud Computing",
    slug: "cloud-migration-fortune-500",
  },
  {
    id: 2,
    title: "AI-Powered Customer Service Solution",
    description:
      "Implemented an AI chatbot that reduced customer service response times by 60% and increased customer satisfaction scores by 25%.",
    category: "Artificial Intelligence",
    slug: "ai-customer-service-solution",
  },
  {
    id: 3,
    title: "Cybersecurity Overhaul for Financial Institution",
    description:
      "Strengthened a major bank's security infrastructure, preventing potential breaches and ensuring compliance with international regulations.",
    category: "Cybersecurity",
    slug: "cybersecurity-overhaul-finance",
  },
  {
    id: 4,
    title: "IoT Solution for Smart Manufacturing",
    description:
      "Developed an IoT system that increased production efficiency by 30% and reduced downtime by 50% for a leading manufacturer.",
    category: "Internet of Things",
    slug: "iot-smart-manufacturing",
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="bg-[#0046B8] text-white py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Discover how we've helped businesses transform their IT
            infrastructure and achieve remarkable results.
          </p>
        </div>
      </header>

      {/* Case Studies Grid */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-[#0046B8]">
                    {study.title}
                  </CardTitle>
                  <CardDescription>{study.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{study.description}</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="outline" className="w-full group" asChild>
                    <Link
                      href={`/case-study/${study.id}`}
                      className="flex items-center justify-center"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#E6F0FF] py-12 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0046B8] mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our IT solutions can drive your business forward.
            Our experts are ready to create a tailored strategy for your unique
            needs.
          </p>
          <Button
            size="lg"
            className="bg-[#0046B8] hover:bg-[#003A99] text-white"
            asChild
          >
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
