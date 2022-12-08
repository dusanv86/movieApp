import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { Moviedetails } from 'src/app/models/moviedetails.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.scss']
})
export class MoviedetailComponent implements OnInit, OnDestroy {


  routeSubscription: Subscription;

  category: string;

  id: number;

  public moviedetails: Moviedetails;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.routeSubscription = this.activatedRoute.params.subscribe(res=>{
      this.category = res.category
      this.id = res.id
      console.log(this.id)
      console.log(this.category)
      // if(this.category === ECategory.MOVIE){
        // this.getMovieDetails();
      //   return;
      // } else{
      //   this.getTvshowDetails();
      //   return;
      // }
      this.getMovieDetails()
    })
  }

  getMovieDetails(): void{
    this.movieService.getMovieDetails(this.id)
    .pipe(map(response => {
      return response;
    }))
    .subscribe(response => {
      this.moviedetails = response;
      console.log(response);
    })

  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe()
  }

}
