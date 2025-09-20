import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, TrendingUp, Users, Zap, Shield, Clock } from 'lucide-react';
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

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

const stats = [
  { label: 'Active Workers', value: '10,000+', icon: Users },
  { label: 'Projects Completed', value: '5,000+', icon: CheckCircle },
  { label: 'Client Satisfaction', value: '98%', icon: Star },
  { label: 'Response Time', value: '<2hrs', icon: Clock },
];

const features = [
  {
    icon: Zap,
    title: 'Instant Matching',
    description: 'AI-powered algorithm matches you with the perfect workforce in minutes, not days.',
  },
  {
    icon: Shield,
    title: 'Verified Professionals',
    description: 'All workers are background-checked, certified, and rated by previous clients.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'From single workers to entire teams, scale your workforce up or down instantly.',
  },
];

export default function Home() {
  const featuredServices = services.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800" />
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover opacity-20"
            priority
          />
        )}
        <div className="absolute inset-0 bg-hero-pattern opacity-10" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300">
            <Zap className="w-3 h-3 mr-1" />
            Trusted by 1000+ Companies
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold font-headline mb-6 drop-shadow-2xl slide-up">
            <span className="block">Reliable Manpower,</span>
            <span className="block gradient-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
              On Demand
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 drop-shadow-lg max-w-3xl mx-auto leading-relaxed fade-in-up opacity-90">
            Connect with skilled professionals instantly. From construction to events, find the perfect workforce for your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 fade-in-up">
            <Button asChild size="lg" className="group bg-white text-blue-900 hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl px-8 py-4 text-lg font-semibold">
              <Link href="/services">Explore Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="group border-white/30 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl px-8 py-4 text-lg font-semibold">
              <Link href="/quote">
                Request Staff
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto fade-in-up">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`text-center stagger-animation opacity-0`}>
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              Why Choose StaffHub
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6 gradient-text">
              Built for Modern Businesses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of workforce management with our innovative platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={feature.title} className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg stagger-animation opacity-0 bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-800 dark:to-gray-700`}>
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-headline group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Badge className="mb-6 bg-purple-100 text-purple-800 border-purple-200">
            Our Mission
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-headline mb-8 gradient-text">
            Your Strategic Staffing Partner
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed mb-8">
            StaffHub was founded to solve one of the biggest challenges businesses face: finding reliable, skilled labor right when it's needed. We provide a streamlined platform to connect you with vetted professionals across various industries.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our mission is to empower your business with the flexible workforce it needs to succeed, backed by cutting-edge technology and human expertise.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6 gradient-text">
              Find the Right Talent
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              Explore our core staffing solutions designed to meet your business demands.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {featuredServices.map((service) => (
              <Card key={service.title} className="group flex flex-col text-center items-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border-0 shadow-lg bg-white dark:bg-gray-800 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader>
                  <div className="mx-auto bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-6 rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <service.icon className="w-10 h-10 text-blue-600 dark:text-blue-400 group-hover:text-purple-600 transition-colors duration-300" />
                  </div>
                  <CardTitle className="pt-6 font-headline text-lg group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl px-8 py-4 text-lg">
              <Link href="/services">
                View All Specializations
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">
              Client Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6 gradient-text">
              Trusted By Industry Leaders
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              See how we've helped businesses like yours achieve their goals.
            </p>
          </div>
          
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => {
                const testimonialImage = PlaceHolderImages.find(img => img.id === `testimonial-${index + 1}`);
                return(
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="group flex flex-col justify-between h-full p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-800 dark:to-gray-700">
                      <CardContent className="p-0 pb-8">
                        <div className="flex mb-4">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <p className="text-muted-foreground italic text-lg leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                      </CardContent>
                      <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        {testimonialImage && (
                          <Avatar className="w-12 h-12 ring-2 ring-blue-100 dark:ring-blue-900">
                            <AvatarImage src={testimonialImage.imageUrl} alt={testimonial.name} data-ai-hint={testimonialImage.imageHint}/>
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
              )})}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-12 hover:bg-blue-50 hover:border-blue-200" />
            <CarouselNext className="hidden sm:flex -right-12 hover:bg-blue-50 hover:border-blue-200" />
          </Carousel>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl animate-pulse" />
        </div>
        
        <div className="container mx-auto px-4 text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Get Started Today
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6">
              Ready to Build Your Team?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-12 leading-relaxed opacity-90">
              Let us handle the staffing, so you can focus on growing your business. Get a free quote today and experience the StaffHub difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="group bg-white text-blue-900 hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl px-8 py-4 text-lg font-semibold">
                <Link href="/quote">
                  Request Staff Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="group border-white/30 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl px-8 py-4 text-lg font-semibold">
                <Link href="/contact">Contact Sales</Link>
              </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
