import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TVshowdetailComponent } from './views/tvshowdetail/tvshowdetail.component';
import { MoviesComponent } from './views/movies/movies.component';
import { TvshowsComponent } from './views/tvshows/tvshows.component';
import { MoviedetailComponent } from './views/moviedetail/moviedetail.component';

const routes: Routes = [
  { path: '', component: TvshowsComponent },
  { path: 'tvshows', component: TvshowsComponent},
  { path: 'movies', component: MoviesComponent},
  { path: 'movie/:id', component: MoviedetailComponent},
  { path: 'tvshow/:id', component: TVshowdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
