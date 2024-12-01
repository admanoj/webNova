import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BusinessIntro() {
  return (
    (<Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">KSVA Tech</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <p className="font-semibold">Propelling businesses to new heights</p>
        <ul className="text-sm space-y-1">
          <li>Innovative solutions for startups and enterprises</li>
          <li>Cutting-edge frontend & robust backend development</li>
          <li>Expert project management and data-driven insights</li>
          <li>Strategic digital marketing</li>
        </ul>
        <p className="text-sm italic">Let's transform your business together</p>
      </CardContent>
    </Card>)
  );
}

