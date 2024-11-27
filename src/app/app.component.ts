import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
declare var M: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'realestatephoto-angular';
  sidenavInstance: any;

  constructor(private router: Router) { }

  ngAfterViewInit() {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
    this.sidenavInstance = M.Sidenav.init(elems)[0];

    // Listen for route changes and close sidenav
    this.router.events.subscribe(() => {
      if (this.sidenavInstance && this.sidenavInstance.isOpen) {
        this.sidenavInstance.close();
      }
    });
  }

  navigateToPortfolio(): void {
    this.router.navigate(['/home']);
  }
}
