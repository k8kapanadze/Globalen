export type Language = "GE" | "EN";

export interface NavItem {
  id: string;
  label: { GE: string; EN: string };
  path: string;
}

export interface Program {
  id: string;
  region: "UK" | "USA" | "Europe" | "Asia";
  title: { GE: string; EN: string };
  description: { GE: string; EN: string };
  conditions: { GE: string; EN: string };
  image: string;
  gallery: string[];
}

export interface Consultant {
  id: string;
  name: { GE: string; EN: string };
  role: { GE: string; EN: string };
  image: string;
  isAvailable: boolean;
}

export interface Course {
  id: string;
  title: { GE: string; EN: string };
  description: { GE: string; EN: string };
  price?: string;
}

export interface BasketItem {
  id: string;
  type: "program" | "course";
  title: { GE: string; EN: string };
}
