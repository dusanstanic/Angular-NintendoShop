import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isModalShown: boolean = false;

  constructor(private router: Router) {
    //this.router.navigate(['/gameMain']);
  }

  ngOnInit(): void {}

  showModal(): void {
    this.isModalShown = true;
  }

  hideModal = () => {
    this.isModalShown = false;
  };
}
