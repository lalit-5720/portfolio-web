import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  constructor(private router:Router) { }
  ngAfterViewInit() {
    const sections = document.querySelectorAll('.home-section, .about-container, .education-section ,.skill-section ,.contact-section'); // Select sections

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            this.router.navigate([], { fragment: sectionId }); // Update URL fragment
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));
  }

  // Function to navigate and scroll smoothly
  navigateAndScroll(section: string) {
    this.router.navigate([], { fragment: section });
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit(): void {
    // You can initialize anything if needed here
  }
}
