import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit,AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    // setTimeout(() => {
    //   this.router.navigate(['/about']);
    // }, 8000);  // 6000ms = 6 seconds

  }

  ngAfterViewInit(): void {
    const videoElement = document.querySelector('.background-video') as HTMLVideoElement;

    if (videoElement) {
      console.log('Video element found. Attempting to play...');
      videoElement.muted = true; // Ensure video is muted for autoplay
      videoElement.play().then(() => {
        console.log('Video is playing successfully.');
      }).catch(error => {
        console.error('Error playing video:', error);
      });
    } else {
      console.error('Video element not found.');
    }
  }

}
