import { Injectable } from '@nestjs/common';

export interface Movie {
  id: number;
  name: string;
  year: number;
}

@Injectable()
export class AppService {
  private movies: Movie[] = [
    { id: 1, name: 'John Wick', year: 2014 },
    { id: 2, name: 'John Wick: Chapter 2', year: 2017 },
    { id: 3, name: 'John Wick: Chapter 3 - Parabellum', year: 2019 },
    { id: 4, name: 'John Wick: Chapter 4', year: 2023 },
  ];

  getMovies(): Movie[] {
    return this.movies;
  }
}