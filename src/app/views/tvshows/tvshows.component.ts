import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ECategory } from 'src/app/enums/category.enum';
import { Result } from 'src/app/models/result.model';
import { TvshowsService } from 'src/app/services/tvshows.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {

  public movieData: Result[] = [];

  constructor(private tvshowsService: TvshowsService, private router: Router) { }

  ngOnInit(): void {
    this.getTvshows()
  }

  getTvshows(): void {
    this.tvshowsService.getTvshows()
      .pipe(map(response => {

        const reduce = response.results.slice(0, 10);
        return {
          ...response,
          results: reduce
        }
      }))
      .subscribe(response => {
        this.movieData = response.results;
        console.log(response);
      })
  }

  getSearchTvshows(search: string): void {
    this.tvshowsService.getSearchTvshows(search).subscribe(res => {
      this.movieData = res.results
    })
  }

  onDetails(id: number): void{
    this.router.navigate(['tvshow', id])
  }

  onSearch(value: string): void{
    if(value.length >=3){
      this.getSearchTvshows(value);
      return;
    }
    this.getTvshows()
  }
}
