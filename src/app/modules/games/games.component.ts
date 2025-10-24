import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: false,
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {
  sectors = [
    { sector: 'sector-1', proc: '10%', background: '#e74c3c' },
    { sector: 'sector-2', proc: '10%', background: '#3498db' },
    { sector: 'sector-3', proc: '10%', background: '#2ecc71' },
    { sector: 'sector-4', proc: '10%', background: '#f1c40f' },
    { sector: 'sector-5', proc: '10%', background: '#9b59b6' },
    { sector: 'sector-6', proc: '10%', background: '#1abc9c' },
    { sector: 'sector-7', proc: '10%', background: '#e67e22' },
    { sector: 'sector-8', proc: '10%', background: '#16a085' },
    { sector: 'sector-9', proc: '10%', background: '#34495e' },
    { sector: 'sector-10', proc: '10%', background: '#ff66b2'}
  ];

  rotation = 0;
  spinning = false;

  spin() {
    if (this.spinning) return; // prevent double clicks
    this.spinning = true;

    const spinDegrees = 360 * 5 + Math.floor(Math.random() * 360); // 5 full spins + random stop
    this.rotation += spinDegrees;

    const circle = document.querySelector('.circle') as HTMLElement;
    circle.style.transition = 'transform 4s ease-out';
    circle.style.transform = `rotate(${this.rotation}deg)`;

    setTimeout(() => {
      this.spinning = false;
    }, 4000);
  }
}
