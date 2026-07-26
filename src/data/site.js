export const site = {
  name: 'Immaculate Drywall and Construction',
  shortName: 'Immaculate Walls',
  tagline: 'Building dreams one home at a time.',
  subTagline: 'Quality we guarantee, at prices you can afford.',
  phone: '651-508-5096',
  email: 'immaculatewalls@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=100065355915790',
  serviceArea: 'Northern Illinois and select Wisconsin locations',
};

export const services = [
  {
    title: 'Drywall Hanging & Finishing',
    description: 'Full drywall installation and finishing for new construction, additions, and remodels.',
    icon: 'drywall',
  },
  {
    title: 'Drywall Repair',
    description: 'Patchwork, water damage, holes, and cracks repaired with a seamless finish.',
    icon: 'repair',
  },
  {
    title: 'Framing',
    description: 'Wall and structural framing for new builds, additions, and interior remodels.',
    icon: 'framing',
  },
  {
    title: 'Painting',
    description: 'Interior and exterior painting, done neat and done right.',
    icon: 'painting',
  },
  {
    title: 'Textures & Knockdown',
    description: 'Knockdown, crow’s foot, orange peel, and other texture finishes to match existing walls or ceilings.',
    icon: 'texture',
  },
  {
    title: 'Drop Ceilings',
    description: 'Drop ceiling installation for basements, offices, and remodels.',
    icon: 'ceiling',
  },
  {
    title: 'Baseboards & Trim',
    description: 'Baseboard and trim install to finish a room out clean.',
    icon: 'trim',
  },
  {
    title: 'Flooring',
    description: 'Flooring installation to round out a full remodel from the studs up.',
    icon: 'flooring',
  },
  {
    title: 'New Construction',
    description: 'Full-service drywall and finishing partner for new home builds.',
    icon: 'construction',
  },
];

export const testimonials = [
  {
    quote: 'Immaculate Drywall and painting finished up my garage addition with drywall and paint. Turned out great. Highly recommend.',
    name: 'Brad Garas',
  },
  {
    quote: 'Kyle did an outstanding job on a drywall repair we needed! He was prompt, friendly, very neat, meticulous in his work! HIGHLY recommend him!',
    name: 'Deb Johnson',
  },
  {
    quote: 'They recently did my drywall and painting, and I’m very satisfied with the results. They were flexible, professional, and willing to work with me to make sure everything turned out exactly how I wanted. Their attention to detail and commitment to the final result really stood out.',
    name: 'El Kwitondq',
  },
];

export const galleryImages = [
  {
    src: '/images/gallery/framing-and-rough-in.png',
    alt: 'Drywall hanging in progress on a room addition',
    category: 'Drywall',
  },
  {
    src: '/images/gallery/insulation-and-framing.png',
    alt: 'Framing and insulation before drywall install',
    category: 'Framing',
  },
  {
    src: '/images/gallery/texture-spray-application.png',
    alt: 'Spraying knockdown texture on an interior wall',
    category: 'Painting',
  },
  {
    src: '/images/gallery/finished-drywall-ceiling.png',
    alt: 'Finished, taped and sanded drywall ceiling',
    category: 'Drywall',
  },
];

// Each pair must be the same job/room, shot from roughly the same angle —
// otherwise the comparison misrepresents the work. Leave empty until real
// matched photos are available.
// Example shape:
// { beforeSrc: '/images/before-after/kitchen-before.png', afterSrc: '/images/before-after/kitchen-after.png', beforeAlt: '...', afterAlt: '...', label: 'Kitchen Remodel' }
export const beforeAfterPairs = [];
