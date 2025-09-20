import { ShieldCheck, Video, BellRing, KeyRound, Sparkles, Trash2, Trees, SprayCan } from 'lucide-react';
import type { Service, Testimonial } from './definitions';

export const services: Service[] = [
  // Security
  {
    title: '24/7 On-Site Guards',
    description: 'Professional, SIA-licensed security personnel providing a visible deterrent and rapid response.',
    icon: ShieldCheck,
    category: 'Security',
  },
  {
    title: 'CCTV Surveillance',
    description: 'State-of-the-art video surveillance systems with remote monitoring and recording capabilities.',
    icon: Video,
    category: 'Security',
  },
  {
    title: 'Alarm Systems & Response',
    description: 'Advanced intruder alarm systems connected to our 24/7 monitoring center for immediate response.',
    icon: BellRing,
    category: 'Security',
  },
  {
    title: 'Access Control',
    description: 'Manage and restrict entry to your property with keycards, biometric scanners, and digital locks.',
    icon: KeyRound,
    category: 'Security',
  },
  // Housekeeping
  {
    title: 'Commercial Cleaning',
    description: 'Comprehensive, eco-friendly cleaning services for offices, retail spaces, and commercial buildings.',
    icon: Sparkles,
    category: 'Housekeeping',
  },
  {
    title: 'Waste Management',
    description: 'Efficient and responsible waste disposal and recycling programs tailored to your business needs.',
    icon: Trash2,
    category: 'Housekeeping',
  },
  {
    title: 'Grounds Maintenance',
    description: 'Landscaping, lawn care, and exterior maintenance to keep your property looking its best.',
    icon: Trees,
    category: 'Housekeeping',
  },
  {
    title: 'Sanitization Services',
    description: 'Specialized disinfection and sanitization services to ensure a healthy and safe environment.',
    icon: SprayCan,
    category: 'Housekeeping',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Protective Facilities transformed our building's security. Their guards are professional and the response time is incredible. We feel safer than ever.",
    name: 'Jane Doe',
    title: 'Office Manager, TechCorp',
    avatar: '1',
    rating: 5,
  },
  {
    quote: "The housekeeping team is phenomenal. Our offices have never been cleaner, and we love their commitment to using eco-friendly products.",
    name: 'John Smith',
    title: 'CEO, Innovate Ltd.',
    avatar: '2',
    rating: 5,
  },
  {
    quote: 'The integrated security and cleaning package was a game-changer for our property management. Seamless service and great value.',
    name: 'Emily White',
    title: 'Property Manager, Urban Real Estate',
    avatar: '3',
    rating: 5,
  },
    {
    quote: "Their AI recommendation tool was surprisingly accurate. It helped us choose the right services without the usual sales pressure. Highly recommend.",
    name: 'Michael Brown',
    title: 'Small Business Owner',
    avatar: '4',
    rating: 4,
  },
];
