import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: false,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  @Input() date ?: any;
  items : any = [];
  ngOnInit(){
    this.items = [
            {
                label: 'Home',
                routerLink: 'home'
            },
            {
                label: 'მომხმარებლები',
                routerLink: 'persons'
            },
            {
                label: 'პოსტები',
                routerLink: 'posts/0'
            },
            {
                label: this.date,
            }
        ] 
  }
}
