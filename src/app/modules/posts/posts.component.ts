import { Component } from '@angular/core';
import { UserposterService } from '../../userposter.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  posts !: any[]
  users !: any[]
  postarraywithuser : any[] = []
  userd : any
  constructor(private req : UserposterService,
              private rout : ActivatedRoute
  ){}

  ngOnInit(){
    this.userd = Number(this.rout.snapshot.paramMap.get('id'));
    console.log(this.userd);
    this.req.get_users().subscribe(udata =>{
      this.users = udata;
    if(this.userd === 0){
        this.req.get_posts().subscribe(data => {
          this.posts = data;
          this.postarraywithuser = this.posts.map(item => {
          let tempobj = {
            user: this.users.find(user => user.id === item.userId),
            ...item
          }
          return tempobj
        })
         console.log(this.postarraywithuser)
      });
    }else{
        this.req.get_posts().subscribe(data => {
          this.posts = data;
          this.postarraywithuser = this.posts.map(item => {
          let tempobj = {
            user: this.users.find(user => user.id === item.userId),
            ...item
          }
          return tempobj
        })
        this.postarraywithuser = this.postarraywithuser.filter(item => item.userId === this.userd)
      });
    }

    })
    
  }
}
