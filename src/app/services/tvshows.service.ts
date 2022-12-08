import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagination } from '../models/pagination.model';
import { Result } from '../models/result.model';
import { Tvshowdetails } from '../models/tvshowdetails.model';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {


  constructor(private http: HttpClient) { }

  private readonly getTopRated = '/tv/top_rated';
  private readonly searchTvshows = '/search/tv';
  private readonly tvshowDetails = '/tv';

  getTvshows(): Observable<any> {
    return this.http.get<Pagination<Result>>(this.getTopRated, {
      params: {
        page: 1
      }
    })
    }

    getSearchTvshows(search: string): Observable<Pagination<Result>>{
      return this.http.get<Pagination<Result>>(this.searchTvshows, {
        params: {
          query: search
        }
      })
    }

    getTvshowDetails(id: number): Observable<Tvshowdetails> {
      return this.http.get<Tvshowdetails>(`${this.tvshowDetails}/${id}`)
    }
}
