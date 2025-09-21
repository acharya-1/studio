import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Heart, 
  Lightbulb, 
  Shield, 
  TrendingUp,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'People First',
    description: 'We believe in putting people at the center of everything we do, creating meaningful connections between businesses and workers.',
  },
  {
    icon: Shield,
    title: 'Trust & Safety',
    description: 'Every professional on our platform is thoroughly vetted, ensuring peace of mind for both clients and workers.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We continuously evolve our platform with cutting-edge technology to make workforce management effortless.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Our mission extends beyond borders, connecting talent worldwide and fostering economic growth.',
  },
];

const milestones = [
  { year: '2020', title: 'Founded', description: 'StaffHub was born from a vision to revolutionize workforce management' },
  { year: '2021', title: '1,000 Workers', description: 'Reached our first milestone of 1,000 verified professionals' },
  { year: '2022', title: 'Series A', description: 'Secured $10M in Series A funding to accelerate growth' },
  { year: '2023', title: '10,000+ Workers', description: 'Expanded to over 10,000 skilled professionals across multiple industries' },
  { year: '2024', title: 'AI Integration', description: 'Launched AI-powered matching system for instant workforce solutions' },
];

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Co-Founder',
    image: 'https://picsum.photos/seed/sarah/400/400',
    bio: 'Former VP of Operations at TechCorp with 15+ years in workforce management.',
  },
  {
    name: 'Michael Chen',
    role: 'CTO & Co-Founder',
    image: 'https://picsum.photos/seed/michael/400/400',
    bio: 'Ex-Google engineer passionate about building scalable platforms that connect people.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Operations',
    image: 'https://picsum.photos/seed/emily/400/400',
    bio: 'Operations expert with a track record of scaling marketplace businesses.',
  },
];

const achievements = [
  { metric: '50,000+', label: 'Jobs Completed' },
  { metric: '1,000+', label: 'Partner Companies' },
  { metric: '98%', label: 'Client Satisfaction' },
  { metric: '24/7', label: 'Support Available' },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary/30 dark:bg-card overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6">
            About StaffHub
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold font-headline mb-8 gradient-text">
            Connecting Talent with Opportunity
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're on a mission to transform how businesses find and work with skilled professionals, 
            creating a world where talent knows no boundaries.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-secondary/50 dark:bg-card">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-headline">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg leading-relaxed">
                  To democratize access to skilled labor by creating the world's most trusted and efficient 
                  workforce marketplace, empowering businesses to scale and workers to thrive.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-secondary/50 dark:bg-card">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto bg-gradient-to-br from-purple-500 to-pink-600 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-headline">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg leading-relaxed">
                  A future where every business has instant access to the perfect workforce, and every 
                  skilled professional has unlimited opportunities to showcase their talents.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/30 dark:bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">
              Our Values
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6 gradient-text">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values shape every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className={`group text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg stagger-animation opacity-0`}>
                <CardHeader>
                  <div className="mx-auto bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="font-headline group-hover:text-primary transition-colors">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">
              Our Journey
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6 gradient-text">
              Milestones & Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From a simple idea to a platform that's transforming industries worldwide.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
              
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex items-center mb-12 last:mb-0">
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-background shadow-lg"></div>
                  <div className="ml-20">
                    <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-4">
                          <Badge className="bg-secondary text-secondary-foreground text-lg px-3 py-1">
                            {milestone.year}
                          </Badge>
                          <CardTitle className="text-xl font-headline">
                            {milestone.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {milestone.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-secondary/30 dark:bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">
              Meet the Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6 gradient-text">
              The People Behind StaffHub
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of experts is passionate about connecting talent with opportunity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={member.name} className={`group text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg stagger-animation opacity-0`}>
                <CardHeader className="pb-4">
                  <div className="relative mx-auto mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-border group-hover:ring-primary/20 transition-all duration-300">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-headline group-hover:text-primary transition-colors">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-primary/80 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {member.bio}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            By the Numbers
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-headline mb-16">
            Our Impact in Numbers
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={achievement.label} className={`text-center stagger-animation opacity-0`}>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                  {achievement.metric}
                </div>
                <div className="text-gray-300 text-lg">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6 gradient-text">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Whether you're a business looking for talent or a professional seeking opportunities, 
            we'd love to have you as part of the StaffHub community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 px-8 py-4 text-lg">
              <Link href="/quote">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="group hover:bg-accent transition-all duration-300 hover:scale-105 px-8 py-4 text-lg">
              <Link href="/contact">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
