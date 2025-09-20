import { services } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ServicesPage() {
  const securityServices = services.filter(s => s.category === 'Security');
  const housekeepingServices = services.filter(s => s.category === 'Housekeeping');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Services</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-4">
            We provide a full spectrum of security and housekeeping services, ensuring your property is safe, clean, and well-maintained. Explore our offerings below.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold font-headline mb-8 text-center md:text-left">Security Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {securityServices.map((service) => (
              <Card key={service.title} className="flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                     <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl font-bold font-headline mb-8 text-center md:text-left">Housekeeping Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {housekeepingServices.map((service) => (
              <Card key={service.title} className="flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                     <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
            <h3 className="text-2xl font-bold font-headline mb-4">Find Your Perfect Solution</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Use our intelligent tool to get a personalized service recommendation based on your unique needs.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground transition-transform duration-300 hover:scale-105">
                <Link href="/recommendations">Get AI Recommendation</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
