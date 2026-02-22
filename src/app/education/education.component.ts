import { Component, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements AfterViewInit {
  
  constructor() { }

  ngAfterViewInit(): void {
    this.triggerAnimations();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.triggerAnimations();
  }

  triggerAnimations(): void {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.85 && rect.bottom > 0;
      
      if (isVisible) {
        el.classList.add('visible');
      }
    });

    // Add subtle parallax effect on scroll
    this.applyParallaxEffect();
  }

  applyParallaxEffect(): void {
    const scrollY = window.scrollY;
    const elements = document.querySelectorAll('.timeline-item');
    
    elements.forEach((el, index) => {
      const element = el as HTMLElement;
      const speed = 0.5 + (index * 0.05);
      element.style.transform = `translateY(${scrollY * speed * 0.02}px)`;
    });
  }
}