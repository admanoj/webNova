// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { PhoneCall, Mail, Send, CalendarIcon } from "lucide-react";

// const Contact = () => {
//   const [email, setEmail] = useState("");
//   const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);
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
//     setIsSchedulerOpen(false);
//   };

//   return (
//     <div id="contact" className="bg-white relative overflow-hidden">
//       <div className="container mx-auto px-4 py-16 md:py-24">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
//           {/* Left Column */}
//           <div className="flex flex-col space-y-6 max-w-2xl">
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
//           </div>

//           {/* Right Column */}
//           <div className="flex flex-col items-start md:items-end space-y-6 w-full md:w-auto">
//             <div className="text-right w-full md:w-auto">
//               <p className="text-sm font-medium text-blue-700 mb-2">
//                 GET IN TOUCH
//               </p>
//               <form
//                 onSubmit={handleEmailSubmit}
//                 className="flex w-full max-w-sm items-center space-x-2"
//               >
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="flex-grow px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <button
//                   type="submit"
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
//                 >
//                   <Send className="w-4 h-4 mr-2" />
//                   Send
//                 </button>
//               </form>
//             </div>
//             <button
//               onClick={() => setIsSchedulerOpen(true)}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full w-full md:w-auto text-lg font-semibold flex items-center justify-center"
//             >
//               <CalendarIcon className="w-5 h-5 mr-2" />
//               Schedule a Call
//             </button>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="mt-12 md:mt-16 w-full h-64 md:h-80 relative">
//           <Image
//             src="/touch.svg"
//             alt="Contact Illustration"
//             fill
//             style={{ objectFit: "contain" }}
//             sizes="(max-width: 768px) 100vw, 50vw"
//           />
//         </div>
//       </div>

//       {/* Background Decoration */}
//       <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(59,130,246,0.1)_0%,rgba(255,255,255,0)_100%)]" />

//       {/* Call Scheduler Modal */}
//       {isSchedulerOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-lg p-6 w-full max-w-md">
//             <h3 className="text-2xl font-bold text-blue-800 mb-4">
//               Schedule a Call
//             </h3>
//             <p className="text-blue-600 mb-6">
//               Pick a date and time that works for you. We'll get back to you to
//               confirm the appointment.
//             </p>
//             <form onSubmit={handleSchedulerSubmit} className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-blue-700"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   value={schedulerData.name}
//                   onChange={(e) =>
//                     setSchedulerData({ ...schedulerData, name: e.target.value })
//                   }
//                   className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-blue-700"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   value={schedulerData.email}
//                   onChange={(e) =>
//                     setSchedulerData({
//                       ...schedulerData,
//                       email: e.target.value,
//                     })
//                   }
//                   className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="date"
//                   className="block text-sm font-medium text-blue-700"
//                 >
//                   Date
//                 </label>
//                 <input
//                   type="date"
//                   id="date"
//                   value={schedulerData.date}
//                   onChange={(e) =>
//                     setSchedulerData({ ...schedulerData, date: e.target.value })
//                   }
//                   className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="time"
//                   className="block text-sm font-medium text-blue-700"
//                 >
//                   Time
//                 </label>
//                 <input
//                   type="time"
//                   id="time"
//                   value={schedulerData.time}
//                   onChange={(e) =>
//                     setSchedulerData({ ...schedulerData, time: e.target.value })
//                   }
//                   className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 />
//               </div>
//               <div className="flex justify-end space-x-3 mt-6">
//                 <button
//                   type="button"
//                   onClick={() => setIsSchedulerOpen(false)}
//                   className="px-4 py-2 border border-blue-300 rounded-md text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                 >
//                   Schedule Call
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Contact;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PhoneCall, Mail, Send, CalendarIcon } from "lucide-react";
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600">
              Let's connect and{" "}
              <span className="text-blue-800">
                turn your vision
                <br />
                into reality.
              </span>
            </h2>
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
              {/* <Label htmlFor="email">GET IN TOUCH</Label> */}
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

          {/* Right Column (Image) */}
          <div className="w-full lg:w-1/2 h-80 lg:h-[500px] relative rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/touch.svg"
              alt="Contact Us"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1020px) 100vw, 50vw"
            />
            <img src="/touch.svg" />
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(59,130,246,0.1)_0%,rgba(255,255,255,0)_100%)]" />
    </div>
  );
};

export default Contact;
