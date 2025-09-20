import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { services, testimonials } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

export default function Home() {
  const featuredServices = services.slice(0, 4);

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 drop-shadow-lg">
            Your Trusted Partner in Security & Facility Management
          </h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md">
            Providing comprehensive, tailored solutions to protect and maintain your property with excellence and integrity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground transition-transform duration-300 hover:scale-105">
              <Link href="/recommendations">Get AI Recommendation</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="transition-transform duration-300 hover:scale-105">
              <Link href="/quote">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            About Protective Facilities
          </h2>
          <p className="text-muted-foreground text-lg">
            Founded on the principles of trust, professionalism, and innovation, Protective Facilities offers a dual-service approach to property management. We integrate state-of-the-art security with meticulous housekeeping to provide a seamless, high-quality experience for our clients. Our mission is to create safe, clean, and welcoming environments, allowing you to focus on what matters most.
          </p>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Core Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-2">
              A glimpse into our security and housekeeping solutions designed for your peace of mind.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service) => (
              <Card key={service.title} className="flex flex-col text-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="pt-4 font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-2">
              Real stories from satisfied partners who trust us with their facilities.
            </p>
          </div>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => {
                const testimonialImage = PlaceHolderImages.find(img => img.id === `testimonial-${index + 1}`);
                return(
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-1 h-full">
                    <Card className="flex flex-col justify-between h-full p-6">
                      <CardContent className="p-0 pb-6">
                        <div className="flex mb-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`}
                            />
                          ))}
                        </div>
                        <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                      </CardContent>
                      <div className="flex items-center gap-4">
                        {testimonialImage && (
                          <Avatar>
                            <AvatarImage src={testimonialImage.imageUrl} alt={testimonial.name} data-ai-hint={testimonialImage.imageHint}/>
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        )}
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              )})}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Ready to Secure and Enhance Your Property?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Let our AI help you find the perfect service package, or contact us directly for a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground transition-transform duration-300 hover:scale-105">
                <Link href="/recommendations">Get AI Recommendation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="transition-transform duration-300 hover:scale-105">
                <Link href="/contact">Contact Us</Link>
              </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
