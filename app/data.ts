export const business = {
  name: "All Borough Pest Control",
  phone: "201-292-3456",
  phoneHref: "tel:12012923456",
  address: "105 Storms Avenue, Jersey City, NJ 07306",
  serviceArea:
    "Jersey City, Hudson County, and nearby New Jersey communities.",
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  signs: string[];
  process: string[];
  prevention: string[];
};

export const featuredServices: Service[] = [
  {
    slug: "general-pest-control",
    title: "General Pest Control",
    summary:
      "Routine treatment and prevention for ants, spiders, roaches, silverfish, earwigs, and other crawling insects.",
    signs: ["Live insects indoors", "Droppings or shed skins", "Activity around kitchens, baths, basements, or utility lines"],
    process: ["Inspect interior and exterior activity areas", "Treat active zones and common entry paths", "Set a prevention plan for recurring pressure"],
    prevention: ["Seal small cracks and gaps", "Reduce moisture and clutter", "Store food in sealed containers"],
  },
  {
    slug: "termite-control",
    title: "Termite Control",
    summary:
      "Termite inspections, liquid treatments, bait systems, preventative treatments, and damage assessments.",
    signs: ["Mud tubes on walls or foundations", "Soft or blistering wood", "Discarded wings near windows or doors"],
    process: ["Inspect accessible wood, foundation, and moisture zones", "Recommend liquid or bait-system treatment", "Monitor activity with annual protection options"],
    prevention: ["Keep soil and mulch below siding", "Fix leaks quickly", "Remove wood-to-ground contact"],
  },
  {
    slug: "rodent-control",
    title: "Rodent Control",
    summary:
      "Mouse and rat removal, trapping, baiting, entry-point inspection, and ongoing monitoring.",
    signs: ["Droppings near walls or cabinets", "Scratching in walls or ceilings", "Gnaw marks, odors, or damaged packaging"],
    process: ["Identify travel paths and entry points", "Place traps or bait stations appropriately", "Recommend sealing accessible openings"],
    prevention: ["Close gaps around pipes and doors", "Keep trash sealed", "Trim vegetation away from structures"],
  },
  {
    slug: "bed-bug-treatment",
    title: "Bed Bug Treatment",
    summary:
      "Inspections, chemical treatments, heat treatments, mattress and furniture treatment, and follow-up visits.",
    signs: ["Bites after sleeping", "Dark spotting on seams or bedding", "Live bugs around mattresses, sofas, or baseboards"],
    process: ["Inspect bedrooms and resting areas", "Treat furniture, seams, cracks, and harborage points", "Schedule follow-up where needed"],
    prevention: ["Inspect luggage after travel", "Use mattress encasements", "Avoid moving infested items through the home"],
  },
  {
    slug: "mosquito-control",
    title: "Mosquito Control",
    summary:
      "Seasonal yard treatments, breeding-site reduction, barrier sprays, and recurring mosquito plans.",
    signs: ["Bites in shaded yard areas", "Standing water nearby", "Heavy activity at dusk or after rain"],
    process: ["Inspect breeding and resting sites", "Apply targeted barrier treatments", "Set recurring warm-weather service intervals"],
    prevention: ["Dump standing water weekly", "Clear clogged gutters", "Keep grass and shrubs maintained"],
  },
  {
    slug: "cockroach-control",
    title: "Cockroach Control",
    summary:
      "Treatment for German, American, Oriental, and other cockroach species, with follow-up and prevention options.",
    signs: ["Roaches seen at night", "Pepper-like droppings", "Egg cases or oily odor"],
    process: ["Identify species and source areas", "Use targeted baiting and crack-and-crevice treatments", "Return for follow-up on heavier infestations"],
    prevention: ["Clean grease and food residue", "Repair leaks", "Reduce cardboard and hiding areas"],
  },
  {
    slug: "ant-control",
    title: "Ant Control",
    summary:
      "Identification and treatment of carpenter ants, fire ants, pavement ants, sugar ants, and indoor infestations.",
    signs: ["Trails along counters or walls", "Piles of sawdust-like material", "Ant activity around damp wood or pavement cracks"],
    process: ["Identify ant species and nesting behavior", "Treat trails, nests, and exterior pressure points", "Use follow-up prevention for recurring colonies"],
    prevention: ["Seal exterior cracks", "Trim branches from the structure", "Remove crumbs and sticky spills"],
  },
  {
    slug: "commercial-pest-control",
    title: "Commercial Pest Control",
    summary:
      "Recurring inspections, monitoring, documentation, discreet visits, emergency response, and industry-specific compliance support.",
    signs: ["Customer or tenant complaints", "Evidence in storage or service areas", "Recurring pest activity despite cleaning"],
    process: ["Assess the facility and risk zones", "Build a service schedule with documentation", "Monitor, treat, and adjust based on findings"],
    prevention: ["Maintain sanitation logs", "Control receiving and waste areas", "Seal doors, docks, and utility penetrations"],
  },
  {
    slug: "pest-exclusion",
    title: "Pest Exclusion",
    summary:
      "Entry-point sealing and prevention work that helps keep insects and rodents from returning after treatment.",
    signs: ["Gaps around pipes, vents, or doors", "Rodent activity returning after trapping", "Pests entering from basements, attics, or crawl spaces"],
    process: ["Inspect accessible entry points", "Seal practical openings with durable materials", "Pair exclusion with treatment and monitoring"],
    prevention: ["Install door sweeps", "Screen vents", "Repair foundation and utility gaps"],
  },
  {
    slug: "pest-inspections",
    title: "Pest Inspections",
    summary:
      "Interior and exterior inspections for homeowners, landlords, property managers, and businesses that need clear next steps.",
    signs: ["Unidentified droppings or damage", "Activity before buying, renting, or renovating", "Recurring issues without a clear source"],
    process: ["Inspect accessible rooms and exterior areas", "Identify likely pest, entry, and moisture issues", "Provide treatment or prevention recommendations"],
    prevention: ["Schedule seasonal checks", "Address moisture and sanitation issues", "Document changes in pest activity"],
  },
];

export const coreServices = [
  "Spider Control",
  "Wasp, Hornet, and Bee Control",
  "Flea and Tick Control",
  "Pantry Pest Treatment",
  "Fly, Moth, and Beetle Control",
  "Crawl-Space and Attic Pest Treatment",
  "Dead-Animal Removal",
  "Odor Treatment and Sanitation",
  "Lawn and Ornamental Pest Treatment",
  "Wildlife Removal Referrals",
];

export const plans = [
  ["One-Time Pest Treatment", "For a specific, isolated pest problem that needs targeted service."],
  ["Quarterly Pest Protection", "Regular exterior and interior service throughout the year."],
  ["Monthly Commercial Service", "Ongoing inspections, monitoring, treatment, and service documentation."],
  ["Seasonal Mosquito or Tick Plan", "Recurring warm-weather treatments for yards and outdoor spaces."],
  ["Termite Protection Plan", "Annual inspections and ongoing monitoring for termite risk."],
  ["Rodent Exclusion Package", "Removal plus sealing of accessible entry points."],
];

export const commercialSegments = [
  "Restaurants and food-service businesses",
  "Apartment buildings and property managers",
  "Offices",
  "Warehouses",
  "Retail stores",
  "Hotels",
  "Schools and daycare facilities",
  "Healthcare facilities",
  "Manufacturing sites",
  "Construction sites",
];
