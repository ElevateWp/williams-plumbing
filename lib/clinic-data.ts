export interface DentistProfile {
  id: string; slug: string; name: string; title: string; qualifications: string;
  specialization: string; experienceYears: number; bio: string; philosophy: string;
  education: string[]; memberships: string[]; specialties: string[]; image: string; warmImage: string;
}

export interface ServiceDetail {
  slug: string; name: string; navLabel: string; tagline: string; shortDescription: string;
  clinicalExplanation: string; whoNeeds: string[]; benefits: string[];
  indications: { condition: string; explanation: string }[];
  procedureSteps: { stepNumber: number; title: string; duration: string; description: string; clinicalDetails: string }[];
  recoveryTimeline: { period: string; expectedSensations: string; careProtocol: string }[];
  costTransparency: { baseRange: string; factors: string[]; whatIsIncluded: string[]; note: string };
  beforeAfterCase: { category: string; clinicalContext: string; beforeLabel: string; afterLabel: string; beforeImage: string; afterImage: string; timeframe: string };
  assignedDentistId: string; faqs: { question: string; answer: string; relatedSlug?: string }[];
}

export interface ClinicInformation {
  name: string; legalName: string; tagline: string;
  primaryLocation: { street: string; suite: string; city: string; state: string; postalCode: string; country: string; directions: string; landmarks: string; coordinates?: { lat: number; lng: number } };
  contact: { phone: string; emergencyPhone: string; email?: string; whatsapp: string; website?: string };
  identityHighlights: string[]; schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[];
  verifiedStats: { value: number; suffix: string; label: string; description: string }[]; accreditations: string[];
}

export const CLINIC_INFO: ClinicInformation = {
  name: 'Williams Plumbing Port Fairy', legalName: 'Williams Plumbing Port Fairy',
  tagline: 'Plumbing and property projects in Port Fairy and nearby areas.',
  primaryLocation: { street: '84 Regent St', suite: '', city: 'Port Fairy', state: 'VIC', postalCode: '3284', country: 'AU', directions: '84 Regent St, Port Fairy VIC 3284, Australia', landmarks: 'Port Fairy and surrounding areas' },
  contact: { phone: '+61 447 224 522', emergencyPhone: '+61 447 224 522', whatsapp: '+61 447 224 522' },
  identityHighlights: ['General plumbing and repairs', 'Bathroom refits', 'Hot water system replacement', 'Custom outdoor showers', 'Split-system air conditioning work', 'Pergola roofing'],
  schedule: [
    { day: 'Every day', hours: 'Open 24 hours' },
  ],
  verifiedStats: [
    { value: 5, suffix: '.0', label: 'Google rating', description: 'Based on 10 customer reviews.' },
    { value: 10, suffix: '', label: 'Google reviews', description: 'Customer feedback shared on Google.' },
  ], accreditations: [],
};

const teamId = 'williams-plumbing-team';
export const DENTISTS: DentistProfile[] = [{
  id: teamId, slug: 'aaron-williams', name: 'Aaron Williams', title: 'Plumber',
  qualifications: '', specialization: 'Port Fairy plumbing and home projects', experienceYears: 0,
  bio: 'Aaron from Williams Plumbing helps Port Fairy households with plumbing jobs and property projects, from bathroom work and hot water systems to custom outdoor showers and pergola roofing.',
  philosophy: 'Efficient, professional work with clear communication and attention to detail.', education: [], memberships: [],
  specialties: CLINIC_INFO.identityHighlights,
  image: '/images/plumbing-technician.jpg', warmImage: '/images/plumbing-repair.jpg',
}];

const photos = [
  '/images/plumbing-radiator.jpg', '/images/plumbing-repair.jpg', '/images/plumbing-hot-water.jpg',
  '/images/plumbing-pipes.jpg', '/images/plumbing-technician.jpg', '/images/roofb3-1.jpg',
  '/images/roof-with-tiles.png', '/images/plumbing-pipes.jpg', '/images/plumbing-hot-water.jpg',
  '/images/plumbing-technician.jpg', '/images/roof-without-tiles.png', '/images/roofb3-1.jpg',
];

const serviceSpecs = [
  { slug: 'plumbing-repairs', name: 'General Plumbing & Repairs', tagline: 'Practical help with plumbing jobs around your home.', description: 'Contact Aaron to discuss general plumbing work and repairs for your Port Fairy property.', needs: ['A plumbing repair', 'A kitchen renovation connection or reconnection', 'Plumbing work around the home'], photo: 0 },
  { slug: 'bathroom-renovations', name: 'Bathroom Refits', tagline: 'Careful plumbing work for your bathroom project.', description: 'Discuss a bathroom refit, fixtures and the plumbing work needed to complete your renovation.', needs: ['A planned bathroom refit', 'Plumbing for a bathroom renovation', 'Help coordinating bathroom plumbing work'], photo: 1 },
  { slug: 'hot-water-systems', name: 'Hot Water System Replacement', tagline: 'Hot water system replacement for your home.', description: 'Arrange a conversation about replacing a hot water system and the options for your household.', needs: ['A hot water system replacement', 'A hot water unit that needs attention', 'Advice about a replacement system'], photo: 2 },
  { slug: 'outdoor-showers', name: 'Outdoor Showers', tagline: 'Custom outdoor showers built for coastal living.', description: 'From a hand-built shower to a timber frame installation, discuss an outdoor shower for rinsing off after a surf or ocean swim.', needs: ['A custom outdoor shower', 'A shower fitted to a timber frame', 'An outdoor rinse-off area'], photo: 4 },
  { slug: 'split-system-air-conditioning', name: 'Split-System Air Conditioning', tagline: 'Discuss split-system installation, disconnection and relocation.', description: 'Aaron has helped customers with split-system installation and air-conditioner disconnection and relocation. Contact him to discuss your project.', needs: ['A split-system installation', 'Disconnecting or relocating an air conditioner', 'Air-conditioning work as part of a renovation'], photo: 3 },
  { slug: 'pergola-roofing', name: 'Pergola Roofing', tagline: 'Roofing for a newly built pergola.', description: 'Discuss roofing for a new pergola and the materials and scope that suit your outdoor space.', needs: ['A roof for a newly built pergola', 'Pergola roofing options', 'Roofing work for an outdoor area'], photo: 5 },
];

export const SERVICES: ServiceDetail[] = serviceSpecs.map((s) => ({
  slug: s.slug, name: s.name, navLabel: s.name, tagline: s.tagline,
  shortDescription: s.description, clinicalExplanation: s.description,
  whoNeeds: s.needs, benefits: ['Talk through the work with the local team', 'Discuss the scope and options for your property', 'Request a quote before work begins'],
  indications: s.needs.map((condition) => ({ condition, explanation: `Contact the team to discuss ${condition.toLowerCase()} and suitable next steps for your property.` })),
  procedureSteps: [
    { stepNumber: 1, title: 'Tell us what you need', duration: 'Initial conversation', description: `Share the ${s.name.toLowerCase()} work you have in mind.`, clinicalDetails: 'Aaron will ask about your property and the work required.' },
    { stepNumber: 2, title: 'Discuss the scope', duration: 'By arrangement', description: 'Talk through the work, available options and a quote.', clinicalDetails: 'Scope, price and timing are discussed before work begins.' },
    { stepNumber: 3, title: 'Complete the agreed work', duration: 'As agreed', description: 'Aaron carries out the work agreed for your property.', clinicalDetails: 'Timing depends on the property and the work required.' },
    { stepNumber: 4, title: 'Review the work', duration: 'On completion', description: 'Review the completed work and ask any follow-up questions.', clinicalDetails: 'Aaron can explain the work completed at your property.' },
  ],
  recoveryTimeline: [
    { period: 'Before work', expectedSensations: 'Discuss the issue, access and scope with the team.', careProtocol: 'Share your address, what you have noticed and any access details.' },
    { period: 'During work', expectedSensations: 'Work duration depends on the property and agreed scope.', careProtocol: 'Follow the team’s guidance around the work area.' },
    { period: 'After work', expectedSensations: 'Review the completed work.', careProtocol: 'Contact the team if you have questions about the work completed.' },
  ],
  costTransparency: { baseRange: 'Request a quote for your property.', factors: ['Type and scope of work', 'Parts and materials required', 'Property access and conditions'], whatIsIncluded: ['Discussion of the work', 'Agreed scope and quote', 'Updates about the work'], note: 'Price and timing can be confirmed after the team understands the work required.' },
  beforeAfterCase: { category: s.name, clinicalContext: 'The work required depends on the property and agreed scope.', beforeLabel: 'Project reference', afterLabel: 'Project reference', beforeImage: photos[s.photo], afterImage: photos[(s.photo + 1) % photos.length], timeframe: 'Project timing varies' },
  assignedDentistId: teamId,
  faqs: [
    { question: `What does ${s.name.toLowerCase()} involve?`, answer: `${s.description} The team can discuss the work and suitable next steps.` },
    { question: 'What affects the quote?', answer: 'The type and scope of work, materials required and property access can affect the quote.' },
    { question: 'How long will the work take?', answer: 'Timing depends on the property and agreed work. The team can discuss this with you.' },
    { question: 'How can I prepare?', answer: 'Share what you have noticed and any access details. If there is an active water leak, turn off the water supply if you can do so safely.' },
    { question: 'How do I arrange a quote?', answer: `Call Williams Plumbing Port Fairy on ${CLINIC_INFO.contact.phone} to discuss your work.` },
  ],
}));

export interface EmergencyCondition { id: string; title: string; urgency: 'Immediate (0–2 hours)' | 'Same-Day (2–6 hours)' | 'Urgent (Within 24 hours)'; symptoms: string[]; immediateAction: string[]; clinicTreatment: string; }
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [
  { id: 'active-leak', title: 'Active water leak', urgency: 'Same-Day (2–6 hours)', symptoms: ['Water escaping from a pipe or fitting', 'A growing wet patch'], immediateAction: ['Keep people and belongings away from the water.', 'If safe, turn off the water at the isolation valve or mains tap.', 'Keep clear of electrical equipment affected by water.'], clinicTreatment: 'Call Williams Plumbing Port Fairy to discuss the issue and next steps.' },
  { id: 'hot-water', title: 'Hot water system issue', urgency: 'Urgent (Within 24 hours)', symptoms: ['No hot water', 'A leak around the hot water unit'], immediateAction: ['Keep clear of hot water or steam escaping from the unit.', 'Do not touch wet electrical equipment.', 'If safe, follow the manufacturer’s instructions to isolate the unit.'], clinicTreatment: 'Contact the team to discuss your hot water service.' },
];

export interface BlogPost { slug: string; title: string; category: string; readTime: string; publishDate: string; lastUpdated: string; authorId: string; excerpt: string; leadImage: string; relatedServiceSlug: string; content: { intro: string; sections: { heading: string; body: string }[]; faqs?: { question: string; answer: string }[] }; }
export const BLOG_POSTS: BlogPost[] = [
  { slug: 'planning-a-bathroom-refit', title: 'Planning a bathroom refit', category: 'Bathroom Refits', readTime: '3 min read', publishDate: '2026-10-21', lastUpdated: '2026-10-21', authorId: teamId, excerpt: 'A few practical details to discuss when preparing for a bathroom refit.', leadImage: photos[1], relatedServiceSlug: 'bathroom-renovations', content: { intro: 'A bathroom refit involves coordinating fixtures, access and plumbing work. Share your plans and the existing layout so the scope can be discussed before work begins.', sections: [{ heading: 'Share your plans', body: 'Describe the bathroom, what you would like changed and any fixtures you have selected.' }, { heading: 'Confirm the scope', body: 'Discuss the agreed work, price and timing before the project starts.' }] } },
  { slug: 'choosing-an-outdoor-shower', title: 'Planning an outdoor shower', category: 'Outdoor Showers', readTime: '3 min read', publishDate: '2026-10-21', lastUpdated: '2026-10-21', authorId: teamId, excerpt: 'Consider the location, frame and finish for an outdoor shower at home.', leadImage: photos[4], relatedServiceSlug: 'outdoor-showers', content: { intro: 'An outdoor shower can make it easier to rinse off after a surf or swim. Think about its location, privacy, water connections and the structure it will be fitted to.', sections: [{ heading: 'Choose a suitable position', body: 'Consider access, privacy and how the shower will connect to water and drainage.' }, { heading: 'Talk through the build', body: 'Discuss the frame, fixtures and finish so the work can be scoped for your property.' }] } },
  { slug: 'hot-water-system-replacement', title: 'Preparing for a hot water system replacement', category: 'Hot Water Systems', readTime: '3 min read', publishDate: '2026-10-21', lastUpdated: '2026-10-21', authorId: teamId, excerpt: 'Information to have ready when discussing a hot water system replacement.', leadImage: photos[2], relatedServiceSlug: 'hot-water-systems', content: { intro: 'When arranging a hot water system replacement, note the existing unit and any issues you have noticed. The right options depend on your household and property.', sections: [{ heading: 'Describe the existing system', body: 'Share what type of unit you have, where it is located and what has prompted the replacement.' }, { heading: 'Review options and timing', body: 'Ask about the system options, work involved, quote and timing before deciding how to proceed.' }] } },
  { slug: 'pergola-roofing-project', title: 'Adding a roof to a pergola', category: 'Pergola Roofing', readTime: '3 min read', publishDate: '2026-10-21', lastUpdated: '2026-10-21', authorId: teamId, excerpt: 'What to discuss when adding a roof to a newly built pergola.', leadImage: photos[5], relatedServiceSlug: 'pergola-roofing', content: { intro: 'Roofing a new pergola means considering the structure, coverage and materials. Share the size and construction details when discussing the project.', sections: [{ heading: 'Describe the structure', body: 'Provide details about the pergola dimensions, frame and site access.' }, { heading: 'Agree on the work', body: 'Discuss material options, scope, quote and timing before the roofing work begins.' }] } },
];
