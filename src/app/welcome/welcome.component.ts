import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements AfterViewInit, OnDestroy {
  private routeSubscription!: Subscription;
  private observer!: IntersectionObserver;
  
  showComponents: boolean = false; // ✅ Declare showComponents

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.initObserver();

    // Listen for route changes and reinitialize animations
    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.resetAnimations(); // Restart animations when returning
      }
    });
  }

  // Initialize IntersectionObserver
  private initObserver(): void {
    const sections = document.querySelectorAll('.home-section, .about-container, .education-section, .skill-section, .contact-container');

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            this.router.navigate([], { fragment: sectionId }); // Update URL fragment
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => this.observer.observe(section));
  }

  // Function to reset animations
  private resetAnimations(): void {
    const elements = document.querySelectorAll('.fade-in, .slide-up, .zoom-in'); // Update based on your animation classes

    elements.forEach(el => {
      el.classList.remove('visible'); // Remove animation class
      setTimeout(() => el.classList.add('visible'), 50); // Re-add after a small delay
    });
  }

  // Function to navigate and scroll smoothly
  navigateAndScroll(section: string) {
    this.router.navigate([], { fragment: section });
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  // ✅ Function to toggle showComponents
  toggleComponents() {
    this.showComponents = !this.showComponents;
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}