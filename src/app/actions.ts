'use server';

import { z } from 'zod';
import { quoteSchema, contactSchema } from '@/lib/definitions';

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
