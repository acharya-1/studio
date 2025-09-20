'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormState } from 'react-dom';
import { useEffect, useState } from 'react';
import { recommendationSchema, getServiceRecommendation } from '@/app/actions';
import type { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles, Wand2, CheckCircle } from 'lucide-react';
import type { RecommendTailoredServicesOutput } from '@/ai/flows/recommend-tailored-services';

type RecommendationFormValues = z.infer<typeof recommendationSchema>;

export default function RecommendationPage() {
  const { toast } = useToast();
  const [state, formAction] = useFormState(getServiceRecommendation, { error: undefined, success: undefined });
  const [recommendation, setRecommendation] = useState<RecommendTailoredServicesOutput | null>(null);

  const form = useForm<RecommendationFormValues>({
    resolver: zodResolver(recommendationSchema),
    defaultValues: {
      propertySize: '',
      securityConcerns: '',
    },
    context: state,
  });

  useEffect(() => {
    if (state.success) {
      setRecommendation(state.success);
      form.reset();
    }
    if (state.error) {
      toast({
        title: 'Error',
        description: state.error,
        variant: 'destructive',
      });
    }
  }, [state, toast, form]);

  const { isSubmitting } = form.formState;

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <Card className="max-w-xl mx-auto w-full">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Wand2 className="h-8 w-8 text-primary" />
              <CardTitle className="text-3xl font-headline">AI Service Recommendation</CardTitle>
            </div>
            <CardDescription>
              Not sure what you need? Answer two simple questions, and our AI will build a tailored service package just for you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form action={formAction} className="space-y-6">
                <FormField
                  control={form.control}
                  name="propertySize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Property Size</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select the size of your property" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Small (e.g., apartment, small office)">Small (e.g., apartment, small office)</SelectItem>
                          <SelectItem value="Medium (e.g., single-family home, retail store)">Medium (e.g., single-family home, retail store)</SelectItem>
                          <SelectItem value="Large (e.g., commercial building, warehouse)">Large (e.g., commercial building, warehouse)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="securityConcerns"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Primary Concerns</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your main security or housekeeping concerns (e.g., preventing break-ins, maintaining a clean storefront, after-hours safety)."
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Get Recommendation
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        
        <div className="mt-8 lg:mt-0">
          <Card className={`transition-opacity duration-500 ${isSubmitting || recommendation ? 'opacity-100' : 'opacity-50'}`}>
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Your Custom Package</CardTitle>
              <CardDescription>
                {isSubmitting ? 'Our AI is crafting your personalized plan...' : recommendation ? 'Here is what we recommend for you:' : 'Your recommended services will appear here.'}
              </CardDescription>
            </CardHeader>
            <CardContent className="min-h-[300px] flex items-center justify-center">
              {isSubmitting ? (
                <div className="flex flex-col items-center gap-4 text-muted-foreground">
                  <Loader2 className="h-12 w-12 animate-spin text-primary" />
                  <p>Generating insights...</p>
                </div>
              ) : recommendation ? (
                <div className="w-full space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Recommended Services</h3>
                    <ul className="space-y-2">
                      {recommendation.recommendedServices.map((service, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Why We Recommend This</h3>
                    <p className="text-muted-foreground whitespace-pre-wrap">{recommendation.reasoning}</p>
                  </div>
                </div>
              ) : (
                 <div className="text-center text-muted-foreground">
                    <Wand2 className="h-12 w-12 mx-auto mb-4" />
                    <p>Fill out the form to see your results.</p>
                 </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
