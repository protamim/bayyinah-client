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