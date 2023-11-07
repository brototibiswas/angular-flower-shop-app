import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InputFormComponent } from './component/input-form/input-form.component';
import { FormInputComponent } from './component/input/form-input/form-input.component';
import { PrimaryButtonComponent } from './component/button/primary-button/primary-button.component';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './component/dropdown/dropdown.component';
import { ItemCardComponent } from './component/item-card/item-card.component';
import { SearchPageComponent } from './screens/search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    FormInputComponent,
    PrimaryButtonComponent,
    DropdownComponent,
    ItemCardComponent,
    SearchPageComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
