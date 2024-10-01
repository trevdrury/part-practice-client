import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private registrationService: RegistrationService) {}

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      'username': new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.registrationService.register(this.registrationForm.value)
  }
}
