import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.css'],
})
export class BackdropComponent implements OnInit {
  @Output() toggleModal = new EventEmitter<boolean>();
  @Input() show: boolean;
  @Input() hideModal: Function;

  constructor() {}

  ngOnInit(): void {}

  hideModa() {
    console.log('back');
    this.toggleModal.emit(false);
  }
}
