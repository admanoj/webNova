"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, Server, Shield, Code, Headphones } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Custom hook for scroll reveal animation
const useScrollReveal = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
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

const faqCategories = [
  { name: "Services", icon: Server },
  { name: "Security", icon: Shield },
  { name: "Development", icon: Code },
  { name: "Support", icon: Headphones },
];

const faqs = [
  {
    category: "Services",
    question: "What IT services does your company offer?",
    answer:
      "We offer a comprehensive range of IT services including cloud solutions, software development, cybersecurity, IT consulting, and managed IT services. Our solutions are tailored to meet the unique needs of businesses across various industries.",
  },
  {
    category: "Services",
    question:
      "Do you provide services for both small businesses and large enterprises?",
    answer:
      "Yes, we cater to businesses of all sizes. Our scalable solutions can be customized for small startups, medium-sized companies, and large enterprises alike. We adapt our services to match your specific requirements and growth stage.",
  },
  {
    category: "Security",
    question: "How do you ensure the security of client data?",
    answer:
      "We implement multi-layered security measures including end-to-end encryption, regular security audits, and compliance with industry standards like GDPR and HIPAA. Our team stays updated with the latest security threats and continuously enhances our security protocols.",
  },
  {
    category: "Security",
    question: "What measures do you take to prevent cyber attacks?",
    answer:
      "We employ a proactive approach to cybersecurity, including real-time threat monitoring, regular vulnerability assessments, employee training programs, and implementation of advanced firewalls and intrusion detection systems.",
  },
  {
    category: "Development",
    question: "What development methodologies do you follow?",
    answer:
      "We primarily use Agile and Scrum methodologies for our development projects. This allows for iterative development, frequent client feedback, and the flexibility to adapt to changing requirements throughout the project lifecycle.",
  },
  {
    category: "Development",
    question: "Can you integrate your solutions with our existing systems?",
    answer:
      "Absolutely. We specialize in creating seamless integrations between our solutions and your existing systems. Our team has experience working with a wide range of technologies and can ensure smooth integration while minimizing disruption to your operations.",
  },
  {
    category: "Support",
    question: "What kind of support do you offer after project completion?",
    answer:
      "We provide comprehensive post-project support including 24/7 technical assistance, regular maintenance updates, performance monitoring, and continuous optimization. Our support team is always available to address any issues or questions you may have.",
  },
  {
    category: "Support",
    question: "Do you offer training for your software solutions?",
    answer:
      "Yes, we provide thorough training for all our software solutions. This includes on-site workshops, remote training sessions, detailed documentation, and video tutorials. We ensure your team is fully equipped to leverage our solutions effectively.",
  },
];

export default function ImprovedFAQLandingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFAQs = faqs.filter(
    (faq) =>
      (activeCategory === "All" || faq.category === activeCategory) &&
      (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const { ref: headerRef, controls: headerControls } = useScrollReveal();
  const { ref: searchRef, controls: searchControls } = useScrollReveal();
  const { ref: categoriesRef, controls: categoriesControls } =
    useScrollReveal();
  const { ref: faqsRef, controls: faqsControls } = useScrollReveal();

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.header
        ref={headerRef}
        initial="hidden"
        animate={headerControls}
        variants={revealVariants}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow"
      >
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl">
            Find answers to common questions about our IT services and
            solutions.
          </p>
        </div>
      </motion.header>
      <main className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <motion.div
            ref={searchRef}
            initial="hidden"
            animate={searchControls}
            variants={revealVariants}
            className="mb-12"
          >
            <div className="relative max-w-2xl mx-auto">
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-6 text-lg rounded-full shadow-lg"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={24}
              />
            </div>
          </motion.div>
          <motion.div
            ref={categoriesRef}
            initial="hidden"
            animate={categoriesControls}
            variants={revealVariants}
            className="mb-8 flex flex-wrap justify-center gap-4"
          >
            <Button
              variant={activeCategory === "All" ? "default" : "outline"}
              onClick={() => setActiveCategory("All")}
              className="rounded-full"
            >
              All
            </Button>
            {faqCategories.map((category) => (
              <Button
                key={category.name}
                variant={
                  activeCategory === category.name ? "default" : "outline"
                }
                onClick={() => setActiveCategory(category.name)}
                className="rounded-full"
              >
                <category.icon className="mr-2 h-4 w-4" />
                {category.name}
              </Button>
            ))}
          </motion.div>
          <motion.div
            ref={faqsRef}
            initial="hidden"
            animate={faqsControls}
            variants={revealVariants}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {filteredFAQs.map((faq, index) => (
                <AccordionItem
                  value={`item-${index}`}
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <AccordionTrigger className="text-left px-6 py-4 hover:bg-blue-50 transition-colors">
                    <span className="text-lg font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-gradient-to-b from-blue-50 to-white">
                    <p className="text-gray-700">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 mb-4">
                  No matching questions found.
                </p>
                <p className="text-gray-500">
                  Try a different search term or browse our categories.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
