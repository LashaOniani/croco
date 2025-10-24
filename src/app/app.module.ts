import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { NavigationComponent } from './modules/navigation/navigation.component';
import { FooterComponent } from './modules/footer/footer.component';
import { ImportsModule } from './imports';
import { TableComponent } from './components/table/table.component';
import { providePrimeNG } from 'primeng/config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import Aura from '@primeng/themes/aura';
import { HomeComponent } from './modules/home/home.component';
import { PersonsComponent } from './modules/persons/persons.component';
import { PostsComponent } from './modules/posts/posts.component';
import { PopupComponent } from './components/popup/popup.component';
import { GamesComponent } from './modules/games/games.component';
import { LeaderboardComponent } from './modules/games/leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    TableComponent,
    FooterComponent,
    HomeComponent,
    PersonsComponent,
    PostsComponent,
    PopupComponent,
    GamesComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ImportsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    providePrimeNG({
          theme: { preset: Aura, options: { darkModeSelector: '.p-dark' } },
      }),
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
