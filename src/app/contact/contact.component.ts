import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private baseUrl = environment.apiUrl;

  formData = {
    fullName: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private http: HttpClient) { }

  onSubmit(form: any): void {
    if (form.valid) {
      this.http.post(`${this.baseUrl}/submit`, this.formData).subscribe({
        next: (response) => {
          console.log('Form submitted successfully!', response);
          alert('Form submitted successfully!');
        },
        error: (error) => {
          console.error('Error submitting form', error);
          alert('An error occurred while submitting the form.');
        }
      });
    }
  }


  ngOnInit(): void {
  }

}
