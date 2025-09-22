'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Clock, 
  ArrowRight,
  Sparkles,
  Crown,
  Rocket
} from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    price: 'Free',
    period: 'forever',
    description: 'Perfect for small businesses getting started',
    features: [
      'Up to 5 worker requests per month',
      'Basic worker profiles',
      'Email support',
      'Standard matching algorithm',
    ],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Professional',
    icon: Star,
    price: '$99',
    period: 'per month',
    description: 'Ideal for growing businesses with regular staffing needs',
    features: [
      'Unlimited worker requests',
      'Advanced worker profiles & ratings',
      'Priority email & chat support',
      'AI-powered smart matching',
      'Performance analytics',
      'Dedicated account manager'
    ],
    cta: 'Start Professional',
    popular: true,
  },
  {
    name: 'Enterprise',
    icon: Crown,
    price: 'Custom',
    period: 'pricing',
    description: 'Tailored solutions for large organizations',
    features: [
      'Everything in Professional',
      'Custom integrations & API access',
      '24/7 phone & priority support',
      'Dedicated success manager',
      'Custom SLA agreements',
      'Advanced security & compliance',
    ],
    cta: 'Contact Sales',
    popular: false,
  }
];

const faqs = [
  {
    question: 'How does the pricing work?',
    answer: 'Our pricing is transparent and based on your usage. The Starter plan is free forever, Professional is a monthly subscription, and Enterprise pricing is customized based on your specific needs and volume.'
  },
  {
    question: 'Can I change plans anytime?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any charges or credits.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, ACH transfers, and can set up custom billing arrangements for Enterprise customers.'
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No setup fees for any plan. You only pay for what you use, when you use it.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied, we\'ll refund your payment in full.'
  }
];

export default function PricingPage() {
  const pageRef = useRef(null);

    useEffect(() => {
        const context = gsap.context(() => {
        gsap.utils.toArray('.stagger-animation').forEach((el: any) => {
            gsap.fromTo(el, 
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
                }
            }
            );
        });
        }, pageRef);

        return () => context.revert();
    }, []);

  return (
    <div className="flex flex-col" ref={pageRef}>
      {/* Hero Section */}
      <section className="relative py-32 bg-secondary/30 dark:bg-card">
        <div className="absolute top-0 left-0 w-full h-full bg-accent" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}></div>
        <div className="container text-center relative z-10">
          <Badge className="mb-6 bg-background text-foreground text-sm">
            <Sparkles className="w-3 h-3 mr-1" />
            Transparent Pricing
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold font-headline mb-8 text-white leading-tight">
            Simple, Fair Pricing
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your business. Start free, scale as you grow, 
            and only pay for what you need.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
            {plans.map((plan, index) => (
              <Card key={plan.name} className={`relative group transition-all duration-500 hover:-translate-y-2 border shadow-lg overflow-hidden stagger-animation opacity-0 ${plan.popular ? 'ring-2 ring-primary shadow-2xl' : 'hover:shadow-2xl'}`} style={{animationDelay: `${index * 0.1}s`}}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-center py-2 px-4 text-xs font-semibold rounded-bl-lg">
                    Popular
                  </div>
                )}
                
                <CardHeader className={`text-center pt-8 pb-6 relative z-10`}>
                  <div className={`mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <plan.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-headline mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period !== 'pricing' && <span className="text-muted-foreground ml-2">/{plan.period}</span>}
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <div className="p-6 pt-2">
                   <Button 
                    asChild 
                    className={`w-full group transition-all duration-300 hover:scale-105 font-semibold ${
                      plan.popular 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                        : 'bg-primary/10 text-primary hover:bg-primary/20'
                    }`}
                    size="lg"
                  >
                    <Link href={plan.name === 'Enterprise' ? '/contact' : '/quote'}>
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-secondary/30 dark:bg-card angled-section-b">
        <div className="container">
          <div className="text-center mb-16 stagger-animation opacity-0">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-sm">
              FAQ
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Got questions? We've got answers. Can't find what you're looking for? Contact our support team.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-background stagger-animation opacity-0" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <CardTitle className="text-lg font-headline text-left">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {faq.answer}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background relative">
        <div className="absolute inset-x-0 top-0 h-48 bg-accent" style={{clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0 100%)'}}></div>
        <div className="container text-center relative z-10 stagger-animation opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6 leading-tight">
            Start Building Your Team Today
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-12 leading-relaxed text-muted-foreground">
            Join thousands of businesses that trust StaffHub for their workforce needs. 
            Start free and scale as you grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl px-8 py-3 text-base font-semibold">
              <Link href="/quote">
                Start Free
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="group border-primary text-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 px-8 py-3 text-base font-semibold">
              <Link href="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
