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
      '48-hour response time',
      'Basic project management tools'
    ],
    limitations: [
      'Limited to general labor only',
      'No priority support',
      'Basic reporting'
    ],
    cta: 'Get Started Free',
    popular: false,
    gradient: 'from-blue-500 to-blue-600'
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
      '24-hour response time',
      'Advanced project management',
      'Custom worker requirements',
      'Performance analytics',
      'Bulk hiring discounts',
      'Dedicated account manager'
    ],
    limitations: [],
    cta: 'Start Professional',
    popular: true,
    gradient: 'from-purple-500 to-pink-500'
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
      'White-label solutions',
      'Custom reporting & analytics',
      'Volume pricing discounts',
      'Training & onboarding support'
    ],
    limitations: [],
    cta: 'Contact Sales',
    popular: false,
    gradient: 'from-yellow-500 to-orange-500'
  }
];

const addOns = [
  {
    name: 'Background Check Plus',
    price: '$25',
    period: 'per worker',
    description: 'Enhanced background verification including criminal history and reference checks',
    icon: Shield
  },
  {
    name: 'Rush Delivery',
    price: '$50',
    period: 'per request',
    description: 'Get matched workers within 2 hours for urgent staffing needs',
    icon: Rocket
  },
  {
    name: 'Skills Assessment',
    price: '$15',
    period: 'per worker',
    description: 'Comprehensive skills testing and certification verification',
    icon: Users
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
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
            <Sparkles className="w-3 h-3 mr-1" />
            Transparent Pricing
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold font-headline mb-8 gradient-text">
            Simple, Fair Pricing
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your business. Start free, scale as you grow, 
            and only pay for what you need.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-green-500" />
            <span>No hidden fees</span>
            <span className="mx-2">•</span>
            <Check className="w-4 h-4 text-green-500" />
            <span>Cancel anytime</span>
            <span className="mx-2">•</span>
            <Check className="w-4 h-4 text-green-500" />
            <span>30-day money back</span>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={plan.name} className={`relative group transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden ${plan.popular ? 'ring-2 ring-purple-500 shadow-2xl scale-105' : 'hover:shadow-2xl'}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-8'} pb-6 relative z-10`}>
                  <div className={`mx-auto bg-gradient-to-br ${plan.gradient} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-headline mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground ml-2">/{plan.period}</span>}
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <Button 
                    asChild 
                    className={`w-full mb-8 group transition-all duration-300 hover:scale-105 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' 
                        : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                    }`}
                    size="lg"
                  >
                    <Link href={plan.name === 'Enterprise' ? '/contact' : '/quote'}>
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                      What's Included
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.limitations.length > 0 && (
                      <>
                        <Separator className="my-6" />
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                          Limitations
                        </h4>
                        <ul className="space-y-3">
                          {plan.limitations.map((limitation, limitationIndex) => (
                            <li key={limitationIndex} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full border-2 border-gray-300 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              Add-on Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6 gradient-text">
              Enhance Your Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Optional services to further customize your staffing solution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {addOns.map((addon, index) => (
              <Card key={addon.name} className={`group text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg stagger-animation opacity-0`}>
                <CardHeader className="pb-4">
                  <div className="mx-auto bg-gradient-to-br from-green-500 to-teal-600 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <addon.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-headline group-hover:text-green-600 transition-colors">
                    {addon.name}
                  </CardTitle>
                  <div className="text-2xl font-bold text-green-600 mt-2">
                    {addon.price}
                    <span className="text-sm text-muted-foreground ml-1">/{addon.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {addon.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
              FAQ
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6 gradient-text">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Got questions? We've got answers. Can't find what you're looking for? Contact our support team.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
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
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Ready to Get Started?
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6">
            Start Building Your Team Today
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-12 leading-relaxed opacity-90">
            Join thousands of businesses that trust StaffHub for their workforce needs. 
            Start free and scale as you grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="group bg-white text-blue-900 hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl px-8 py-4 text-lg font-semibold">
              <Link href="/quote">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="group border-white/30 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl px-8 py-4 text-lg font-semibold">
              <Link href="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}