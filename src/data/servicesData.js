import { asset } from '../utils/assets';

export const coreServices = [
  {
    id: 'debris-junk-removal',
    title: 'DEBRIS & JUNK REMOVAL',
    subtitle: 'Residential & Commercial Waste Clearout',
    icon: 'trash',
    image: asset('/images/service-debris.jpg'),
    description: 'We remove unwanted items, debris and junk so you can enjoy a cleaner, safer space.',
    longDescription: 'From old furniture, appliances, and renovation waste to estate cleanouts and backyard piles, Baty Services handles heavy hauling so you never lift a finger. Fast, full-service loading and environmentally responsible disposal across Texas.',
    features: [
      'Household furniture & appliances removal',
      'Yard waste, tree limbs & storm clutter',
      'Estate, garage & attic deep cleanouts',
      'Responsible recycling & landfill diversion',
      'Same-day & next-day loading available'
    ],
    pricingGuide: 'Starting from $95 for single items / $275 - $595 for multi-ton trailer loads',
    link: '/services#debris-junk-removal'
  },
  {
    id: 'construction-cleanup',
    title: 'CONSTRUCTION & PROPERTY CLEANUP',
    subtitle: 'Jobsite & Contractor Waste Hauling',
    icon: 'hammer',
    image: asset('/images/service-construction.jpg'),
    description: 'Full cleanup for construction sites, renovations and properties of all sizes.',
    longDescription: 'Keep your job site compliant, OSHA-safe, and running on schedule. We partner with general contractors, builders, and property flippers to provide routine dumpster swaps, post-demolition debris hauling, and detailed final-sweep clearing.',
    features: [
      'Demolition debris (drywall, timber, tile, roofing)',
      'Scrap metal, framing timber & pallet clearing',
      'Routine builder dump runs & container swaps',
      'Post-remodel rough & final cleanup',
      'Fully insured with contractor priority dispatch'
    ],
    pricingGuide: 'Contractor bulk rates & per-haul flat pricing available',
    link: '/services#construction-cleanup'
  },
  {
    id: 'material-delivery',
    title: 'DIRT, GRAVEL & MATERIAL DELIVERY',
    subtitle: 'Aggregate & Fill Sourcing Direct to Site',
    icon: 'gravel',
    image: asset('/images/service-dirt.jpg'),
    description: 'We deliver dirt, gravel and other materials to keep your project moving forward.',
    longDescription: 'Need aggregate for a new driveway, commercial pad, drainage fix, or landscaping grading? We haul and tailgate-spread premium crushed limestone, bank sand, topsoil, river rock, and road base right to your residential or commercial site.',
    features: [
      'Crushed limestone (#57, base rock, oversize)',
      'Topsoil, garden soil & enriched fill dirt',
      'Bank sand, washed sand & mason sand',
      'Driveway tailgating & precision pile dumping',
      'Available in 5 to 20-ton tandem dump truck loads'
    ],
    pricingGuide: 'Priced per ton / yard with upfront delivery transit calculation',
    link: '/services#material-delivery'
  },
  {
    id: 'residential-commercial',
    title: 'RESIDENTIAL & COMMERCIAL',
    subtitle: 'Tailored Services for Every Property Type',
    icon: 'building',
    image: asset('/images/service-residential.jpg'),
    description: 'We serve both residential and commercial customers with reliable, professional service.',
    longDescription: 'Whether managing retail cleanouts, warehouse excess inventory, rental turnovers, or single-family home makeovers, our heavy equipment and uniformed crews deliver punctual, spotless execution with zero property damage.',
    features: [
      'Office, retail & warehouse clearances',
      'Apartment complex & HOA bulk trash days',
      'Driveway-safe trucks and turf protection boards',
      'Flexible scheduling to avoid business disruptions',
      'Full invoicing, PO billing & proof-of-work photos'
    ],
    pricingGuide: 'Tailored commercial account quotes & residential flat rates',
    link: '/services#residential-commercial'
  }
];

export const whatWeTake = [
  'Construction & Demolition Debris',
  'Lumber, Plywood & Drywall',
  'Old Furniture, Mattresses & Sofas',
  'Refrigerators, Washers & Dryers',
  'Roofing Shingles & Siding',
  'Fencing & Decking Material',
  'Yard Debris, Stumps & Limbs',
  'Crushed Concrete, Dirt & Stone',
  'Scrap Metal, Steel & Piping',
  'Sheds, Playgrounds & Hot Tubs'
];

export const whatWeCannotTake = [
  'Hazardous chemicals & toxic waste',
  'Biohazard or medical waste',
  'Industrial asbestos insulation',
  'Open paint cans & liquid solvents',
  'Car batteries & motor oils',
  'Explosives or pressurized gas cylinders'
];
