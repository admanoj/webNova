// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { PhoneCall, Mail, Send, CalendarIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// const Contact = () => {
//   const [email, setEmail] = useState("");
//   const [schedulerData, setSchedulerData] = useState({
//     name: "",
//     email: "",
//     date: "",
//     time: "",
//   });

//   const handleEmailSubmit = (e) => {
//     e.preventDefault();
//     console.log("Email submitted:", email);
//     setEmail("");
//   };

//   const handleSchedulerSubmit = (e) => {
//     e.preventDefault();
//     console.log("Scheduled call:", schedulerData);
//     setSchedulerData({ name: "", email: "", date: "", time: "" });
//   };

//   return (
//     <div
//       id="contact"
//       className="bg-gradient-to-br from-blue-50 to-white relative overflow-hidden"
//     >
//       <div className="container mx-auto px-4 py-16 md:py-24">
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">
//           {/* Left Column */}
//           <div className="flex flex-col space-y-6 max-w-xl">
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600">
//               Let's connect and{" "}
//               <span className="text-blue-800">
//                 turn your vision
//                 <br />
//                 into reality.
//               </span>
//             </h2>
//             <p className="text-lg text-blue-700">
//               We are available from 9:00 AM to 6:00 PM, Monday to Friday.
//             </p>
//             <div className="flex items-center space-x-2 text-blue-600">
//               <Mail className="w-6 h-6" />
//               <span className="text-xl sm:text-2xl md:text-3xl font-light">
//                 contactus@ksvatechsolutions.com
//               </span>
//             </div>
//             <div className="flex items-center space-x-2 text-blue-600">
//               <PhoneCall className="w-6 h-6" />
//               <span className="text-xl sm:text-2xl md:text-3xl font-light">
//                 +1 (562) 310-1189
//               </span>
//             </div>
//             <form onSubmit={handleEmailSubmit} className="space-y-4">
//               {/* <Label htmlFor="email">GET IN TOUCH</Label> */}
//               <div className="flex space-x-2">
//                 <Input
//                   type="email"
//                   id="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="flex-grow"
//                 />
//                 <Button type="submit">
//                   <Send className="w-4 h-4 mr-2" />
//                   Send
//                 </Button>
//               </div>
//             </form>
//             <Dialog>
//               <DialogTrigger asChild>
//                 <Button className="w-full md:w-auto">
//                   <CalendarIcon className="w-5 h-5 mr-2" />
//                   Schedule a Call
//                 </Button>
//               </DialogTrigger>
//               <DialogContent>
//                 <DialogHeader>
//                   <DialogTitle>Schedule a Call</DialogTitle>
//                 </DialogHeader>
//                 <form onSubmit={handleSchedulerSubmit} className="space-y-4">
//                   <div>
//                     <Label htmlFor="name">Name</Label>
//                     <Input
//                       type="text"
//                       id="name"
//                       value={schedulerData.name}
//                       onChange={(e) =>
//                         setSchedulerData({
//                           ...schedulerData,
//                           name: e.target.value,
//                         })
//                       }
//                       required
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="scheduler-email">Email</Label>
//                     <Input
//                       type="email"
//                       id="scheduler-email"
//                       value={schedulerData.email}
//                       onChange={(e) =>
//                         setSchedulerData({
//                           ...schedulerData,
//                           email: e.target.value,
//                         })
//                       }
//                       required
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="date">Date</Label>
//                     <Input
//                       type="date"
//                       id="date"
//                       value={schedulerData.date}
//                       onChange={(e) =>
//                         setSchedulerData({
//                           ...schedulerData,
//                           date: e.target.value,
//                         })
//                       }
//                       required
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="time">Time</Label>
//                     <Input
//                       type="time"
//                       id="time"
//                       value={schedulerData.time}
//                       onChange={(e) =>
//                         setSchedulerData({
//                           ...schedulerData,
//                           time: e.target.value,
//                         })
//                       }
//                       required
//                     />
//                   </div>
//                   <Button type="submit">Schedule Call</Button>
//                 </form>
//               </DialogContent>
//             </Dialog>
//           </div>

//           {/* Right Column (Image) */}
//           <div className="w-full lg:w-2/5 h-60 lg:h-[400px] relative rounded-lg overflow-hidden shadow-xl">
//             <Image
//               src="/touch.svg"
//               alt="Contact Us"
//               fill
//               style={{ objectFit: "contain" }}
//               sizes="(max-width: 1020px) 100vw, 40vw"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Background Decoration */}
//       <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(59,130,246,0.1)_0%,rgba(255,255,255,0)_100%)]" />
//     </div>
//   );
// };

// export default Contact;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PhoneCall, Mail, Send, CalendarIcon } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [schedulerData, setSchedulerData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  const [refTitle, inViewTitle] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refContent, inViewContent] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 300,
  });
  const [refImage, inViewImage] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 600,
  });

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const handleSchedulerSubmit = (e) => {
    e.preventDefault();
    console.log("Scheduled call:", schedulerData);
    setSchedulerData({ name: "", email: "", date: "", time: "" });
  };

  return (
    <div
      id="contact"
      className="bg-gradient-to-br from-blue-50 to-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col space-y-6 max-w-xl">
            <div
              ref={refTitle}
              className={`transform transition-all duration-1000 ease-out ${
                inViewTitle
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600">
                Let's connect and{" "}
                <span className="text-blue-800">
                  turn your vision
                  <br />
                  into reality.
                </span>
              </h2>
            </div>
            <div
              ref={refContent}
              className={`space-y-6 transform transition-all duration-1000 ease-out ${
                inViewContent
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <p className="text-lg text-blue-700">
                We are available from 9:00 AM to 6:00 PM, Monday to Friday.
              </p>
              <div className="flex items-center space-x-2 text-blue-600">
                <Mail className="w-6 h-6" />
                <span className="text-xl sm:text-2xl md:text-3xl font-light">
                  contactus@ksvatechsolutions.com
                </span>
              </div>
              <div className="flex items-center space-x-2 text-blue-600">
                <PhoneCall className="w-6 h-6" />
                <span className="text-xl sm:text-2xl md:text-3xl font-light">
                  +1 (562) 310-1189
                </span>
              </div>
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow"
                  />
                  <Button type="submit">
                    <Send className="w-4 h-4 mr-2" />
                    Send
                  </Button>
                </div>
              </form>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full md:w-auto">
                    <CalendarIcon className="w-5 h-5 mr-2" />
                    Schedule a Call
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Schedule a Call</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSchedulerSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        type="text"
                        id="name"
                        value={schedulerData.name}
                        onChange={(e) =>
                          setSchedulerData({
                            ...schedulerData,
                            name: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="scheduler-email">Email</Label>
                      <Input
                        type="email"
                        id="scheduler-email"
                        value={schedulerData.email}
                        onChange={(e) =>
                          setSchedulerData({
                            ...schedulerData,
                            email: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="date">Date</Label>
                      <Input
                        type="date"
                        id="date"
                        value={schedulerData.date}
                        onChange={(e) =>
                          setSchedulerData({
                            ...schedulerData,
                            date: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Time</Label>
                      <Input
                        type="time"
                        id="time"
                        value={schedulerData.time}
                        onChange={(e) =>
                          setSchedulerData({
                            ...schedulerData,
                            time: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <Button type="submit">Schedule Call</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div
            ref={refImage}
            className={`w-full lg:w-2/5 h-60 lg:h-[400px] relative rounded-lg overflow-hidden shadow-xl transform transition-all duration-1000 ease-out ${
              inViewImage
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <Image
              src="/touch.svg"
              alt="Contact Us"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 1020px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(59,130,246,0.1)_0%,rgba(255,255,255,0)_100%)]" />
    </div>
  );
};

export default Contact;
