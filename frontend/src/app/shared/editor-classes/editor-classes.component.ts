import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editor-classes',
  template: `
  <section>
    <div class= "main_head">
      <span>Add New Course </span>
    </div>
        <span class= "under_line"></span>
          <form class= "add_new_course" action="../api.php" method="POST" enctype="multipart/form-data" >
            <input type="submit" value = "Save" >
            <input type="text" name = "new_course_name" placeholder="New course name" required="" >
            <textarea name="new_course_des" placeholder = "New course description" required="" > </textarea>
            <input class= "pic" type="file" name="pic" accept="image/*" required="" >
            <img id="output">
            <input type="hidden" name = "action" value="add_new_course" >
          </form>
  < /section>`,
  styleUrls: ['./editor-classes.component.css']
})
export class EditorClassesComponent implements OnInit {
  @Input('editor') editor: boolean;

  constructor() { }

  ngOnInit() {
  }

  getBoolean(editor) {
    console.log(editor);
  }
}
