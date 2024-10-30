import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Component() {
  return (
    <div className="text-center">
      <div className="mt-4 inline-block bg-purple-800 rounded-t-lg p-2 mb-6">
        <h2 className="text-3xl font-mono text-white">SEE OUR ROLES BELOW</h2>
      </div>

      <div className="flex flex-row">
        <Card className="w-full max-w-md m-4 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="relative h-48 w-full">
            <Image
              src="/support.jpg"
              alt="Administrative Support"
              fill
              style={{ objectFit: "cover" }}
              className="transition-all duration-500 hover:scale-110 rounded-t-lg"
            />
          </div>
          <CardHeader className="pt-4 pb-2 text-center">
            <CardTitle className="text-2xl font-bold ">
              Administrative <br /> Support
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                Our specialized team at WebNova AI is here to take the load off
                your shoulders and ensure your quality assurance processes run
                smoothly. They’re equipped to handle a variety of BI &
                QA-related tasks, making your production life a whole lot easier
              </p>
            </div>
            <div className="flex justify-center">
              <Button className="m-7 py-3 text-lg rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold transition-all duration-300 hover:from-indigo-600 hover:to-purple-600 hover:shadow-lg">
                Explore Now
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full max-w-md m-4 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="relative h-48 w-full">
            <Image
              src="/Business.jpg"
              alt="Business Intelligence"
              fill
              style={{ objectFit: "cover" }}
              className="transition-all duration-500 hover:scale-110 rounded-t-lg"
            />
          </div>
          <CardHeader className="pt-4 pb-2 text-center">
            <CardTitle className="text-2xl font-bold ">
              Business <br /> Intelligence
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                Our specialized team at WebNova AI is here to take the load off
                your shoulders and ensure your quality assurance processes run
                smoothly. We are equipped to handle a variety of BI & QA-related
                tasks, making your production life a whole lot easier
              </p>
            </div>
            <div className="flex justify-center">
              <Button className="m-6 py-3 text-lg rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold transition-all duration-300 hover:from-indigo-600 hover:to-purple-600 hover:shadow-lg">
                Explore Now
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full max-w-md m-4 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="relative h-48 w-full">
            <Image
              src="/cus.jpg"
              alt="Customer Service"
              fill
              style={{ objectFit: "cover" }}
              className="transition-all duration-500 hover:scale-110 rounded-t-lg"
            />
          </div>
          <CardHeader className="pt-4 pb-2 text-center">
            <CardTitle className="text-2xl font-bold ">
              Customer <br /> Service
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                Our specialized team at WebNova AI is here to ensure your
                customer service operations run smoothly. We are equipped to
                handle a wide range of customer service tasks, from inquiries to
                issue resolution, making your business more efficient and your
                workload lighter.
              </p>
            </div>
            <div className="flex justify-center ">
              <Button className="m-6 py-3 text-lg rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold transition-all duration-300 hover:from-indigo-600 hover:to-purple-600 hover:shadow-lg">
                Explore Now
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full max-w-md m-4 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="relative h-48 w-full">
            <Image
              src="/fin.jpg"
              alt="Finance"
              fill
              style={{ objectFit: "cover" }}
              className="transition-all duration-500 hover:scale-110 rounded-t-lg"
            />
          </div>
          <CardHeader className="pt-4 pb-2 text-center">
            <CardTitle className="text-2xl font-bold ">
              Finance <br />
              <br />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                Our specialized team at WebNova AI is here to take the load off
                your shoulders and ensure your financial operations run like
                clockwork. We are equipped to handle a wide range of
                finance-related tasks, streamlining processes and making your
                business run more smoothly and efficiently.
              </p>
            </div>
            <div className="flex justify-center">
              <Button className="py-3 text-lg rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold transition-all duration-300 hover:from-indigo-600 hover:to-purple-600 hover:shadow-lg">
                Explore Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
