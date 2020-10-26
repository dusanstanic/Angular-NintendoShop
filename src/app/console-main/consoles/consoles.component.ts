import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, CanDeactivate, Router } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/can-deactivate-guard.service';

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.css'],
})
export class ConsolesComponent implements OnInit, CanComponentDeactivate {
  changesSaved = false;
  consoleName1 = 'console';
  consoleName2 = 'console';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
  }

  saveConsole() {
    this.changesSaved = true;
    this.router.navigate(['/consoleMain'], { relativeTo: this.route });
  }

  canDeactivate() {
    if (this.consoleName1 !== this.consoleName2 && !this.changesSaved) {
      return confirm('Do you want to discard changes');
    } else {
      return true;
    }
  }
}
