import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Requirement Gathering",
      description:
        " We begin our collaboration by gathering client requirements, listing, and compiling them. This allows us to build the process from the ground up, delivering results aligned with your goals. ",
    },
    {
      number: "02",
      title: "Plan & Resources",
      description:
        "After gathering requirements, we develop a strategic plan and allocate resources. As a leading IT company, we provide clients with a roadmap, setting the foundation for a successful project.",
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
        "In this phase, we carefully test and validate all elements to ensure they function correctly and meet standards, delivering the desired user experience. Our team examines each aspect for reliability.",
    },
    {
      number: "05",
      title: "Deployment",
      description:
        "Once the product meets the required standards, we deploy it, releasing the product or updates to the servers. This ensures seamless and efficient delivery. ",
    },
    {
      number: "06",
      title: "Support & Maintenance",
      description:
        "In the final stage, we maintain systems to ensure smooth operation, security, and reliability. Ongoing optimization enhances performance, with a focus on client satisfaction and operational excellence.",
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
        <h3 className="text-3xl md:text-5xl font-bold mb-8 text-gray-800">
          Enjoy seamless service through our simple,{" "}
          <span className="text-blue-600  px-2 py-1 rounded">
            streamlined process:
          </span>
        </h3>
        <div className="flex items-center justify-center gap-2 text-lg">
          <p className="text-gray-600">
            An efficient workflow, from requirements gathering to ongoing
            support and maintenance.
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
