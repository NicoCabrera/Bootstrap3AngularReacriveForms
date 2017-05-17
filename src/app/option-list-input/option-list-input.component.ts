import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-option-list-input',
  templateUrl: './option-list-input.component.html',
  styleUrls: ['./option-list-input.component.css']
})
export class OptionListInputComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      //Validations
      gender: ["", Validators.required],
      html: false,
      css: false,
      js: false,
      img: ["default.png", [Validators.required]]
    });
  }

  ngOnInit() {
  }

  showObjectData() {
    let data = this.formToObject();
    console.log(data);
  }

  formToObject() {
    let obj = {
      gender: this.form.get("gender").value,
      html: this.form.get("html").value == undefined ?false:true, // to avoid take 'undefined' value after reset the form 
      css: this.form.get("css").value == undefined ?false:true,
      js: this.form.get("js").value == undefined ?false:true,
      img: this.form.get("img").value
    };
    return obj;
  }
}
