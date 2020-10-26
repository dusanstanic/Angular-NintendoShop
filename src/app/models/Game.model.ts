import { Genre } from './Genre.model';

export interface Game {
  id?: number;
  title: string;
  description: string;
  releaseDate: Date;
  price: number;
  pgRating: string;
  status: string;
  image: string;
  genre: Genre;
  consoles?: Console[];
  images?: Image[];
}
