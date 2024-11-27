import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule,  } from '@angular/common';  


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  isVisible: boolean = true;
  isExterior: boolean = false;
  isInterior: boolean = false;
  isDrone: boolean = false;

  constructor() {}

  hide(event: Event, id: string) {
    this.isVisible = false;
    console.log(event);
    console.log(this.isVisible);
    switch (id) {
      case 'interior':
        this.isInterior = true;
        break;
      case 'exterior':
        this.isExterior = true;
        break;
      case 'drone':
        this.isDrone = true;
        break;
    }
  }

}
