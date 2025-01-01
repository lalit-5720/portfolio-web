import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngAfterViewInit() {
    // Listen for route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd) // Filter for successful route changes
    ).subscribe(() => {
      this.scrollToTop();
    });
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll to the top of the page
    });
  }
}