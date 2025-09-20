import { services } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';
import Link from 'next/link';

const serviceCategories = [
  {
    name: 'Skilled Labor',
    description: 'Certified professionals with specialized expertise',
    icon: Star,
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    name: 'General Labor',
    description: 'Reliable workers for everyday business needs',
    icon: Shield,
    gradient: 'from-green-500 to-green-600'
  },
  {
    name: 'Event Services',
    description: 'Professional staff for memorable events',
    icon: Clock,
    gradient: 'from-purple-500 to-purple-600'
  }
];

export default function ServicesPage() {
  const skilledLabor = services.filter(s => s.category === 'Skilled Labor');
  const generalLabor = services.filter(s => s.category === 'General Labor');
  const eventServices = services.filter(s => s.category === 'Event Services');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
            Our Services
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold font-headline mb-8 gradient-text">
            Workforce Solutions
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We provide a comprehensive range of skilled and reliable professionals to meet the diverse needs of your business.
          </p>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              Service Categories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6 gradient-text">
              Three Core Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From specialized expertise to general support, we cover all your workforce needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {serviceCategories.map((category, index) => (
              <Card key={category.name} className={`group text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg stagger-animation opacity-0`}>
                <CardHeader className="pb-4">
                  <div className={`mx-auto bg-gradient-to-br ${category.gradient} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-headline group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          {/* Skilled Labor */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
                Skilled Labor
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 gradient-text">
                Expert Professionals
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Certified specialists with proven expertise in their fields.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skilledLabor.map((service) => (
              <Card key={service.title} className="group flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border-0 shadow-lg bg-white dark:bg-gray-800 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="flex-row items-center gap-4 relative z-10">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-3 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-md">
                     <service.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-purple-600 transition-colors duration-300" />
                  </div>
                  <CardTitle className="font-headline group-hover:text-blue-600 transition-colors duration-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow relative z-10">
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          </div>

          {/* General Labor */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
                General Labor
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 gradient-text">
                Reliable Workforce
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dependable workers for your everyday operational needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {generalLabor.map((service) => (
              <Card key={service.title} className="group flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border-0 shadow-lg bg-white dark:bg-gray-800 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="flex-row items-center gap-4 relative z-10">
                  <div className="bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900 dark:to-teal-900 p-3 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-md">
                     <service.icon className="w-6 h-6 text-green-600 dark:text-green-400 group-hover:text-teal-600 transition-colors duration-300" />
                  </div>
                  <CardTitle className="font-headline group-hover:text-green-600 transition-colors duration-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow relative z-10">
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          </div>
          
          {/* Event Services */}
          <div>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
                Event Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 gradient-text">
                Event & Hospitality Staff
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional staff to make your events memorable and successful.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventServices.map((service) => (
              <Card key={service.title} className="group flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border-0 shadow-lg bg-white dark:bg-gray-800 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="flex-row items-center gap-4 relative z-10">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 p-3 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-md">
                     <service.icon className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:text-pink-600 transition-colors duration-300" />
                  </div>
                  <CardTitle className="font-headline group-hover:text-purple-600 transition-colors duration-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow relative z-10">
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Ready to Get Started?
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6">
            Need to Fill a Role?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-12 leading-relaxed opacity-90">
            Tell us your requirements, and we'll connect you with the right people for the job. 
            Get matched with qualified professionals in minutes, not days.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="group bg-white text-blue-900 hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl px-8 py-4 text-lg font-semibold">
              <Link href="/quote">
                Request Staff Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="group border-white/30 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl px-8 py-4 text-lg font-semibold">
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

            </p>
            <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
                <Link href="/quote">Request Staff</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
