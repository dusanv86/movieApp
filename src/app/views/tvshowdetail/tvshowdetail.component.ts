import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { ECategory } from 'src/app/enums/category.enum';
import { Tvshowdetails } from 'src/app/models/tvshowdetails.model';
import { TvshowsService } from '../../services/tvshows.service';

@Component({
  selector: 'app-detail',
  templateUrl: './tvshowdetail.component.html',
  styleUrls: ['./tvshowdetail.component.scss']
})
export class TVshowdetailComponent implements OnInit, OnDestroy {

  routeSubscription: Subscription;

  category: string;

  id: number;

  public tvshowdetails: Tvshowdetails;


  constructor(private activatedRoute: ActivatedRoute, private tvshowsService: TvshowsService) { }

  ngOnInit(): void {
    this.routeSubscription = this.activatedRoute.params.subscribe(res=>{
      this.category = res.category
      this.id = res.id
      console.log(this.id)
      console.log(this.category)
      // if(this.category === ECategory.MOVIE){
      //   this.getMovieDetails();
      //   return;
      // } else{
        this.getTvshowDetails();
      //   return;
      // }

    })

  }
  getTvshowDetails(): void{
    this.tvshowsService.getTvshowDetails(this.id)
    .pipe(map(response => {
      return response;
    }))
    .subscribe(response => {
      this.tvshowdetails = response;
      console.log(response);
    })

  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe()
  }
}
