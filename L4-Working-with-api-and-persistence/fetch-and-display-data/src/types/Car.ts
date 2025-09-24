// Exercise requirement: Define the CarResponse type based on the API data structure
export type CarResponse = {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  pricePerDay: number;
  isAvailable: boolean;
};