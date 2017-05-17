import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { TextInputComponent } from './text-input/text-input.component';
import { OptionListInputComponent } from './option-list-input/option-list-input.component';


const routes: Routes = [
  {
    component: TextInputComponent,
    path: "text"
  },
  {
    component: OptionListInputComponent,
    path: "option"
  }
];
@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    OptionListInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
