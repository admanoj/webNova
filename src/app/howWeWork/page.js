import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Requirement Gathering",
      description:
        "We start our collaboration by collecting client requirements, listing and compiling them. This helps us build the process from scratch to deliver results aligned with your goals.",
    },
    {
      number: "02",
      title: "Plan & Resources",
      description:
        "After gathering requirements, we devise a strategic path and select resources. As a leading IT company, we offer clients a roadmap, laying the groundwork for a successful project.",
    },
    {
      number: "03",
      title: "Design & Develop",
      description:
        "In the design and development phase, we turn strategic ideas into digital products that are visually appealing, technically robust, focusing on user experience and functionality.",
    },
    {
      number: "04",
      title: "Quality Assurance",
      description:
        "In this phase, we rigorously test and validate to ensure all elements work correctly and meet standards, delivering the desired user experience. Our team tests each aspect for reliability.",
    },
    {
      number: "05",
      title: "Deployment",
      description:
        "Once the product meets standards, we deploy it, releasing product or updates on servers. This ensures our products are delivered seamlessly and efficiently.",
    },
    {
      number: "06",
      title: "Support & Maintenance",
      description:
        "In the final stage, we maintain systems to ensure smooth operation, security, and reliability. Optimization keeps performance high and client satisfaction focused on operational excellence.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-gray-600 mb-2 flex items-center justify-center gap-4">
          <span className="w-12 h-px bg-gray-400"></span>
          How We Work
          <span className="w-12 h-px bg-gray-400"></span>
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
          Enjoy Seamless Service With{" "}
          <span className="text-blue-600  px-2 py-1 rounded">
            Our Easy Steps!
          </span>
        </h3>
        <div className="flex items-center justify-center gap-2 text-lg">
          <p className="text-gray-600">
            Efficient workflow from requirements gathering to support and
            maintenance
          </p>
          <Button
            variant="link"
            className="text-blue-500 px-2 py-1 rounded hover:bg-blue-600"
          >
            See All
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        {steps.map((step) => (
          <Card
            key={step.number}
            className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow "
          >
            <CardContent className="p-6 grid md:grid-cols-[200px_300px_1fr] gap-6 items-center hover:bg-blue-50">
              <div className="text-6xl font-bold text-gray-500">
                {step.number}
              </div>
              <h4 className="text-2xl font-bold">{step.title}</h4>
              <p className="text-gray-600">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
