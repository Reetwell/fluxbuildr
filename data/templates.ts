export interface Template {
  id: string;
  name: string;
  description: string;
  style: string;
  keywords: string[];
  color: string;
  demoUrl?: string; // Link to live demo if available
  hasDemo: boolean;
}

export const templates: Template[] = [
  // Plumber - has live demo
  {
    id: 'plumber',
    name: 'Plumber Website',
    description: 'Professional plumbing website with emergency call-outs, service listings, trust badges, and easy contact. Built to generate leads.',
    style: 'Professional & Trustworthy',
    keywords: ['plumber', 'plumbing', 'pipe', 'pipes', 'leak', 'boiler', 'bathroom', 'tap', 'toilet', 'drain', 'blocked'],
    color: '#0ea5e9', // Sky blue
    demoUrl: '/demos/plumber',
    hasDemo: true,
  },
  // Other trades - no demo yet
  {
    id: 'electrician',
    name: 'Electrician Website',
    description: 'Electrical services website focused on safety, certifications, and emergency availability.',
    style: 'Professional & Safe',
    keywords: ['electrician', 'electrical', 'wiring', 'fuse', 'socket', 'lighting', 'rewire'],
    color: '#eab308', // Yellow
    hasDemo: false,
  },
  {
    id: 'cleaner',
    name: 'Cleaning Service',
    description: 'Clean, fresh design for domestic and commercial cleaning businesses.',
    style: 'Clean & Fresh',
    keywords: ['cleaner', 'cleaning', 'clean', 'maid', 'housekeeping', 'domestic', 'office cleaning'],
    color: '#22c55e', // Green
    hasDemo: false,
  },
  {
    id: 'handyman',
    name: 'Handyman / Trades',
    description: 'Versatile design for general tradespeople and handyman services.',
    style: 'Reliable & Versatile',
    keywords: ['handyman', 'trade', 'tradesman', 'builder', 'carpenter', 'joiner', 'decorator', 'painter'],
    color: '#f97316', // Orange
    hasDemo: false,
  },
  // Restaurant
  {
    id: 'restaurant',
    name: 'Restaurant & Café',
    description: 'Warm, appetizing design for food businesses. Showcases menus, atmosphere, and makes booking easy.',
    style: 'Warm & Inviting',
    keywords: ['restaurant', 'cafe', 'coffee', 'food', 'menu', 'dining', 'bar', 'pub', 'bakery', 'catering', 'takeaway', 'delivery'],
    color: '#f59e0b', // Amber
    hasDemo: false,
  },
  // Creative
  {
    id: 'creative',
    name: 'Creative Portfolio',
    description: 'Minimal, image-focused design for photographers, designers, and artists. Let your work shine.',
    style: 'Minimal & Visual',
    keywords: ['photographer', 'photography', 'designer', 'design', 'artist', 'creative', 'portfolio', 'gallery', 'studio', 'freelance', 'visual'],
    color: '#8b5cf6', // Purple
    hasDemo: false,
  },
  // Professional
  {
    id: 'professional',
    name: 'Professional Service',
    description: 'Corporate, credibility-focused design for accountants, consultants, and business services.',
    style: 'Corporate & Credible',
    keywords: ['accountant', 'accounting', 'consultant', 'consulting', 'lawyer', 'legal', 'finance', 'business', 'agency', 'corporate', 'professional'],
    color: '#10b981', // Green
    hasDemo: false,
  },
];

export function findMatchingTemplate(input: string): Template | null {
  const lowercaseInput = input.toLowerCase();

  for (const template of templates) {
    for (const keyword of template.keywords) {
      if (lowercaseInput.includes(keyword)) {
        return template;
      }
    }
  }

  // Return null if no specific match - don't show wrong templates
  return null;
}

// Get a generic response when no template matches
export function getGenericTemplate(): Template {
  return {
    id: 'custom',
    name: 'Custom Website',
    description: 'We\'ll design something unique for your specific needs. Tell us more about your business.',
    style: 'Tailored to You',
    keywords: [],
    color: '#6b7280', // Gray
    hasDemo: false,
  };
}
