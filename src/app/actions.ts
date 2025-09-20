'use server';

import { z } from 'zod';
import { recommendTailoredServices } from '@/ai/flows/recommend-tailored-services';
import type { RecommendTailoredServicesOutput } from '@/ai/flows/recommend-tailored-services';

export const recommendationSchema = z.object({
  propertySize: z.string().min(1, 'Please select a property size.'),
  securityConcerns: z.string().min(10, 'Please describe your security concerns (min. 10 characters).'),
});

export const quoteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().optional(),
  services: z.array(z.string()).min(1, 'Please select at least one service.'),
  details: z.string().optional(),
});

export const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters.'),
    email: z.string().email('Please enter a valid email address.'),
    subject: z.string().min(5, 'Subject must be at least 5 characters.'),
    message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type RecommendationState = {
    success?: RecommendTailoredServicesOutput;
    error?: string;
};

export async function getServiceRecommendation(
    prevState: RecommendationState,
    formData: FormData
): Promise<RecommendationState> {
  const values = {
      propertySize: formData.get('propertySize'),
      securityConcerns: formData.get('securityConcerns'),
  }
  const validatedFields = recommendationSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid input.' };
  }

  try {
    const result = await recommendTailoredServices(validatedFields.data);
    return { success: result };
  } catch (error) {
    console.error('AI recommendation error:', error);
    return { error: 'Failed to get recommendation. Please try again later.' };
  }
}

type FormState = {
    success?: string;
    error?: string;
}

export async function submitQuoteRequest(
    prevState: FormState,
    formData: FormData
): Promise<FormState> {
    const serviceKeys = Array.from(formData.keys()).filter(key => key.startsWith('service-'));
    const services = serviceKeys.map(key => formData.get(key) as string);

    const values = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        services: services,
        details: formData.get('details'),
    }

    const validatedFields = quoteSchema.safeParse(values);
    
    if (!validatedFields.success) {
        console.log(validatedFields.error.flatten().fieldErrors);
        return { error: 'Invalid data provided. Please check your entries.' };
    }

    console.log('New Quote Request:', validatedFields.data);

    return { success: 'Your quote request has been submitted successfully! We will contact you shortly.' };
}

export async function submitContactForm(
    prevState: FormState,
    formData: FormData
): Promise<FormState> {
    const values = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
    }
    const validatedFields = contactSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Invalid data provided. Please check your entries.' };
    }

    console.log('New Contact Form Submission:', validatedFields.data);

    return { success: 'Thank you for your message! We will get back to you soon.' };
}
