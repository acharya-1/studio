import { HardHat, Wrench, Package, Shovel, Utensils, GlassWater, Shirt, Award } from 'lucide-react';
import type { Service, Testimonial } from './definitions';

export const services: Service[] = [
  // Skilled Labor
  {
    title: 'Construction Workers',
    description: 'Certified and experienced builders, carpenters, and tradespeople for any construction project.',
    icon: HardHat,
    category: 'Skilled Labor',
  },
  {
    title: 'Licensed Electricians',
    description: 'Qualified electricians for installations, repairs, and maintenance in residential and commercial properties.',
    icon: Wrench,
    category: 'Skilled Labor',
  },
  {
    title: 'Skilled Tradespeople',
    description: 'Plumbers, welders, and other certified tradespeople for specialized industrial and commercial jobs.',
    icon: Award,
    category: 'Skilled Labor',
  },
  // General Labor
  {
    title: 'Warehouse Staff',
    description: 'Reliable workers for packing, sorting, loading, and unloading in logistics and warehouse environments.',
    icon: Package,
    category: 'General Labor',
  },
  {
    title: 'General Laborers',
    description: 'Versatile and hardworking individuals for site cleanup, landscaping, moving, and other manual tasks.',
    icon: Shovel,
    category: 'General Labor',
  },
  // Event Services
  {
    title: 'Catering & Waitstaff',
    description: 'Professional chefs, servers, and bartenders to ensure your event runs smoothly.',
    icon: Utensils,
    category: 'Event Services',
  },
  {
    title: 'Event Setup & Teardown',
    description: 'Efficient crews to handle the setup and breakdown of stages, seating, and equipment.',
    icon: GlassWater,
    category: 'Event Services',
  },
  {
    title: 'Brand Ambassadors',
    description: 'Enthusiastic and professional staff to represent your brand and engage with attendees.',
    icon: Shirt,
    category: 'Event Services',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "StaffHub was a lifesaver for our construction project. The skilled laborers they provided were top-notch and integrated seamlessly with our team.",
    name: 'Mark Johnson',
    title: 'Site Foreman, BuildRight Inc.',
    avatar: '1',
    rating: 5,
  },
  {
    quote: "We needed reliable warehouse staff during our peak season, and StaffHub delivered. Their team was punctual, efficient, and professional.",
    name: 'Sarah Lee',
    title: 'Logistics Manager, ShipFast',
    avatar: '2',
    rating: 5,
  },
  {
    quote: 'The event staff were fantastic. They were professional, friendly, and handled everything flawlessly. It made our corporate event a huge success.',
    name: 'David Chen',
    title: 'Event Coordinator, Stellar Events',
    avatar: '3',
    rating: 5,
  },
    {
    quote: "Finding temporary skilled workers used to be a headache. StaffHub's platform is easy to use and the quality of their people is consistently high.",
    name: 'Jessica Miller',
    title: 'Operations Director, Pro-Services Co.',
    avatar: '4',
    rating: 4,
  },
];
