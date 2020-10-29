import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isModalShown: boolean = false;
  isAuthenticated: boolean = false;
  firstName: string = '';
  private userSub: Subscription;

  constructor(private router: Router, private authService: AuthService) {
    //this.router.navigate(['/gameMain']);
  }

  ngOnInit(): void {
    this.userSub = this.authService.userInfo.subscribe((userInfo) => {
      this.isAuthenticated = !!userInfo;
      if (this.isAuthenticated && userInfo.userData) {
        this.firstName = userInfo.userData.firstName;
      }
    });
  }

  showModal(): void {
    this.isModalShown = true;
  }

  hideModal = () => {
    this.isModalShown = false;
  };

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
