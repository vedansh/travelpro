export const destinations = [
  {
    id: 1,
    name: 'Santorini',
    country: 'Greece',
    flag: '🇬🇷',
    region: 'europe',
    days: 2,
    tags: ['Romance', 'Views'],
    img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=85',
    featured: true,
  },
  {
    id: 2,
    name: 'Kyoto',
    country: 'Japan',
    flag: '🇯🇵',
    region: 'asia',
    days: 2,
    tags: ['Culture', 'Food'],
    img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 3,
    name: 'Marrakech',
    country: 'Morocco',
    flag: '🇲🇦',
    region: 'africa',
    days: 2,
    tags: ['Markets', 'Culture'],
    img: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 4,
    name: 'Amalfi Coast',
    country: 'Italy',
    flag: '🇮🇹',
    region: 'europe',
    days: 2,
    tags: ['Coastal', 'Scenic'],
    img: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 5,
    name: 'Bali',
    country: 'Indonesia',
    flag: '🇮🇩',
    region: 'asia',
    days: 2,
    tags: ['Adventure', 'Wellness'],
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=85',
  },
];

export const filters = [
  { label: 'All', value: 'all' },
  { label: 'Europe', value: 'europe' },
  { label: 'Asia', value: 'asia' },
  { label: 'Africa', value: 'africa' },
  { label: 'Americas', value: 'americas' },
];

export const steps = [
  {
    icon: '🌍',
    num: '01',
    title: 'We Scout the World',
    desc: 'Our system scans thousands of reviews, travel blogs, and local expert guides to surface the very best each destination has to offer.',
  },
  {
    icon: '✨',
    num: '02',
    title: 'We Curate & Craft',
    desc: 'Human experts refine every pick and shape tight 1–2 day itineraries designed to pack in the most memorable moments.',
  },
  {
    icon: '🗺️',
    num: '03',
    title: 'You Explore',
    desc: 'Browse curated destinations, grab your itinerary, and go — confident that every stop is worth your time.',
  },
];
