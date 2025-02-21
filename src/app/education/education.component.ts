import { Component, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements AfterViewInit {
  
  ngAfterViewInit(): void {
    this.animateOnScroll();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.animateOnScroll();
  }

  animateOnScroll(): void {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        el.classList.add('visible');
      }
    });
  }
}