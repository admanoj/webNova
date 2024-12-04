"use client";

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
import { ArrowRight, Mail } from "lucide-react";

export default function BlogLanding() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Insights for the Tech World
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Explore the latest trends, innovations, and insights in
                    technology and software development.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">
                    Read Latest Post
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Browse Categories
                  </Button>
                </div>
              </div>
              <Card className="w-full max-w-lg">
                <CardHeader>
                  <Badge className="w-fit">Featured</Badge>
                  <CardTitle className="line-clamp-2 text-2xl font-bold">
                    The Future of AI in Software Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">
                    Explore how artificial intelligence is revolutionizing the
                    way we build and maintain software, from automated testing
                    to intelligent code completion.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link">Read More</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Recent Posts
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <Badge className="w-fit">
                      {
                        [
                          "Tech",
                          "AI",
                          "Development",
                          "Cloud",
                          "Security",
                          "Data",
                        ][i - 1]
                      }
                    </Badge>
                    <CardTitle className="line-clamp-2">
                      Blog Post Title {i}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-3">
                      This is a brief description of the blog post content. It
                      gives readers an idea of what the article is about.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link">Read More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Button size="lg" variant="outline">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Explore Topics
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dive into our diverse range of technology topics
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Artificial Intelligence",
                  "Cloud Computing",
                  "Cybersecurity",
                  "Data Science",
                  "DevOps",
                  "Mobile Development",
                ].map((topic) => (
                  <Badge
                    key={topic}
                    variant="secondary"
                    className="text-sm px-3 py-1"
                  >
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Stay Updated
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to our newsletter for the latest tech insights and
                  updates
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">
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
