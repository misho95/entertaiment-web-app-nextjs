type AgeType = "PG" | "E" | "18+";
type MovieType = "movie" | "tv series";

type DataType = {
  trending: {
    id: number;
    title: string;
    type: MovieType;
    year: number;
    age: AgeType;
    thumbnails: {
      large: string;
      small: string;
    };
  }[];
  films: {
    id: number;
    title: string;
    type: MovieType;
    year: number;
    age: AgeType;
    thumbnails: {
      large: string;
      small: string;
    };
  }[];
};
