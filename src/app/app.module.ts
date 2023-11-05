import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputFormComponent } from './component/input-form/input-form.component';
import { FormInputComponent } from './component/input/form-input/form-input.component';
import { PrimaryButtonComponent } from './component/button/primary-button/primary-button.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    FormInputComponent,
    PrimaryButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
