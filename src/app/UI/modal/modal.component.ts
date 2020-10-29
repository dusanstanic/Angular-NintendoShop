import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() show: boolean;
  @Input() hideModal: Function;

  constructor() {}

  ngOnInit(): void {}

  yo() {
    console.log('yo');
  }
}
