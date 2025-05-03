export interface NavItemTypes {
  label: string;
  url?: string;
}

export interface HeaderNavItemTypes extends NavItemTypes {
  subItems?: NavItemTypes[];
}
