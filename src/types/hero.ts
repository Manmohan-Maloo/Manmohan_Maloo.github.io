export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface HeroData {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  stats: Stat[];
  location: string;
  availability: string;
}

export type ColorKey =
  | "kw"
  | "tag"
  | "attr"
  | "str"
  | "fn"
  | "tp"
  | "tx"
  | "va"
  | "prop"
  | "tmpl"
  | "cm";

export type CodeChar = { c: string; k: ColorKey };
