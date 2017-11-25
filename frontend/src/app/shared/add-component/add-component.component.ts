import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-component',
  template: `<div (click)="openEditor()" class="add_button">+</div>`,
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent implements OnInit {
  @Output() onClicked = new EventEmitter<any>();

  editor: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  openEditor() {
    this.editor = !this.editor;
    this.onClicked.emit(console.log(this.editor));

  }

}
