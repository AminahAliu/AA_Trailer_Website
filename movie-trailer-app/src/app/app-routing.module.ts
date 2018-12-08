import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ActorApiComponent } from './actor-api/actor-api.component';
import { ActorsComponent } from './actors/actors.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  { path: '', component: ActorsComponent },
  { path: 'detail/:id', component: ActorDetailComponent },
  { path: 'person/:id', component: ActorApiComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
