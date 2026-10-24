export type Division = 'spices-oilseeds' | 'aluminium-scrap';

export type CommodityCategory = 'spices' | 'oilseeds' | 'aluminium-scrap';

export interface CommoditySpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  division: Division;
  category: CommodityCategory;
  shortDescription: string;
  overview?: string;
  commercialApplications?: string[];
  standardPackaging?: string[];
  specifications?: CommoditySpecification[];
  image: string;
  featured?: boolean;
}

export type QuantityUnit = 'Metric Tons (MT)' | 'Kilograms (kg)' | '20ft FCL' | '40ft FCL';

export type EnquiryType = 'buyer' | 'supplier';

export interface EnquiryFormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phoneOrWhatsApp: string;
  buyerLocation: string;
  enquiryType?: EnquiryType;
  division: Division;
  productSlug: string;
  productName: string;
  requiredQuantity: string;
  quantityUnit: QuantityUnit;
  additionalRequirements: string;
  consentAccepted: boolean;
}

export interface EnquirySubmissionResult {
  id: string;
  timestamp: string;
  data: EnquiryFormData;
}
