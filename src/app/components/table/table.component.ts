import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserposterService } from '../../userposter.service';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() posts : any;
  @Input() table : string = '';
  localPosts : any[] = []
  isPopUpClicked : boolean = false;
  post !: any;
  todoList : any[] = [];
  dspToDo : boolean = false;

  constructor(private req : UserposterService){}

  ngOnChanges() {
    if (this.posts) {
      this.localPosts = this.posts;
      console.log(this.localPosts);
    }
  }

  showPopUp(post_id : number){
    // console.log(post_id)
    this.post = this.localPosts.filter(item => item.id === post_id ? item : '')[0]
    // console.log(this.post)
    this.post ? this.isPopUpClicked = true : this.isPopUpClicked = false
  }

  checkPopup($event : any){
    // console.log($event);
    this.isPopUpClicked = false;
    this.post = '';
  }

  displayToDo(id : any){
    console.log(id)
    this.todoList = [];
    this.req.get_todo(id).subscribe(data => {
      this.todoList.push(data)
      if(data) this.dspToDo = true
      console.log(this.todoList)
    })
  }
}
