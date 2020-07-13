import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;

  // constructor(private formBuilder: FormBuilder) {
  //   this.messageForm = this.formBuilder.group({
  //     name: ['', Validators.required],
  //     email: ['', Validators.required],
  //     subject: ['', Validators.required],
  //     message: ['', Validators.required]
  //   })
  // }

  // Input form validation
  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }
    this.success = true;

    console.log(this.messageForm);

  }

  ngOnInit(): void {

    this.messageForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'subject': new FormControl(null, Validators.required),
      'message': new FormControl(null, Validators.required)
    });
  }

}
