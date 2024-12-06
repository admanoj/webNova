// "use client";

// import React from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";

// const MovingBrands = () => {
//   const brands = [
//     "/brand-01.png",
//     "/brand-02.png",
//     "/brand-03.png",
//     "/brand-04.png",
//     "/brand-05.png",
//     "/brand-06.png",
//     "/brand-07.png",
//     "/brand-08.png",
//     "/brand-09.png",
//     "/brand-10.png",
//     "/brand-15.png",
//     "/brand-16.png",
//   ];

//   return (
//     <section className="relative py-10 sm:py-16 md:py-24 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 opacity-70"></div>
//       <div className="absolute inset-0 bg-[url('/subtle-prism.svg')] opacity-10"></div>
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
//             Global Brands Trust KSVA Tech.{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 font-extrabold">
//               You Can Too!
//             </span>
//           </h2>
//           <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
//             We help companies of all sizes grow with smart tech solutions. See
//             how our partners are using our tools to succeed.
//           </p>
//           <Button size="default" className="font-semibold text-sm sm:text-base">
//             Work With Us
//           </Button>
//         </div>

//         <div className="w-full max-w-5xl mx-auto overflow-hidden">
//           <div className="flex flex-col space-y-12">
//             <motion.div
//               className="relative w-full overflow-hidden h-20 sm:h-24 md:h-28"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               <div className="absolute flex animate-scroll-right whitespace-nowrap">
//                 {[...brands, ...brands].map((src, index) => (
//                   <motion.div
//                     key={`top-${index}`}
//                     className="flex-shrink-0 w-[160px] sm:w-[200px] md:w-[240px] mx-3 sm:mx-4 md:mx-6"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                   >
//                     <Image
//                       className="h-16 sm:h-20 md:h-24 w-[120px] sm:w-[150px] md:w-[180px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
//                       src={src}
//                       alt={`Brand logo ${index + 1}`}
//                       width={180}
//                       height={96}
//                       quality={100}
//                     />
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//             <motion.div
//               className="relative w-full overflow-hidden h-20 sm:h-24 md:h-28"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//             >
//               <div className="absolute flex animate-scroll-left whitespace-nowrap">
//                 {[...brands, ...brands].map((src, index) => (
//                   <motion.div
//                     key={`bottom-${index}`}
//                     className="flex-shrink-0 w-[160px] sm:w-[200px] md:w-[240px] mx-3 sm:mx-4 md:mx-6"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                   >
//                     <Image
//                       className="h-16 sm:h-20 md:h-24 w-[120px] sm:w-[150px] md:w-[180px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
//                       src={src}
//                       alt={`Brand logo ${index + 1}`}
//                       width={180}
//                       height={96}
//                       quality={100}
//                     />
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MovingBrands;

"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MovingBrands = () => {
  const brands = [
    "/brand-01.png",
    "/brand-02.png",
    "/brand-03.png",
    "/brand-04.png",
    "/brand-05.png",
    "/brand-06.png",
    "/brand-07.png",
    "/brand-08.png",
    "/brand-09.png",
    "/brand-10.png",
    "/brand-15.png",
    "/brand-16.png",
  ];

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

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative py-10 sm:py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 opacity-70"></div>
      <div className="absolute inset-0 bg-[url('/subtle-prism.svg')] opacity-10"></div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Global Brands Trust KSVA Tech.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 font-extrabold">
              You Can Too!
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
            We help companies of all sizes grow with smart tech solutions. See
            how our partners are using our tools to succeed.
          </p>
          <Button size="default" className="font-semibold text-sm sm:text-base">
            Work With Us
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full max-w-5xl mx-auto overflow-hidden"
        >
          <div className="flex flex-col space-y-12">
            <motion.div
              className="relative w-full overflow-hidden h-20 sm:h-24 md:h-28"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute flex animate-scroll-right whitespace-nowrap">
                {[...brands, ...brands].map((src, index) => (
                  <motion.div
                    key={`top-${index}`}
                    className="flex-shrink-0 w-[160px] sm:w-[200px] md:w-[240px] mx-3 sm:mx-4 md:mx-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Image
                      className="h-16 sm:h-20 md:h-24 w-[120px] sm:w-[150px] md:w-[180px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      src={src}
                      alt={`Brand logo ${index + 1}`}
                      width={180}
                      height={96}
                      quality={100}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative w-full overflow-hidden h-20 sm:h-24 md:h-28"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="absolute flex animate-scroll-left whitespace-nowrap">
                {[...brands, ...brands].map((src, index) => (
                  <motion.div
                    key={`bottom-${index}`}
                    className="flex-shrink-0 w-[160px] sm:w-[200px] md:w-[240px] mx-3 sm:mx-4 md:mx-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Image
                      className="h-16 sm:h-20 md:h-24 w-[120px] sm:w-[150px] md:w-[180px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      src={src}
                      alt={`Brand logo ${index + 1}`}
                      width={180}
                      height={96}
                      quality={100}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MovingBrands;
