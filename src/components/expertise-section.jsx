import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const expertiseData = [
  { 
    name: "Manoj Adhikari", 
    role: "Frontend Developer",
    description: "Manoj is a master of creating responsive and intuitive user interfaces. With expertise in React, Vue, and Angular, he brings designs to life with pixel-perfect precision and smooth interactions."
  },
  { 
    name: "Rajnish Gaire", 
    role: "Backend Developer",
    description: "Rajnish excels in building robust and scalable server-side applications. His proficiency in Node.js, Python, and database management ensures our systems are efficient, secure, and ready for growth."
  },
  { 
    name: "Prassana Wagle", 
    role: "Project Management",
    description: "Prassana is our maestro of coordination, ensuring projects run smoothly from inception to delivery. Her expertise in Agile methodologies and stakeholder management keeps our teams aligned and productive."
  },
  { 
    name: "Ritika Shrestha", 
    role: "Digital Marketing",
    description: "Ritika crafts compelling digital marketing strategies that drive engagement and conversions. Her skills in SEO, content marketing, and social media management help our clients stand out in the digital landscape."
  },
  { 
    name: "Rajnish Adhikari", 
    role: "Data Analyst",
    description: "Rajnish turns raw data into actionable insights. His expertise in data visualization, statistical analysis, and machine learning algorithms helps businesses make informed decisions and predict future trends."
  },
  { 
    name: "Sofiya Pandey", 
    role: "UI/UX Designer",
    description: "Sofiya is passionate about creating beautiful and user-friendly digital experiences. Her keen eye for design trends, coupled with a deep understanding of user behavior, results in interfaces that are both aesthetically pleasing and highly functional."
  }
]

export default function ExpertiseSection() {
  return (
    (<Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl sm:text-3xl">Our Expertise</CardTitle>
        <CardDescription>Meet our talented team of experts ready to bring your vision to life</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseData.map((expert, index) => (
            <Card key={index} className="bg-secondary">
              <CardHeader>
                <CardTitle className="text-lg">{expert.name}</CardTitle>
                <CardDescription>{expert.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{expert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>)
  );
}

