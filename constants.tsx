
import { Trainer, MembershipPlan, Location, JobOpening, FAQItem } from './types';

export const TRAINERS: Trainer[] = [
  {
    id: '1',
    name: 'Marcus Chen',
    specialty: 'Powerlifting & Strength',
    bio: 'Former national record holder with 12 years of coaching experience.',
    image: 'https://picsum.photos/seed/marcus/600/800',
    tags: ['Strength', 'Competition Prep', 'Technique']
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    specialty: 'HIIT & Athletics',
    bio: 'D1 track athlete specializing in explosive movement and fat loss.',
    image: 'https://picsum.photos/seed/sarah/600/800',
    tags: ['Agility', 'Weight Loss', 'Endurance']
  },
  {
    id: '3',
    name: 'David Okafor',
    specialty: 'Bodybuilding & Aesthetics',
    bio: 'IFBB Pro focusing on hypertrophy and nutritional optimization.',
    image: 'https://picsum.photos/seed/david/600/800',
    tags: ['Muscle Growth', 'Nutrition', 'Hypertrophy']
  },
  {
    id: '4',
    name: 'Elena Rodriguez',
    specialty: 'Yoga & Mobility',
    bio: 'Advanced practitioner focusing on functional movement and recovery.',
    image: 'https://picsum.photos/seed/elena/600/800',
    tags: ['Flexibility', 'Rehab', 'Mindfulness']
  }
];

export const MEMBERSHIPS: MembershipPlan[] = [
  {
    id: 'basic',
    name: 'Base',
    price: '49',
    period: 'month',
    features: ['Access to gym floor', 'Standard equipment', 'Locker room access', '24/7 Access']
  },
  {
    id: 'pro',
    name: 'Elite',
    price: '89',
    period: 'month',
    features: ['All Base features', 'Group classes', '1 PT session/month', 'Sauna & Recovery zone'],
    recommended: true
  },
  {
    id: 'platinum',
    name: 'Legend',
    price: '149',
    period: 'month',
    features: ['All Elite features', 'Unlimited PT sessions', 'Nutrition planning', 'Guest passes', 'Priority booking']
  }
];

export const LOCATIONS: Location[] = [
  {
    id: 'dt',
    name: 'Downtown Performance',
    address: '123 Main St, Metro City, NY 10001',
    hours: 'Open 24/7',
    phone: '(555) 123-4567',
    image: 'https://picsum.photos/seed/gym1/800/600'
  },
  {
    id: 'ns',
    name: 'Northside Athletics',
    address: '456 Uptown Blvd, Metro City, NY 10002',
    hours: '5AM - Midnight',
    phone: '(555) 987-6543',
    image: 'https://picsum.photos/seed/gym2/800/600'
  }
];

export const JOBS: JobOpening[] = [
  { id: 'j1', title: 'Personal Trainer', department: 'Fitness', type: 'Full-time', location: 'Downtown' },
  { id: 'j2', title: 'Front Desk Associate', department: 'Operations', type: 'Part-time', location: 'Northside' },
  { id: 'j3', title: 'Group Class Instructor', department: 'Fitness', type: 'Contract', location: 'All Locations' }
];

export const FAQS: FAQItem[] = [
  { question: 'What are your opening hours?', answer: 'Our Downtown location is open 24/7. Other branches vary; please check the Locations page for details.' },
  { question: 'Do you offer a free trial?', answer: 'Yes! We offer a complimentary 3-day pass for all first-time visitors.' },
  { question: 'Can I freeze my membership?', answer: 'Memberships can be frozen for up to 3 months per year for a small administrative fee.' },
  { question: 'Are personal training sessions included?', answer: 'Our Elite and Legend plans include PT sessions. Base members can purchase individual sessions separately.' }
];
