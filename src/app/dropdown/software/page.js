"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Cpu, Globe, Rocket, Server, Smartphone } from "lucide-react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Custom hook for scroll reveal animation
const useScrollReveal = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return { ref, controls };
};

// Animation variants
const revealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function KSVNTechLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={revealVariants}
        className="py-20 md:py-32"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center ">
          <div className="md:w-1/2 mb-10 md:mb-0 ">
            <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-6">
              Innovative Software Solutions by KSVA Tech
            </h1>
            <p className="text-xl text-blue-700 mb-8">
              We transform your ideas into powerful, scalable software that
              fuels business growth and drives technological advancement.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="w-full sm:w-auto">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Our Portfolio
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/sof.svg"
              alt="KSVA Tech Software Development Illustration"
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12"
          >
            Our Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-10 w-10 text-blue-600" />,
                title: "Web Development",
                description:
                  "Cutting-edge web applications tailored to your business needs.",
              },
              {
                icon: <Smartphone className="h-10 w-10 text-blue-600" />,
                title: "Mobile Apps",
                description:
                  "Innovative mobile solutions for iOS and Android platforms.",
              },
              {
                icon: <Server className="h-10 w-10 text-blue-600" />,
                title: "Backend Systems",
                description:
                  "Robust and scalable server-side solutions and APIs.",
              },
              {
                icon: <Cpu className="h-10 w-10 text-blue-600" />,
                title: "AI & Machine Learning",
                description:
                  "Intelligent systems that adapt and evolve with your business.",
              },
              {
                icon: <Code className="h-10 w-10 text-blue-600" />,
                title: "Custom Software",
                description:
                  "Bespoke software solutions designed for your unique challenges.",
              },
              {
                icon: <Rocket className="h-10 w-10 text-blue-600" />,
                title: "DevOps & Cloud",
                description:
                  "Efficient cloud infrastructure and streamlined deployments.",
              },
            ].map((service, index) => {
              const { ref, controls } = useScrollReveal();
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial="hidden"
                  animate={controls}
                  variants={revealVariants}
                >
                  <Card className="transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      {service.icon}
                      <h3 className="text-xl font-semibold mt-4 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-blue-700">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12"
          >
            KSVA Tech Development Process
          </motion.h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We analyze your requirements and vision in depth.",
              },
              {
                number: "02",
                title: "Planning",
                description:
                  "Detailed project roadmap and architecture design.",
              },
              {
                number: "03",
                title: "Development",
                description:
                  "Agile development with regular updates and feedback.",
              },
              {
                number: "04",
                title: "Testing",
                description:
                  "Rigorous quality assurance and user acceptance testing.",
              },
              {
                number: "05",
                title: "Deployment",
                description:
                  "Smooth launch with ongoing support and maintenance.",
              },
            ].map((step, index) => {
              const { ref, controls } = useScrollReveal();
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial="hidden"
                  animate={controls}
                  variants={revealVariants}
                  className="flex flex-col items-center text-center mb-8 md:mb-0"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-blue-700 max-w-xs">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12"
          >
            Technologies we specialize in
          </motion.h2>
          <Tabs defaultValue="frontend" className="w-full max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
            </TabsList>
            {["frontend", "backend", "mobile"].map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    ...(category === "frontend"
                      ? [
                          "React",
                          "Vue",
                          "Angular",
                          "Next.js",
                          "Tailwind CSS",
                          "TypeScript",
                          "Webpack",
                          "GraphQL",
                        ]
                      : category === "backend"
                      ? [
                          "Node.js",
                          "Python",
                          "Java",
                          "Go",
                          "MongoDB",
                          "PostgreSQL",
                          "Redis",
                          "Docker",
                        ]
                      : [
                          "React Native",
                          "Flutter",
                          "Swift",
                          "Kotlin",
                          "Ionic",
                          "Xamarin",
                          "Android SDK",
                          "iOS SDK",
                        ]),
                  ].map((tech, index) => {
                    const { ref, controls } = useScrollReveal();
                    return (
                      <motion.div
                        key={index}
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={revealVariants}
                        className="flex flex-col items-center"
                      >
                        <img
                          src={`/placeholder.svg?height=80&width=80&text=${tech}`}
                          alt={tech}
                          className="w-20 h-20 mb-2"
                        />
                        <span className="text-blue-900 font-medium">
                          {tech}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={revealVariants}
        id="contact"
        className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Innovate with KSVA Tech?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's collaborate to create cutting-edge software solutions that
            will propel your business into the future.
          </p>
          <Link href="contact">
            <Button size="lg" variant="secondary" className="text-blue-900">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
