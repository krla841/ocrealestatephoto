import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule,  } from '@angular/common';  
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
