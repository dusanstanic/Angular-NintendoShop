import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { DataStorageService } from './services/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.dataStorageService.fetchGames();
    this.authService.autoLogin();
  }
}
