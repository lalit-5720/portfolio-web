import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit,AfterViewInit {

  Dataform={
    fullName:''
  }

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form:any):void{
    if(form.valid) {
      this.http.post('http://127.0.0.1:5000/api/name-submit', this.Dataform).subscribe({
        next: (response) => {
          console.log('Form submitted successfully!', response);
          alert('Redirecting to the Next Page');
          this.router.navigate(['/about']);
        },
        error: (error) => {
          console.error('Error submitting form', error);
          alert('Error Occured on submition');
        }
      });
    }
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
