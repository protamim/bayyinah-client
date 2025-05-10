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

//  {
//     featureImage: {
//       url: "/blog-feature-1.png",
//       width: 3996,
//       height: 2838,
//       alt: "blog feature image",
//     },
//     publishAt: "Oct 24, 2023",
//     title: " Ramadan: A Month of Reflection and Renewal",
//     shortDescription: "Ramadan, the ninth month of the Islamic",
//     action: {
//       url: "#",
//       label: "Read More",
//     },
//   },

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