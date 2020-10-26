import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameMainComponent } from './game-main/game-main.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ConsoleMainComponent } from './console-main/console-main.component';
import { GamesComponent } from './game-main/games/games.component';
import { GameComponent } from './game-main/games/game/game.component';
import { ConsolesComponent } from './console-main/consoles/consoles.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing-module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { HeaderComponent } from './header/header.component';
import { GameService } from './services/game.service';
import { DataStorageService } from './services/data-storage.service';
import { GameSearchFilterComponent } from './game-main/games/game-search-filter/game-search-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    GameMainComponent,
    HomeComponent,
    ConsoleMainComponent,
    GamesComponent,
    GameComponent,
    ConsolesComponent,
    PageNotFoundComponent,
    HeaderComponent,
    GameSearchFilterComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [
    AuthService,
    AuthGuard,
    CanDeactivateGuard,
    GameService,
    DataStorageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
