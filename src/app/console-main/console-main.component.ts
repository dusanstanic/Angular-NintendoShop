import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-console-main',
  templateUrl: './console-main.component.html',
  styleUrls: ['./console-main.component.css'],
})
export class ConsoleMainComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  showConsoles() {
    this.router.navigate(['/consoleMain/consoles', 5, 'edit'], {
      queryParams: { allowEdit: 1 },
      fragment: 'loading',
    });
  }
}
