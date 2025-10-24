import { Component } from '@angular/core';
import { Leaderboard } from '../leaderboard';

@Component({
  selector: 'app-leaderboard',
  standalone: false,
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss'
})
export class LeaderboardComponent {

  leaderboard: Leaderboard[] = [
  { customerId: 1,  loginName: 'user-1',  place: 1,  week: 'I' },
  { customerId: 2,  loginName: 'user-2',  place: 2,  week: 'I' },
  { customerId: 3,  loginName: 'user-3',  place: 3,  week: 'I' },
  { customerId: 4,  loginName: 'user-4',  place: 4,  week: 'I' },
  { customerId: 5,  loginName: 'user-5',  place: 5,  week: 'I' },
  { customerId: 6,  loginName: 'user-6',  place: 6,  week: 'I' },
  { customerId: 7,  loginName: 'user-7',  place: 7,  week: 'I' },
  { customerId: 8,  loginName: 'user-8',  place: 8,  week: 'I' },
  { customerId: 9,  loginName: 'user-9',  place: 9,  week: 'I' },
  { customerId: 10, loginName: 'user-10', place: 10, week: 'I' },

  { customerId: 11, loginName: 'user-11', place: 1,  week: 'II' },
  { customerId: 12, loginName: 'user-12', place: 2,  week: 'II' },
  { customerId: 13, loginName: 'user-13', place: 3,  week: 'II' },
  { customerId: 14, loginName: 'user-14', place: 4,  week: 'II' },
  { customerId: 15, loginName: 'user-15', place: 5,  week: 'II' },
  { customerId: 16, loginName: 'user-16', place: 6,  week: 'II' },
  { customerId: 17, loginName: 'user-17', place: 7,  week: 'II' },
  { customerId: 18, loginName: 'user-18', place: 8,  week: 'II' },
  { customerId: 19, loginName: 'user-19', place: 9,  week: 'II' },
  { customerId: 20, loginName: 'user-20', place: 10, week: 'II' },

  { customerId: 21, loginName: 'user-21', place: 1,  week: 'III' },
  { customerId: 22, loginName: 'user-22', place: 2,  week: 'III' },
  { customerId: 23, loginName: 'user-23', place: 3,  week: 'III' },
  { customerId: 24, loginName: 'user-24', place: 4,  week: 'III' },
  { customerId: 25, loginName: 'user-25', place: 5,  week: 'III' },
  { customerId: 26, loginName: 'user-26', place: 6,  week: 'III' },
  { customerId: 27, loginName: 'user-27', place: 7,  week: 'III' },
  { customerId: 28, loginName: 'user-28', place: 8,  week: 'III' },
  { customerId: 29, loginName: 'user-29', place: 9,  week: 'III' },
  { customerId: 30, loginName: 'user-30', place: 10, week: 'III' },

  { customerId: 31, loginName: 'user-31', place: 1,  week: 'IV' },
  { customerId: 32, loginName: 'user-32', place: 2,  week: 'IV' },
  { customerId: 33, loginName: 'user-33', place: 3,  week: 'IV' },
  { customerId: 34, loginName: 'user-34', place: 4,  week: 'IV' },
  { customerId: 35, loginName: 'user-35', place: 5,  week: 'IV' },
  { customerId: 36, loginName: 'user-36', place: 6,  week: 'IV' },
  { customerId: 37, loginName: 'user-37', place: 7,  week: 'IV' },
  { customerId: 38, loginName: 'user-38', place: 8,  week: 'IV' },
  { customerId: 39, loginName: 'user-39', place: 9,  week: 'IV' },
  { customerId: 40, loginName: 'user-40', place: 10, week: 'IV' },
];
selected : string = 'ALL'
filteredBoard : any[] = this.leaderboard;

  filter(type : string){
    if(type === 'ALL'){
      this.filteredBoard = [];
      this.filteredBoard = this.leaderboard;
    }else{
      this.filteredBoard = [];
      this.leaderboard.filter(item => item.week === type ? this.filteredBoard.push(item) : '');
    }
    this.selected = type;
  }
}
