import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editor-classes',
  templateUrl: './editor-classes.component.html',
  styleUrls: ['./editor-classes.component.css']
})
export class EditorClassesComponent implements OnInit {
  @Input() editor: boolean;

  constructor() { }

  ngOnInit() {
  }

  getBoolean(editor) {
    console.log(this.editor);
  }
}
