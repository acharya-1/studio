import { services } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const skilledLabor = services.filter(s => s.category === 'Skilled Labor');
  const generalLabor = services.filter(s => s.category === 'General Labor');
  const eventServices = services.filter(s => s.category === 'Event Services');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-32 bg-secondary/30 dark:bg-card">
         <div className="absolute top-0 left-0 w-full h-full bg-accent" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}></div>
        <div className="container text-center relative z-10">
          <Badge className="mb-6 bg-background text-foreground text-sm">
            Our Services
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold font-headline mb-8 text-white leading-tight">
            Workforce Solutions
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            We provide a comprehensive range of skilled and reliable professionals to meet the diverse needs of your business.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 bg-background">
        <div className="container">
          {/* Skilled Labor */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-sm">
                Skilled Labor
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 leading-tight">
                Expert Professionals
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Certified specialists with proven expertise in their fields.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skilledLabor.map((service) => (
              <Card key={service.title} className="group flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border shadow-sm bg-card overflow-hidden relative">
                <CardHeader className="flex-row items-center gap-4 relative z-10 p-6">
                  <div className="bg-primary/10 p-3 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-md">
                     <service.icon className="w-6 h-6 text-primary group-hover:text-primary-dark transition-colors duration-300" />
                  </div>
                  <CardTitle className="font-headline group-hover:text-primary transition-colors duration-300 text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow relative z-10 p-6 pt-0">
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          </div>

          {/* General Labor */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-sm">
                General Labor
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 leading-tight">
                Reliable Workforce
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dependable workers for your everyday operational needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {generalLabor.map((service) => (
              <Card key={service.title} className="group flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border shadow-sm bg-card overflow-hidden relative">
                <CardHeader className="flex-row items-center gap-4 relative z-10 p-6">
                  <div className="bg-primary/10 p-3 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-md">
                     <service.icon className="w-6 h-6 text-primary group-hover:text-primary-dark transition-colors duration-300" />
                  </div>
                  <CardTitle className="font-headline group-hover:text-primary transition-colors duration-300 text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow relative z-10 p-6 pt-0">
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          </div>
          
          {/* Event Services */}
          <div>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-sm">
                Event Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 leading-tight">
                Event & Hospitality Staff
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional staff to make your events memorable and successful.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventServices.map((service) => (
              <Card key={service.title} className="group flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border shadow-sm bg-card overflow-hidden relative">
                <CardHeader className="flex-row items-center gap-4 relative z-10 p-6">
                  <div className="bg-primary/10 p-3 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-md">
                     <service.icon className="w-6 h-6 text-primary group-hover:text-primary-dark transition-colors duration-300" />
                  </div>
                  <CardTitle className="font-headline group-hover:text-primary transition-colors duration-300 text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow relative z-10 p-6 pt-0">
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background relative">
        <div className="absolute inset-x-0 top-0 h-48 bg-accent" style={{clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0 100%)'}}></div>
        <div className="container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6 leading-tight">
            Need to Fill a Role?
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-12 leading-relaxed text-muted-foreground">
            Tell us your requirements, and we'll connect you with the right people for the job. 
            Get matched with qualified professionals in minutes, not days.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl px-8 py-3 text-base font-semibold">
              <Link href="/quote">
                Request Staff Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="group border-primary text-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 px-8 py-3 text-base font-semibold">
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
