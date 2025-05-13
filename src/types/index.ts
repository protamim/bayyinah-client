export interface NavItemTypes {
  label: string;
  url?: string;
}

export interface HeaderNavItemTypes extends NavItemTypes {
  subItems?: NavItemTypes[];
}

export interface ImageTypes {
  url: string;
  width: number;
  height: number;
  alt: string;
}

export interface OfferCardTypes {
  key: string;
  label: string;
  image: ImageTypes;
}

export interface WhyChooseListDataTypes {
  title: string;
  image: ImageTypes;
  shortDescription: string;
}

export interface BlogCardActionTypes {
  url: string;
  label: string;
}
export interface BlogCardTypes {
  featureImage: ImageTypes;
  publishAt: string;
  title: string;
  shortDescription: string;
  action: BlogCardActionTypes;
}

export interface FaqTypes {
  question: string;
  answer: string;
}
