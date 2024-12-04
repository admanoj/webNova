import {
  Shield,
  Lock,
  Server,
  Globe,
  Database,
  Cloud,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CyberSecurityLanding() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-8 md:py-16 lg:py-24 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="absolute bottom-0 left-0 w-full h-auto"
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-3 sm:space-y-4">
                <div className="space-y-2">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-[600px]">
                    Protect Your Digital Assets with Advanced Cybersecurity
                  </h1>
                  <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                    Comprehensive security solutions to defend your business
                    against evolving cyber threats
                  </p>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <Button
                      size="lg"
                      className="bg-yellow-400 text-black hover:bg-yellow-500"
                    >
                      Get Started
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-white/10 hover:bg-white/20"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center mt-8 lg:mt-0">
                <div className="relative h-[300px] w-full max-w-[300px] sm:h-[400px] sm:max-w-[400px]">
                  <div className="absolute inset-0">
                    <div className="relative h-full w-full rounded-lg bg-blue-900/80 p-4 backdrop-blur-sm">
                      <Shield className="absolute right-4 top-4 h-20 w-20 text-yellow-400" />
                      <Lock className="absolute left-4 bottom-4 h-16 w-16 text-white/20" />
                      <Server className="absolute right-4 bottom-4 h-12 w-12 text-yellow-400/60" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 text-center">
                <h3 className="text-3xl font-bold">20+ Years</h3>
                <p className="text-muted-foreground">
                  in cybersecurity excellence
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <h3 className="text-3xl font-bold">ISO 27001</h3>
                <p className="text-muted-foreground">
                  certified security practices
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <h3 className="text-3xl font-bold">1000+</h3>
                <p className="text-muted-foreground">
                  successful security projects
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-8 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Security Services
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive cybersecurity solutions to protect your business
                  at every level
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6 space-y-2">
                  <Globe className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Network Security</h3>
                  <p className="text-muted-foreground">
                    Protect your network infrastructure with advanced threat
                    detection and prevention
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-2">
                  <Cloud className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Cloud Security</h3>
                  <p className="text-muted-foreground">
                    Secure cloud environments and applications with
                    comprehensive protection
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-2">
                  <Database className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Data Protection</h3>
                  <p className="text-muted-foreground">
                    Safeguard sensitive data with encryption and access control
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_350px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-3 sm:space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Why Choose Our Cybersecurity Services?
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We provide comprehensive security solutions backed by years
                    of experience and expertise
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-bold">24/7 Monitoring</h3>
                      <p className="text-muted-foreground">
                        Continuous threat detection and response
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-bold">Expert Team</h3>
                      <p className="text-muted-foreground">
                        Certified security professionals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-bold">Compliance</h3>
                      <p className="text-muted-foreground">
                        Meet industry regulations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-bold">Advanced Tools</h3>
                      <p className="text-muted-foreground">
                        Latest security technologies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-full max-w-[300px] sm:h-[400px] sm:max-w-[400px]">
                  <div className="absolute inset-0">
                    <div className="relative h-full w-full rounded-lg bg-gradient-to-br from-primary/80 to-primary p-4">
                      <Shield className="absolute right-4 top-4 h-20 w-20 text-white/20" />
                      <Lock className="absolute left-4 bottom-4 h-16 w-16 text-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Secure Your Business?
                </h2>
                <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                  Get started with our comprehensive cybersecurity solutions
                  today
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-yellow-400 text-black hover:bg-yellow-500"
                >
                  Contact Us Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
