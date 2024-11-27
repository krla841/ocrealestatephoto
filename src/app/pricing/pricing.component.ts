import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule,  } from '@angular/common';  

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {

}
