import { Product } from '../types';

export const ALL_PRODUCTS: Product[] = [
  // ==========================================
  // SPICES DIVISION (13 Products)
  // ==========================================
  {
    id: 'spice-01',
    slug: 'red-chilli-powder',
    name: 'Red Chilli Powder',
    division: 'spices-oilseeds',
    category: 'spices',
    shortDescription: 'Vibrant colour and balanced heat.',
    overview:
      'Finely pulverized from dried red chillies, characterized by a uniform deep hue and consistent heat profile suited to spice blends, industrial culinary preparation, and condiment manufacturing.',
    commercialApplications: [
      'Food manufacturing & seasonings',
      'Sauce & curry paste production',
      'Wholesale repackaging & retail distribution',
    ],
    standardPackaging: ['25 kg PP bags', '50 kg multi-layer paper sacks', 'Custom palletized lots'],
    specifications: [
      { label: 'Origin', value: 'India' },
      { label: 'Mesh Size', value: 'Fine powder (standard 40–60 mesh)' },
      { label: 'Form', value: 'Dry ground powder' },
    ],
    image: '/src/assets/images/red_chilli_bulk_1792832370436.jpg',
    featured: true,
  },
  {
    id: 'spice-02',
    slug: 'kashmir-red-chilli',
    name: 'Kashmir Red Chilli',
    division: 'spices-oilseeds',
    category: 'spices',
    shortDescription: 'Deep red colour with mild heat.',
    overview:
      'Whole dried Kashmiri chillies prized for impartation of rich, natural crimson colouring with low to moderate heat level, suitable for extractors and commercial kitchens.',
    commercialApplications: [
      'Natural oleoresin extraction',
      'Gourmet culinary blending',
      'Industrial marinades and gravies',
    ],
    standardPackaging: ['10 kg / 20 kg jute bags', 'Corrugated bulk cartons'],
    specifications: [
      { label: 'Origin', value: 'India' },
      { label: 'Form', value: 'Whole dried with or without stem' },
      { label: 'Colour Value', value: 'High ASTA color' },
    ],
    image: '/src/assets/images/red_chilli_bulk_1792832370436.jpg',
    featured: true,
  },
  {
    id: 'spice-03',
    slug: 'premium-red-chilli',
    name: 'Premium Red Chilli',
    division: 'spices-oilseeds',
    category: 'spices',
    shortDescription: 'Selected, sorted chillies with strong colour and pungency.',
    overview:
      'Graded and sorted whole dry chillies selected for high pungency and distinct deep gloss, ideal for high-heat seasoning powders and commercial extraction.',
    commercialApplications: [
      'Commercial milling',
      'Export bulk trade',
      'Pickle and snack manufacturing',
    ],
    standardPackaging: ['25 kg gunny bags', '40 kg bale packing'],
    specifications: [
      { label: 'Origin', value: 'India' },
      { label: 'Grading', value: 'Machine sorted & hand picked' },
      { label: 'Condition', value: 'Dried whole' },
    ],
    image: '/src/assets/images/spices_division_banner_1792832350716.jpg',
  },
  {
    id: 'spice-04',
    slug: 'chilli-flakes',
    name: 'Chilli Flakes',
    division: 'spices-oilseeds',
    category: 'spices',
    shortDescription: 'Crushed chilli for seasoning, pizza and processing.',
    overview:
      'Uniformly crushed dry chillies retaining balanced proportions of seed and flake for textural visual appeal and rapid heat infusion in savory food applications.',
    commercialApplications: [
      'QSR & pizza seasoning sachets',
      'Bakery & snack seasonings',
      'Tabletop dispensers and institutional packs',
    ],
    standardPackaging: ['10 kg poly pouches', '20 kg master cartons'],
    specifications: [
      { label: 'Origin', value: 'India' },
      { label: 'Flake Size', value: 'Crushed 2–4 mm' },
      { label: 'Visual', value: 'Red flakes with natural golden seeds' },
    ],
    image: '/src/assets/images/spices_sampling_showcase_1792832351883.jpg',
  },
  {
    id: 'spice-05',
    slug: 'cumin-powder',
    name: 'Cumin Powder',
    division: 'spices-oilseeds',
    category: 'spices',
    shortDescription: 'Warm, earthy aroma, finely ground.',
    overview:
      'Milled from cleaned cumin seeds to yield a warm, distinct earthy fragrance and even dispersal in wet or dry formulations.',
    commercialApplications: [
      'Garam masala & curry powder blends',
      'Extruded snack seasoning',
      'Catering & meat rub manufacturing',
    ],
    standardPackaging: ['25 kg craft paper bags', '50 kg woven polypropylene'],
    specifications: [
      { label: 'Origin', value: 'India' },
      { label: 'Form', value: 'Fine powder' },
      { label: 'Aroma', value: 'Characteristic warm aromatic' },
    ],
    image: '/src/assets/images/cumin_seeds_bulk_1792832370398.jpg',
  },
  {
    id: 'spice-06',
    slug: 'cumin-seeds',
    name: 'Cumin Seeds',
    division: 'spices-oilseeds',
    category: 'spices',
    shortDescription: 'Whole, cleaned seeds with strong aroma and natural oils.',
    overview:
      'Cleaned, machine-sorted whole cumin seeds (Cuminum cyminum) offering natural essential oil content and distinct ridged seed structure for domestic wholesale and export trade.',
    commercialApplications: [
      'Bulk wholesale trade',
      'Spice milling facilities',
      'Oil and oleoresin distillation',
    ],
    standardPackaging: ['25 kg / 50 kg PP bags', 'Jute bags for bulk export'],
    specifications: [
      { label: 'Origin', value: 'India (Gujarat / Rajasthan belt)' },
      { label: 'Purity Grades', value: 'Machine Clean / Sortex Clean available' },
      { label: 'Form', value: 'Whole natural seed' },
    ],
    image: '/src/assets/images/cumin_seeds_bulk_1792832370398.jpg',
    featured: true,
  },
  {
    id: 'spice-07',
    slug: 'turmeric-powder',
    name: 'Turmeric Powder',
    division: 'spices-oilseeds',
    category: 'spices',
    shortDescription: 'Rich golden colour with natural flavour.',
    overview:
      'Bright golden turmeric milled from cured dried rhizomes, widely utilized in food production, dairy formulations, beverage mixes, and commercial seasoning bases.',
    commercialApplications: [
      'Commercial curry blending',
      'Natural food colouring agent',
      'Pharmaceutical & nutraceutical raw materials',
    ],
    standardPackaging: ['25 kg double-lined paper bags', '50 kg HDPE bags'],
    specifications: [
      { label: 'Origin', value: 'India' },
      { label: 'Form', value: 'Pulverized fine powder' },
      { label: 'Colour', value: 'Natural deep yellow' },
    ],
    image: '/src/assets/images/turmeric_roots_powder_1792832372306.jpg',
    featured: true,
  },
  {
    id: 'spice-08',
    slug: 'premium-turmeric-powder',
    name: 'Premium Turmeric Powder',
    division: 'spices-oilseeds',
    category: 'spices',
    shortDescription: 'High curcumin content, bright colour and fine texture.',
    overview:
      'Specially graded turmeric powder prepared from selected high-curcumin finger rhizomes, offering heightened color intensity and micro-fine texture for demanding industrial applications.',
    commercialApplications: [
      'Nutraceutical extraction',
      'Premium health food formulations',
      'International spice blending',
    ],
    standardPackaging: ['25 kg vacuum-sealed inner poly sacks in corrugated cartons'],
    specifications: [
      { label: 'Origin', value: 'India' },
      { label: 'Grade', value: 'High curcumin grade' },
      { label: 'Texture', value: 'Extra fine mesh' },
    ],
    image: '/src/assets/images/turmeric_roots_powder_1792832372306.jpg',
  },
  {
    id: 'spice-09',
    slug: 'black-pepper-flakes',
    name: 'Black Pepper Flakes',
    division: 'spices-oilseeds',
    category: 'spices',
    shortDescription: 'Bold pungency and fresh aroma.',
    overview:
      'Coarsely crushed black peppercorns delivering bold sharpness, rich piperine pungency, and clean visual specks in processed meats, cheeses, and rubs.',
    commercialApplications: [
      'Deli meat & sausage manufacturing',
      'Gourmet cheese coating',
      'Marinades and barbecue rubs',
    ],
    standardPackaging: ['15 kg / 25 kg fiber drums with food-grade poly liner'],
    specifications: [
      { label: 'Origin', value: 'India' },
      { label: 'Cut', value: 'Coarse crush / cracked pepper' },
      { label: 'Flavor', value: 'Pungent, warm, aromatic' },
    ],
    image: '/src/assets/images/spices_sampling_showcase_1792832351883.jpg',
  },
  {
    id: 'spice-10',
    slug: 'clove',
    name: 'Clove',
    division: 'spices-oilseeds',
    category: 'spices',
    shortDescription: 'Whole, aromatic buds with strong natural oils.',
    overview:
      'Hand-picked whole flower buds with intact heads and natural reddish-brown stems, recognized for pronounced eugenol content and intense aroma.',
    commercialApplications: [
      'Pharmaceutical and dental compounding',
      'Aroma chemical distillation',
      'Beverage and baking spice formulations',
    ],
    standardPackaging: ['10 kg / 25 kg carton boxes with inner liner'],
    specifications: [
      { label: 'Origin', value: 'India / Sourced trade' },
      { label: 'Form', value: 'Whole dried flower bud with head' },
      { label: 'Characteristic', value: 'High essential oil potential' },
    ],
    image: '/src/assets/images/spices_division_banner_1792832350716.jpg',
  },
  {
    id: 'spice-11',
    slug: 'cinnamon',
    name: 'Cinnamon',
    division: 'spices-oilseeds',
    category: 'spices',
    shortDescription: 'Sweet, warm flavour, available as sticks or bark.',
    overview:
      'Dried aromatic bark available in quill or broken pieces, valued for pleasant sweet-spicy flavour and widespread utilization across confectioneries, teas, and spice extracts.',
    commercialApplications: [
      'Bakery and confectionery ingredients',
      'Tea and beverage blending',
      'Whole spice packaging for retail trade',
    ],
    standardPackaging: ['25 kg bales or carton boxes'],
    specifications: [
      { label: 'Origin', value: 'Traded commodity' },
      { label: 'Format', value: 'Sticks / Quills / Cut bark' },
      { label: 'Profile', value: 'Sweet and woody aromatic' },
    ],
    image: '/src/assets/images/spices_division_banner_1792832350716.jpg',
  },
  {
    id: 'spice-12',
    slug: 'indian-bay-leaves',
    name: 'Indian Bay Leaves',
    division: 'spices-oilseeds',
    category: 'spices',
    shortDescription: 'Fragrant dried leaves (tej patta) with a mild cinnamon-like aroma.',
    overview:
      'Authentic dried tej patta leaves from Cinnamomum tamala exhibiting distinct three-vein botanical patterns and mild clove-cinnamon fragrance, distinct from Mediterranean laurel leaves.',
    commercialApplications: [
      'Biryani and rice premix formulations',
      'Traditional culinary spice mixes',
      'Wholesale catering supply',
    ],
    standardPackaging: ['10 kg / 20 kg compressed bales'],
    specifications: [
      { label: 'Botanical Name', value: 'Cinnamomum tamala' },
      { label: 'Form', value: 'Dried whole leaves' },
      { label: 'Aroma', value: 'Clove and herbal notes' },
    ],
    image: '/src/assets/images/spices_division_banner_1792832350716.jpg',
  },
  {
    id: 'spice-13',
    slug: 'oregano',
    name: 'Oregano',
    division: 'spices-oilseeds',
    category: 'spices',
    shortDescription: 'Aromatic dried herb for food manufacturing and retail.',
    overview:
      'Cleaned and gently crushed dried oregano leaves providing consistent thymol and carvacrol herbaceous aroma for pizza blends, pasta sauces, and processed food seasoning.',
    commercialApplications: [
      'Italian and Mediterranean seasoning lines',
      'Processed cheese and snack manufacturing',
      'Institutional bulk catering packs',
    ],
    standardPackaging: ['10 kg / 15 kg multi-wall craft paper sacks'],
    specifications: [
      { label: 'Form', value: 'Dried crushed leaves / flakes' },
      { label: 'Colour', value: 'Natural pale green' },
      { label: 'Mesh', value: 'Standard herb cut' },
    ],
    image: '/src/assets/images/spices_sampling_showcase_1792832351883.jpg',
  },

  // ==========================================
  // OILSEEDS DIVISION (4 Products)
  // Ensure Black Mustard Seeds is classified under Oilseeds, next to Mustard Seeds!
  // ==========================================
  {
    id: 'oilseed-14',
    slug: 'sesame-seeds',
    name: 'Sesame Seeds',
    division: 'spices-oilseeds',
    category: 'oilseeds',
    shortDescription: 'Cleaned and graded for food and oil extraction.',
    overview:
      'High-oil content sesame seeds meticulously cleaned and graded for commercial oil extraction, tahini manufacturing, and confectionery topping.',
    commercialApplications: [
      'Edible oil pressing',
      'Bakery and biscuit topping',
      'Tahini and confectionery pastes',
    ],
    standardPackaging: ['25 kg / 50 kg PP bags', 'Bulk bags (FIBC)'],
    specifications: [
      { label: 'Origin', value: 'India' },
      { label: 'Cleaning Grade', value: 'Machine clean / 99% Sortex clean' },
      { label: 'Form', value: 'Natural seed' },
    ],
    image: '/src/assets/images/cumin_seeds_bulk_1792832370398.jpg',
    featured: true,
  },
  {
    id: 'oilseed-15',
    slug: 'mustard-seeds',
    name: 'Mustard Seeds',
    division: 'spices-oilseeds',
    category: 'oilseeds',
    shortDescription: 'Sharp flavour, suited to culinary use and oil production.',
    overview:
      'Cleaned yellow and brown mustard seeds noted for robust pungency and versatile utility across commercial cold-pressed edible oils, condiments, and culinary tempering.',
    commercialApplications: [
      'Cold-pressed and refined mustard oil production',
      'Table mustard and condiment formulations',
      'Pickle manufacturing',
    ],
    standardPackaging: ['25 kg / 50 kg woven polypropylene sacks'],
    specifications: [
      { label: 'Origin', value: 'India' },
      { label: 'Purity', value: 'Machine cleaned' },
      { label: 'Usage', value: 'Oil crushing and food grade' },
    ],
    image: '/src/assets/images/spices_division_banner_1792832350716.jpg',
  },
  {
    id: 'oilseed-16',
    slug: 'black-mustard-seeds',
    name: 'Black Mustard Seeds',
    division: 'spices-oilseeds',
    category: 'oilseeds', // Classified under Oilseeds, strictly placed next to Mustard Seeds
    shortDescription: 'Strong pungency, used in cooking, pickling and oil extraction.',
    overview:
      'Small, dark, pungent Brassica nigra seeds offering sharp biting flavour upon crushing or tempering, traded widely for regional oil presses, pickling, and spice seasonings.',
    commercialApplications: [
      'Specialty mustard oil extraction',
      'Commercial pickling operations',
      'Culinary blending and tempering wholesale',
    ],
    standardPackaging: ['25 kg / 50 kg PP bags'],
    specifications: [
      { label: 'Classification', value: 'Oilseeds' },
      { label: 'Origin', value: 'India' },
      { label: 'Form', value: 'Cleaned whole black seeds' },
    ],
    image: '/src/assets/images/cumin_seeds_bulk_1792832370398.jpg',
  },
  {
    id: 'oilseed-17',
    slug: 'groundnut',
    name: 'Groundnut',
    division: 'spices-oilseeds',
    category: 'oilseeds',
    shortDescription: 'Sorted and graded for oil, snacks and processing.',
    overview:
      'Shelled and sorted groundnut kernels (peanuts) graded by count per ounce for oil extraction, peanut butter production, roasting, and industrial food manufacturing.',
    commercialApplications: [
      'Peanut oil expellers and solvent extraction',
      'Industrial snack roasting and salting',
      'Peanut butter and confectionery paste',
    ],
    standardPackaging: ['25 kg vacuum bags', '50 kg jute sacks'],
    specifications: [
      { label: 'Origin', value: 'India (Saurashtra / South India belts)' },
      { label: 'Type', value: 'Bold / Java kernels' },
      { label: 'Condition', value: 'Shelled and graded' },
    ],
    image: '/src/assets/images/hero_commodities_trade_1792832347986.jpg',
  },

  // ==========================================
  // ALUMINIUM SCRAP DIVISION (6 Products)
  // ==========================================
  {
    id: 'metal-01',
    slug: 'aluminium-wire-scrap',
    name: 'Aluminium Wire Scrap',
    division: 'aluminium-scrap',
    category: 'aluminium-scrap',
    shortDescription: 'Clean, high-purity wire scrap for remelting.',
    overview:
      'Clean, unalloyed aluminium electrical conductor wire scrap free from hair wire, insulation, iron clips, and excessive oxidation. Ideal for secondary smelters requiring high recovery rates.',
    commercialApplications: [
      'Secondary aluminium billet casting',
      'Deoxidizing agent in steelmaking',
      'High-grade alloy remelting',
    ],
    standardPackaging: ['Compressed wire briquettes', 'Loose coiled bundles in containers', 'Baled lots'],
    specifications: [
      { label: 'Commodity Type', value: 'Secondary raw material' },
      { label: 'Condition', value: 'Stripped clean wire and cable offcuts' },
      { label: 'Remelting Suitability', value: 'Direct furnace charging' },
    ],
    image: '/src/assets/images/aluminium_wire_scrap_1792832372158.jpg',
    featured: true,
  },
  {
    id: 'metal-02',
    slug: 'aluminium-taint-tabor',
    name: 'Aluminium Taint Tabor',
    division: 'aluminium-scrap',
    category: 'aluminium-scrap',
    shortDescription: 'Clean, mixed, unalloyed aluminium scrap, widely traded for remelting.',
    overview:
      'Mixed clean unalloyed aluminium scrap including sheet, plate, and wrought offcuts free from heavy attachments, iron, and plastic contamination, commonly traded across global recycling markets.',
    commercialApplications: [
      'Foundry ingot remelting',
      'Automotive component casting blends',
      'Recycled aluminium rolling slabs',
    ],
    standardPackaging: ['High-density bales', 'Loose packed 20ft/40ft containers'],
    specifications: [
      { label: 'Trade Classification', value: 'Taint / Tabor mixed wrought scrap' },
      { label: 'Physical Form', value: 'Baled sheet and plate pieces' },
      { label: 'Handling', value: 'Containerized ocean freight' },
    ],
    image: '/src/assets/images/aluminium_division_banner_1792832351480.jpg',
    featured: true,
  },
  {
    id: 'metal-03',
    slug: 'aluminium-rod-scrap',
    name: 'Aluminium Rod Scrap',
    division: 'aluminium-scrap',
    category: 'aluminium-scrap',
    shortDescription: 'Offcuts and rod scrap with consistent composition.',
    overview:
      'Machining offcuts, bar ends, and continuous cast rod scrap characterized by solid uniform density, making it easy to handle and charge into reverberatory furnaces.',
    commercialApplications: [
      'Alloy homogenization and casting',
      'Extrusion billet manufacture',
      'Foundry melting additions',
    ],
    standardPackaging: ['Steel-strapped bundles', 'Steel crate bins or bulk containerized'],
    specifications: [
      { label: 'Form', value: 'Solid rods, bar ends, cut lengths' },
      { label: 'Density', value: 'Solid bar offcuts' },
      { label: 'Loading', value: 'Palletized bundles / container bulk' },
    ],
    image: '/src/assets/images/aluminium_profiles_showcase_1792832351836.jpg',
  },
  {
    id: 'metal-04',
    slug: 'aluminium-extrusion-scrap',
    name: 'Aluminium Extrusion Scrap',
    division: 'aluminium-scrap',
    category: 'aluminium-scrap',
    shortDescription: 'Clean extrusion profiles from fabrication and construction.',
    overview:
      'Clean aluminium architectural and industrial extrusion cut-offs and structural section scrap, segregated from fabrication facilities and architectural dismantlings.',
    commercialApplications: [
      '6xxx series secondary ingot smelting',
      'Architectural profile re-extrusion',
      'Die-casting master alloy feedstock',
    ],
    standardPackaging: ['Strapped profile bundles', 'Compressed extrusion bales'],
    specifications: [
      { label: 'Source', value: 'Window & architectural fabrications, industrial channels' },
      { label: 'Condition', value: 'Clean unpainted / mill finish selections' },
      { label: 'Form', value: 'Long profiles and cut pieces' },
    ],
    image: '/src/assets/images/aluminium_profiles_showcase_1792832351836.jpg',
    featured: true,
  },
  {
    id: 'metal-05',
    slug: 'aluminium-6061-scrap',
    name: 'Aluminium 6061 Scrap',
    division: 'aluminium-scrap',
    category: 'aluminium-scrap',
    shortDescription:
      'A versatile structural alloy containing magnesium and silicon, used in engineering applications.',
    overview:
      'Segregated 6061 alloy scrap sourced from aerospace, marine, and heavy engineering machining operations, retaining predictable magnesium and silicon alloying elements.',
    commercialApplications: [
      'Engineering grade ingot casting',
      'Structural components and marine fittings',
      'Precision machine shop remelt recycling',
    ],
    standardPackaging: ['Sorted lot bales', 'Steel tote bins', 'Containerized loose lots'],
    specifications: [
      { label: 'Alloy Series', value: '6061 (Al-Mg-Si)' },
      { label: 'Primary Elements', value: 'Magnesium and Silicon alloyed' },
      { label: 'Industry Use', value: 'Structural engineering & fabrication' },
    ],
    image: '/src/assets/images/aluminium_division_banner_1792832351480.jpg',
  },
  {
    id: 'metal-06',
    slug: 'aluminium-6063-scrap',
    name: 'Aluminium 6063 Scrap',
    division: 'aluminium-scrap',
    category: 'aluminium-scrap',
    shortDescription:
      'An architectural alloy with a smooth finish, common in window and door frames.',
    overview:
      'Segregated 6063 alloy scrap primarily consisting of clean architectural frames, window trims, and pipe extrusions recognized for excellent anodizing capability and surface quality.',
    commercialApplications: [
      'Architectural extrusion remelting',
      'Curtain wall profile manufacture',
      'Door and window extrusion billets',
    ],
    standardPackaging: ['Clean bundled lengths', 'High-density extrusion bales'],
    specifications: [
      { label: 'Alloy Series', value: '6063 (Architectural grade)' },
      { label: 'Typical Source', value: 'Window, door frames and architectural profiles' },
      { label: 'Alloy System', value: 'Al-Mg-Si balance suited to fine finish' },
    ],
    image: '/src/assets/images/aluminium_profiles_showcase_1792832351836.jpg',
  },
];

export const SPICES_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === 'spices');
export const OILSEEDS_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === 'oilseeds');
export const SPICES_AND_OILSEEDS_PRODUCTS = ALL_PRODUCTS.filter(
  (p) => p.division === 'spices-oilseeds'
);
export const ALUMINIUM_PRODUCTS = ALL_PRODUCTS.filter((p) => p.division === 'aluminium-scrap');
export const FEATURED_PRODUCTS = ALL_PRODUCTS.filter((p) => p.featured);
