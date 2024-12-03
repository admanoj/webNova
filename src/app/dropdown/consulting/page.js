"use client";

import Service from "@/app/services/page";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-900 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Empower Your Business with IT Solutions
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We provide cutting-edge IT consulting services to drive your
              success in the digital age
            </p>
            <Button size="lg" variant="secondary">
              Get Started
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <Service />
      </main>
    </div>
  );
}
