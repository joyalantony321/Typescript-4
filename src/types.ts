export interface Event {
  year: number;
  title: string;
  description: string;
  imageURL: string;
  category: string;
}

export interface CategoryCount {
  [key: string]: number;
}