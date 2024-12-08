// "use client";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Building2, Rocket, Wrench } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Component() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//     },
//   };

//   return (
//     <motion.div
//       className="container mx-auto px-4 py-8 md:py-16 bg-white"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       <motion.div
//         className="max-w-3xl mx-auto text-center mb-12"
//         variants={itemVariants}
//       >
//         <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
//           About Us
//         </h1>
//         <h2 className="text-2xl md:text-3xl text-blue-600 mb-4">
//           Welcome to The KSVA Tech
//         </h2>
//         <p className="text-gray-700 text-lg">
//           We transform your digital vision into reality with professional
//           digital solutions.
//         </p>
//       </motion.div>

//       <motion.div
//         className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
//         variants={containerVariants}
//       >
//         <motion.div variants={itemVariants}>
//           <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-blue-200">
//             <CardHeader className="bg-blue-50">
//               <CardTitle className="flex items-center gap-2 text-blue-700">
//                 <Building2 className="h-5 w-5" />
//                 Who We Are
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-gray-700">
//                 At KSVA Tech, we are a team of passionate and dedicated software
//                 engineers, designers, and innovators committed to transforming
//                 ideas into cutting-edge digital solutions. Our company provides
//                 custom software solutions, serving clients across various
//                 industries worldwide.
//               </p>
//             </CardContent>
//           </Card>
//         </motion.div>

//         <motion.div variants={itemVariants}>
//           <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-blue-200">
//             <CardHeader className="bg-blue-50">
//               <CardTitle className="flex items-center gap-2 text-blue-700">
//                 <Rocket className="h-5 w-5" />
//                 Our Mission
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-gray-700">
//                 Our mission is to empower businesses by delivering innovative
//                 and reliable software products that drive efficiency, enhance
//                 user experience, and foster growth. We believe in the power of
//                 technology to solve complex problems and create opportunities
//                 for our clients.
//               </p>
//             </CardContent>
//           </Card>
//         </motion.div>

//         <motion.div variants={itemVariants}>
//           <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-blue-200">
//             <CardHeader className="bg-blue-50">
//               <CardTitle className="flex items-center gap-2 text-blue-700">
//                 <Wrench className="h-5 w-5" />
//                 What We Do
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-gray-700 mb-4">
//                 We offer a range of services to meet your digital needs:
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {[
//                   "Website Development",
//                   "Marketing",
//                   "Social Media Management",
//                   "DevOps Services",
//                   "Mobile App Development",
//                 ].map((service, index) => (
//                   <motion.div
//                     key={service}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: index * 0.1 }}
//                   >
//                     <Badge
//                       variant="secondary"
//                       className="bg-blue-100 text-blue-700 hover:bg-blue-200"
//                     >
//                       {service}
//                     </Badge>
//                   </motion.div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }

"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Rocket, Wrench } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutUs() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={containerVariants}
      className="container mx-auto px-4 py-8 md:py-16 bg-blue-50"
    >
      <motion.div
        className="max-w-3xl mx-auto text-center mb-12"
        variants={itemVariants}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
          Discover KSVA Tech
        </h1>
        {/* <h2 className="text-2xl md:text-3xl text-blue-600 mb-4">
          Innovating for Tomorrow
        </h2> */}
        <p className="text-blue-700 text-lg">
          Innovating digital solutions that propel your business forward
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        variants={containerVariants}
      >
        {[
          {
            title: "Our Identity",
            icon: Building2,
            content:
              "KSVA Tech is a collective of forward-thinking developers, designers, and innovators. We're dedicated to crafting bespoke digital solutions that address complex challenges across diverse industries globally.",
          },
          {
            title: "Our Purpose",
            icon: Rocket,
            content:
              "We're on a mission to revolutionize businesses through cutting-edge software. Our goal is to enhance efficiency, elevate user experiences, and catalyze growth. We harness the power of technology to solve intricate problems and unlock new opportunities.",
          },
          {
            title: "Our Expertise",
            icon: Wrench,
            content:
              "We offer a comprehensive suite of digital services tailored to your needs:",
            services: [
              "Web Development",
              "Digital Marketing",
              "Social Media Strategy",
              "DevOps Solutions",
              "Mobile App Development",
            ],
          },
        ].map((item, index) => (
          <motion.div key={item.title} variants={itemVariants}>
            <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-blue-200 h-full bg-white">
              <CardHeader className="bg-blue-100">
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <item.icon className="h-5 w-5" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 mb-4">{item.content}</p>
                {item.services && (
                  <div className="flex flex-wrap gap-2">
                    {item.services.map((service, serviceIndex) => (
                      <motion.div
                        key={service}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: serviceIndex * 0.1 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-blue-50 text-blue-700 hover:bg-blue-100"
                        >
                          {service}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
