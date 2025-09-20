import type { LucideIcon } from 'lucide-react';

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  category: 'Security' | 'Housekeeping';
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  avatar: string; // Used as seed for placeholder image
  rating: number;
};
