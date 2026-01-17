export interface Template {
  id: string;
  name: string;
  description: string;
  style: string;
  keywords: string[];
  color: string; // For placeholder visual
}

export const templates: Template[] = [
  {
    id: 'local-service',
    name: 'Local Service',
    description: 'Perfect for plumbers, electricians, cleaners, and tradespeople. Clean design focused on trust and easy contact.',
    style: 'Professional & Trustworthy',
    keywords: ['plumber', 'plumbing', 'electrician', 'electrical', 'cleaner', 'cleaning', 'handyman', 'trade', 'repair', 'service', 'local', 'contractor'],
    color: '#3b82f6', // Blue
  },
  {
    id: 'restaurant',
    name: 'Restaurant & Café',
    description: 'Warm, appetizing design for food businesses. Showcases menus, atmosphere, and makes booking easy.',
    style: 'Warm & Inviting',
    keywords: ['restaurant', 'cafe', 'coffee', 'food', 'menu', 'dining', 'bar', 'pub', 'bakery', 'catering', 'takeaway', 'delivery'],
    color: '#f59e0b', // Amber
  },
  {
    id: 'creative',
    name: 'Creative Portfolio',
    description: 'Minimal, image-focused design for photographers, designers, and artists. Let your work shine.',
    style: 'Minimal & Visual',
    keywords: ['photographer', 'photography', 'designer', 'design', 'artist', 'creative', 'portfolio', 'gallery', 'studio', 'freelance', 'visual'],
    color: '#8b5cf6', // Purple
  },
  {
    id: 'professional',
    name: 'Professional Service',
    description: 'Corporate, credibility-focused design for accountants, consultants, and business services.',
    style: 'Corporate & Credible',
    keywords: ['accountant', 'accounting', 'consultant', 'consulting', 'lawyer', 'legal', 'finance', 'business', 'agency', 'corporate', 'professional'],
    color: '#10b981', // Green
  },
];

export function findMatchingTemplate(input: string): Template {
  const lowercaseInput = input.toLowerCase();

  for (const template of templates) {
    for (const keyword of template.keywords) {
      if (lowercaseInput.includes(keyword)) {
        return template;
      }
    }
  }

  // Default to local service if no match
  return templates[0];
}
