import { services } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ServicesPage() {
  const skilledLabor = services.filter(s => s.category === 'Skilled Labor');
  const generalLabor = services.filter(s => s.category === 'General Labor');
  const eventServices = services.filter(s => s.category === 'Event Services');


  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Workforce Solutions</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-4">
            We provide a comprehensive range of skilled and reliable professionals to meet the diverse needs of your business.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold font-headline mb-8 text-center md:text-left">Skilled Labor</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skilledLabor.map((service) => (
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

          <h2 className="text-3xl font-bold font-headline mb-8 text-center md:text-left">General Labor</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {generalLabor.map((service) => (
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
          
          <h2 className="text-3xl font-bold font-headline mb-8 text-center md:text-left">Event & Hospitality Staff</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventServices.map((service) => (
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
        </div>

        <div className="text-center mt-20 bg-secondary py-12 rounded-lg">
            <h3 className="text-2xl font-bold font-headline mb-4">Need to Fill a Role?</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Tell us your requirements, and we'll connect you with the right people for the job.
            </p>
            <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
                <Link href="/quote">Request Staff</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
