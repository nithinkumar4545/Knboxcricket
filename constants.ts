
import { Box } from './types';

export const BOXES: Box[] = [
  {
    id: 'b1',
    name: 'The Stadium Box',
    description: 'Our largest turf with professional lighting and stadium-like atmosphere.',
    pricePerHour: 1200,
    imageUrl: 'https://picsum.photos/seed/box1/800/600',
    amenities: ['Professional Lighting', 'Dugouts', 'Scoreboard', 'Water Station'],
    capacity: '12-16 Players'
  },
  {
    id: 'b2',
    name: 'Astro Arena',
    description: 'High-density astro turf perfect for fast-paced short-format matches.',
    pricePerHour: 1000,
    imageUrl: 'https://picsum.photos/seed/box2/800/600',
    amenities: ['Astro Turf', 'Seating Area', 'Changing Rooms'],
    capacity: '10-14 Players'
  },
  {
    id: 'b3',
    name: 'Classic Turf',
    description: 'Value-focused turf with excellent grip and standard dimensions.',
    pricePerHour: 800,
    imageUrl: 'https://picsum.photos/seed/box3/800/600',
    amenities: ['Standard Lighting', 'Parking', 'Equipment Rental'],
    capacity: '8-12 Players'
  }
];

export const TIME_SLOTS = [
  '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
  '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM'
];
