import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/models/Game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit, OnDestroy {
  // game: { id: number; name: string };
  // paramsSubscripton: Subscription;
  @Input() game: Game;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.game = {
    //   id: this.route.snapshot.params['id'],
    //   name: this.route.snapshot.params['name'],
    // };
    // this.paramsSubscripton = this.route.params.subscribe((params: Params) => {
    //   this.game = {
    //     id: params['id'],
    //     name: params['name'],
    //   };
    // });
  }

  ngOnDestroy() {
    // this.paramsSubscripton.unsubscribe();
  }
}
