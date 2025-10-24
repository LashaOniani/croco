import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PersonsComponent } from './modules/persons/persons.component';
import { PostsComponent } from './modules/posts/posts.component';
import { GamesComponent } from './modules/games/games.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },  
  {
    path: 'persons',
    component: PersonsComponent
  },  
  {
    path: 'posts/:id',
    component: PostsComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
  path: '**',
  component: HomeComponent
} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
