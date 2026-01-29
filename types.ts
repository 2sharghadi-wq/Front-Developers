
export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  tags: string[];
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  hours: string;
  phone: string;
  image: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
