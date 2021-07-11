export interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: Measurement;
  boil_volume: Measurement;
  method: Method;
  ingredients: Ingredients;
  food_pairing?: string[] | null;
  brewers_tips: string;
  contributed_by: string;
}

export interface Measurement {
  value: number;
  unit: string;
}

export interface Method {
  mash_temp?: MashTempEntity[] | null;
  fermentation: Fermentation;
  twist?: null;
}

export interface MashTempEntity {
  temp: Measurement;
  duration: number;
}

export interface Fermentation {
  temp: Measurement;
}

export interface Ingredients {
  malt?: MaltEntity[] | null;
  hops?: HopsEntity[] | null;
  yeast: string;
}

export interface MaltEntity {
  name: string;
  amount: Measurement;
}

export interface HopsEntity {
  name: string;
  amount: Measurement;
  add: string;
  attribute: string;
}
