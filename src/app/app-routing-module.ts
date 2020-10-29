import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { ConsoleMainComponent } from './console-main/console-main.component';
import { ConsolesComponent } from './console-main/consoles/consoles.component';
import { GameMainComponent } from './game-main/game-main.component';
import { GameComponent } from './game-main/games/game/game.component';
import { GamesComponent } from './game-main/games/games.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserPanelComponent } from './user-panel/user-panel.component';

const appRoutes: Routes = [
  {
    path: 'userPanel',
    component: UserPanelComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'gameMain',
    //canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: GameMainComponent,
    children: [
      {
        path: 'games',
        component: GamesComponent,
        children: [{ path: ':id/:name', component: GameComponent }],
      },
    ],
  },
  {
    path: 'consoleMain',
    component: ConsoleMainComponent,
    children: [
      {
        path: 'consoles/:id/edit',
        component: ConsolesComponent,
        canDeactivate: [CanDeactivateGuard],
      },
    ],
  },
  { path: '', component: HomeComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
