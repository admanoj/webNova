"use cliet";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Download, Search, FileText, Mail } from "lucide-react";

export default function WhitepaperLanding() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Discover Industry-Leading Whitepapers
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Access in-depth research and analysis from top experts in
                  technology and business.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="flex-1"
                    placeholder="Search whitepapers..."
                    type="search"
                  />
                  <Button type="submit" size="icon">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Featured Whitepaper
            </h2>
            <Card className="w-full max-w-4xl mx-auto">
              <CardHeader>
                <Badge className="w-fit mb-2">Featured</Badge>
                <CardTitle className="text-2xl font-bold">
                  The Future of AI in Enterprise: Trends and Predictions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dive deep into the transformative impact of AI on modern
                  businesses. This comprehensive whitepaper explores emerging
                  trends, potential challenges, and strategic recommendations
                  for leveraging AI in enterprise environments.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">AI</Badge>
                  <Badge variant="secondary">Enterprise</Badge>
                </div>
                <Button>
                  Download
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Explore Whitepapers
            </h2>
            <Tabs defaultValue="recent" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="popular">Popular</TabsTrigger>
              </TabsList>
              <TabsContent value="recent">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i}>
                      <CardHeader>
                        <CardTitle className="line-clamp-2">
                          Recent Whitepaper Title {i}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-3 text-sm text-muted-foreground">
                          This whitepaper explores recent developments and
                          insights in the field, providing valuable information
                          for professionals and decision-makers.
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center">
                        <Badge variant="secondary">
                          {
                            [
                              "Cloud",
                              "Security",
                              "Data",
                              "AI",
                              "IoT",
                              "Blockchain",
                            ][i - 1]
                          }
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <FileText className="mr-2 h-4 w-4" />
                          Read More
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="popular">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i}>
                      <CardHeader>
                        <CardTitle className="line-clamp-2">
                          Popular Whitepaper Title {i}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-3 text-sm text-muted-foreground">
                          This widely-read whitepaper offers crucial insights
                          and analysis on key industry trends, making it a
                          must-read for professionals in the field.
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center">
                        <Badge variant="secondary">
                          {
                            [
                              "AI",
                              "Cybersecurity",
                              "Big Data",
                              "DevOps",
                              "5G",
                              "Edge Computing",
                            ][i - 1]
                          }
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <FileText className="mr-2 h-4 w-4" />
                          Read More
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            <div className="mt-10 flex justify-center">
              <Button size="lg" variant="outline">
                View All Whitepapers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Explore Topics
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover whitepapers across a wide range of technology and
                  business topics
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Artificial Intelligence",
                  "Cloud Computing",
                  "Cybersecurity",
                  "Data Analytics",
                  "Digital Transformation",
                  "IoT",
                  "Blockchain",
                  "5G",
                  "Edge Computing",
                  "DevOps",
                ].map((topic) => (
                  <Badge
                    key={topic}
                    variant="secondary"
                    className="text-sm px-3 py-1 cursor-pointer hover:bg-primary hover:text-primary-foreground"
                  >
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Stay Informed
                </h2>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to receive notifications about new whitepapers and
                  exclusive insights
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row gap-2">
                  <Input
                    className="flex-1 bg-primary-foreground text-primary"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit" variant="secondary">
                    Subscribe
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
