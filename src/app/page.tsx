'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { services, testimonials } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

const stats = [
  { label: 'Active Workers', value: '10,000+' },
  { label: 'Projects Completed', value: '5,000+' },
  { label: 'Client Satisfaction', value: '98%' },
];

export default function Home() {
  const featuredServices = services.slice(0, 3);
  const pageRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.utils.toArray('.stagger-animation').forEach((el: any) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              end: 'top 50%',
              scrub: 1,
            },
          }
        );
      });
    }, pageRef);

    return () => context.revert();
  }, []);

  return (
    <div className="flex flex-col bg-background" ref={pageRef}>
      {/* Hero Section */}
      <div className="bg-secondary/30">
        <section className="relative min-h-[700px] w-full flex flex-col justify-center overflow-hidden hero-clip-path">
          <div className="absolute inset-0 z-0">
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
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="container relative z-10 w-[85%] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
              <div className="text-white">
                <h1 className="text-3xl md:text-5xl font-bold font-headline mb-6 slide-up leading-tight">
                  Reliable Manpower, On Demand
                </h1>
                <p className="text-base md:text-lg mb-6 max-w-xl leading-relaxed fade-in-up text-white/80">
                  Connect with skilled professionals instantly. Find the perfect workforce for your business needs.
                </p>
                <div className="flex gap-4 fade-in-up">
                  <Button asChild size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg px-8 py-4 text-base font-semibold">
                    <Link href="/quote">Request Staff</Link>
                  </Button>
                </div>
              </div>
              <div className="text-white text-center md:text-right hidden md:block">
                <div className="inline-block">
                  <p className="text-4xl md:text-6xl font-bold text-primary">4+</p>
                  <p className="text-base text-white/80">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-16 items-center w-[85%] mx-auto">
             <div className="relative col-span-5 md:col-span-2 h-64 md:h-[500px] stagger-animation opacity-0">
              <div
                className="absolute inset-0 bg-cover bg-center rounded-lg shadow-2xl bg-fixed-parallax"
                style={{ backgroundImage: `url(https://lh4.googleusercontent.com/proxy/8ATaB7Gjf3hr1cQOaY9ura5Lun9NyPd6K-MNbgB02K1i15MFpb_ziuoAvvDijHkBntxkBwknmq2apzN2TLpyNK9muaF3Wl5Hvw)` }}
              ></div>
            </div>
            <div className="col-span-5 md:col-span-3 text-center md:text-left stagger-animation opacity-0">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-sm">
                Who We Are
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6 leading-tight">
                Your Strategic Staffing Partner
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                StaffHub was founded to solve one of the biggest challenges businesses face: finding reliable, skilled labor right when it's needed. We provide a streamlined platform to connect you with vetted professionals across various industries.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-10">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="stagger-animation opacity-0" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" variant="outline" className="group border-primary text-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 px-8 py-3 text-base font-semibold">
                <Link href="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section (Who do we help) */}
      <section className="py-24 bg-background">
        <div className="container w-[85%] mx-auto">
          <div className="text-center mb-16 stagger-animation opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6 leading-tight">
              Who Do We Help?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our flexible platform serves a wide range of industries and business sizes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  mx-auto">
            {featuredServices.map((feature, index) => (
              <Card key={feature.title} className="stagger-animation opacity-0 group text-center bg-secondary/30 border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 shadow-lg" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="items-center pb-4">
                  <div className="bg-background p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-headline text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-secondary/30">
        <div className="container w-[85%] mx-auto">
          <div className="text-center mb-16 stagger-animation opacity-0">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-sm">
              Client Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6 leading-tight">
              Trusted By Industry Leaders
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              See how we've helped businesses like yours achieve their goals.
            </p>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-6xl mx-auto testimonials">
            <CarouselContent>
              {testimonials.map((testimonial, index) => {
                const testimonialImage = PlaceHolderImages.find(img => img.id === `testimonial-${index + 1}`);
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 testimonial-item stagger-animation opacity-0" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="p-1 h-full">
                      <Card className="group flex flex-col justify-between h-full p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 shadow-lg bg-background">
                        <CardContent className="p-0 pb-8">
                          <div className="flex mb-4">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-500'}`}
                              />
                            ))}
                          </div>
                          <p className="text-muted-foreground italic text-base md:text-lg leading-relaxed">
                            "{testimonial.quote}"
                          </p>
                        </CardContent>
                        <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                          {testimonialImage && (
                            <Avatar className="w-12 h-12 ring-2 ring-border">
                              <AvatarImage src={testimonialImage.imageUrl} alt={testimonial.name} />
                              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          )}
                          <div>
                            <p className="font-semibold text-base">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-12 hover:bg-accent hover:border-border" />
            <CarouselNext className="hidden sm:flex -right-12 hover:bg-accent hover:border-border" />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container text-center stagger-animation opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6 leading-tight">
            Ready to Build Your Team?
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-12 leading-relaxed text-muted-foreground">
            Let us handle the staffing, so you can focus on growing your business. Get a free quote today and experience the StaffHub difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl px-8 py-3 text-base font-semibold">
              <Link href="/quote">
                Request Staff Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
