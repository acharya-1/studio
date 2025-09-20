import type { LucideIcon } from 'lucide-react';
import { z } from 'zod';

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  category: 'Skilled Labor' | 'General Labor' | 'Event Services';
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  avatar: string; // Used as seed for placeholder image
  rating: number;
};

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
