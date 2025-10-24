import { Component, EventEmitter, Output } from '@angular/core';
import { UserposterService } from '../../userposter.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  today : Date = new Date();
  days : string[] = [
    'კვირა', 'ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშაბათი', 'პარასკევი', 'შაბათი'
  ];
  months : string[] = [
    'იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'
  ];
  dayShort : string[] = this.days.map(item => item.slice(0, 3)+'.');
  monShort : string[] = this.months.map(item => item.slice(0, 3)+'.');
  georgianDate : string = `${this.today.getUTCDate()} - ${this.dayShort[this.today.getDay()]} / ${this.monShort[this.today.getMonth()]} / ${this.today.getFullYear()}`;

  constructor(private request : UserposterService){
    // console.log(this.today)
    // console.log(this.georgianDate)
    // request.get_posts().subscribe(data => console.log(data))
  }
}
