import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorsComponent } from './actors/actors.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MovieService } from './movie.service';
import { MovieComponent } from './movie/movie.component';
import { MovieHomeComponent } from './movie-home/movie-home.component';


const appRoutes: Routes = [
  { path: '', component: ActorsComponent },
  { path: 'movie/:movieID', component: MovieComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ActorsComponent,
    ActorDetailComponent,
    MovieComponent,
    MovieHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
