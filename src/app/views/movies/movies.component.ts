import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { map } from 'rxjs';
import { Result } from 'src/app/models/result.model';
import { Router } from '@angular/router';
import { ECategory } from 'src/app/enums/category.enum';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public movieData: Result[] = [];

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies(): void{
    this.movieService.getMovies()
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

  getSearchMovies(search: string): void{
    this.movieService.getSearchMovies(search).subscribe(res=>{
      this.movieData = res.results
    })
  }

  onDetails(id: number): void{
    this.router.navigate(['movie', id])
  }

  onSearch(value: string): void{
    if(value.length >=3){
      this.getSearchMovies(value);
      return;
    }
    this.getMovies()
  }
}
