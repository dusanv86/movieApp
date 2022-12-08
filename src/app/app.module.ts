import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MoviesComponent } from './views/movies/movies.component';
import { TvshowsComponent } from './views/tvshows/tvshows.component';
import { CardComponent } from './components/card/card.component';
import { TVshowdetailComponent } from './views/tvshowdetail/tvshowdetail.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { MoviedetailComponent } from './views/moviedetail/moviedetail.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TvshowsComponent,
    CardComponent,
    TVshowdetailComponent,
    SearchComponent,
    MoviedetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
