import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: false,
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  @Input() postInfo !: any
  dispPopUp : boolean  = false
  @Output() isPopUpdisplayed = new EventEmitter<boolean>();

  ngOnInit(){
    console.log(this.postInfo);
    this.postInfo ? this.dispPopUp = true : this.dispPopUp = false
  }

  popupdisplayed(){
    this.isPopUpdisplayed.emit(this.dispPopUp)
  }
}
