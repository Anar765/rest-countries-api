export interface Country {
  alpha3Code?: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  flags: {
    png: string;
  };
}