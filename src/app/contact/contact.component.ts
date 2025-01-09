import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formData = {
    fullName: '',
    email: '',
    phone: '',
    pincode: ''
  };

  constructor(private http: HttpClient) { }

  onSubmit(form: any): void {
    if (form.valid) {
      this.http.post('http://127.0.0.1:5000/api/submit', this.formData).subscribe({
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
