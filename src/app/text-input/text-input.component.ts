import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      //Validations
      username: ["", Validators.required],

      email: ["", [Validators.required, Validators.email]],

      password: ["", [Validators.required]],

      number: ["", [Validators.required]],

      comment: [""]
    });
  }

  showObjectData() {
    let data = this.formToObject();
    console.log(data);
  }

  formToObject() {
    let obj = {
      username: this.form.get("username").value,
      email: this.form.get("email").value,
      password: this.form.get("password").value,
      number: this.form.get("number").value,
      comments: this.form.get("comment").value
    };
    return obj;
  }

  ngOnInit() {
  }
}
