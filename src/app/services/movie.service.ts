import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagination } from '../models/pagination.model';
import { Result } from '../models/result.model';
import { Moviedetails } from '../models/moviedetails.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  private readonly getTopRated = '/movie/top_rated';
  private readonly searchMovies = '/search/movie';
  private readonly movieDetails = '/movie';

  getMovies(): Observable<Pagination<Result>> {
    return this.http.get<Pagination<Result>>(this.getTopRated, {
      params: {
        page: 1
      }
    })
  }

  getSearchMovies(search: string): Observable<Pagination<Result>>{
    return this.http.get<Pagination<Result>>(this.searchMovies, {
      params: {
        query: search
      }
    })
  }

  getMovieDetails(id: number): Observable<Moviedetails>{
    return this.http.get<Moviedetails>(`${this.movieDetails}/${id}`)
  }
}
