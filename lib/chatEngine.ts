import { findMatchingTemplate, Template } from '@/data/templates';

export interface ChatResponse {
  message: string;
  template: Template;
  priceEstimate: string;
  priceValue: number | null;
  features: string[];
}

interface PriceResult {
  estimate: string;
  value: number | null;
  tier: 'landing' | 'multipage' | 'custom';
}

function detectPriceTier(input: string): PriceResult {
  const lowercaseInput = input.toLowerCase();

  // Custom quote triggers
  const customKeywords = ['shop', 'ecommerce', 'e-commerce', 'store', 'booking', 'app', 'application', 'complex', 'custom', 'advanced', 'database', 'login', 'user accounts'];
  for (const keyword of customKeywords) {
    if (lowercaseInput.includes(keyword)) {
      return { estimate: 'Custom Quote', value: null, tier: 'custom' };
    }
  }

  // Multi-page triggers
  const multipageKeywords = ['business', 'company', 'multiple pages', 'multi-page', 'about us', 'services page', 'team page', 'full website', 'complete website', 'professional'];
  for (const keyword of multipageKeywords) {
    if (lowercaseInput.includes(keyword)) {
      return { estimate: '£300', value: 300, tier: 'multipage' };
    }
  }

  // Landing page triggers
  const landingKeywords = ['landing', 'single page', 'one page', 'simple', 'basic', 'quick'];
  for (const keyword of landingKeywords) {
    if (lowercaseInput.includes(keyword)) {
      return { estimate: '£150', value: 150, tier: 'landing' };
    }
  }

  // Default to multi-page for most businesses
  return { estimate: '£300', value: 300, tier: 'multipage' };
}

function detectFeatures(input: string): string[] {
  const features: string[] = [];
  const lowercaseInput = input.toLowerCase();

  const featureMap: Record<string, string> = {
    'contact': 'Contact form',
    'form': 'Contact form',
    'gallery': 'Image gallery',
    'photos': 'Image gallery',
    'portfolio': 'Portfolio section',
    'menu': 'Menu display',
    'booking': 'Booking system',
    'map': 'Google Maps',
    'location': 'Google Maps',
    'testimonial': 'Testimonials section',
    'review': 'Reviews section',
    'blog': 'Blog section',
    'social': 'Social media links',
  };

  for (const [keyword, feature] of Object.entries(featureMap)) {
    if (lowercaseInput.includes(keyword) && !features.includes(feature)) {
      features.push(feature);
    }
  }

  // Add default features based on tier
  if (features.length === 0) {
    features.push('Contact form', 'Mobile responsive', 'SEO optimised');
  }

  return features;
}

function generateMessage(template: Template, price: PriceResult): string {
  const businessType = template.name.toLowerCase();

  if (price.tier === 'custom') {
    return `Based on what you've described, it sounds like you need a more advanced solution. For projects involving e-commerce, booking systems, or custom functionality, we'd love to chat about your specific needs and provide a tailored quote.\n\nHere's a ${businessType} template that might inspire the design direction:`;
  }

  if (price.tier === 'landing') {
    return `A focused landing page sounds perfect for what you need! For ${price.estimate}, we can create a stunning single-page site that converts visitors into customers.\n\nHere's a ${businessType} template that matches your vibe:`;
  }

  return `Great! A professional multi-page website would be perfect for your ${businessType.includes('service') ? 'business' : businessType}. For ${price.estimate}, you'll get a complete website with multiple pages, contact form, and everything you need to impress your customers.\n\nHere's a template that could work well:`;
}

export function processChat(input: string): ChatResponse {
  const template = findMatchingTemplate(input);
  const price = detectPriceTier(input);
  const features = detectFeatures(input);
  const message = generateMessage(template, price);

  return {
    message,
    template,
    priceEstimate: price.estimate,
    priceValue: price.value,
    features,
  };
}
