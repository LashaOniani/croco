import { Component } from '@angular/core';
import { UserposterService } from '../../userposter.service';

@Component({
  selector: 'app-persons',
  standalone: false,
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.scss'
})
export class PersonsComponent {
  posts !: any[];
  users !: any[];
  userArray : any[] = [];

  constructor(private req : UserposterService){}

  ngOnInit(){
    this.req.get_posts().subscribe(postdata => {
      this.posts = postdata;
      this.req.get_users().subscribe(userData =>{
        this.users = userData;
        this.userArray = this.users.map(eachUser =>{
          let tempArr : any = [];
          this.posts.forEach(item => {
            if(item.userId === eachUser.id) tempArr.push(item);
          })
          let tempObj = {
            postArr: tempArr,
            ...eachUser
          }
          return tempObj;
        })
      })
    })
  }
}
