import { asset } from '../utils/assets';

export const projectsData = [
  {
    id: 'debris-removal-tx',
    title: 'Debris Removal',
    category: 'Debris Removal',
    location: 'Beaumont, TX',
    beforeImage: asset('/images/project-debris-before.jpg'),
    afterImage: asset('/images/project-debris-after.jpg'),
    duration: '4 Hours',
    debrisWeight: '3.8 Tons',
    description: 'Complete removal of storm debris, rotting timber framing, discarded roofing sheets, and household junk following severe weather.',
    results: 'Lot 100% swept and prepped for new perimeter fence installation with zero damage to adjacent structures.'
  },
  {
    id: 'property-cleanup-tx',
    title: 'Property Cleanup',
    category: 'Property Cleanup',
    location: 'Lumberton, TX',
    beforeImage: asset('/images/project-property-before.jpg'),
    afterImage: asset('/images/project-property-after.jpg'),
    duration: '1 Full Day',
    debrisWeight: '7.2 Tons',
    description: 'Foreclosed commercial property clearing consisting of dilapidated outbuilding remnants, metal scraps, high brush, and accumulated trash piles.',
    results: 'Turned an overgrown eyesore into a clean, level, marketable 1.5-acre parcel ready for commercial development.'
  },
  {
    id: 'material-delivery-tx',
    title: 'Material Delivery',
    category: 'Material Delivery',
    location: 'Port Arthur, TX',
    beforeImage: asset('/images/project-material-before.jpg'),
    afterImage: asset('/images/project-material-after.jpg'),
    duration: '2 Hours',
    debrisWeight: '18 Tons Delivered',
    description: 'Subgrade prep and 18 tons of crushed limestone delivery with precision tailgate spreading for a heavy equipment access lane.',
    results: 'Transformed a rutted muddy ingress into a solid, all-weather high-traffic driveway that supports heavy trailers.'
  },
  {
    id: 'construction-cleanup-houston',
    title: 'Commercial Site Clearing',
    category: 'Construction Cleanup',
    location: 'Houston, TX',
    beforeImage: asset('/images/service-construction.jpg'),
    afterImage: asset('/images/project-property-after.jpg'),
    duration: '2 Days',
    debrisWeight: '14.5 Tons',
    description: 'Post-structural demo waste extraction for a multi-family framing project including concrete footers and scrap lumber.',
    results: 'Jobsite passed OSHA compliance inspection with honors; general contractor retained Baty Services for phase 2.'
  }
];
