import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Component, QueryList } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { FormInputComponent } from '../input/form-input/form-input.component';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent {
  errorMsg: string = '';
  formData!: QueryList<FormInputComponent>;

  nameField!: string;
  priceField!: number;
  unitField!: number;

  constructor(private http: HttpClient) {}

  async onFormSubmit() {
    const body = {
      name: this.nameField,
      price: this.priceField,
      units: this.unitField,
    };
    console.log('submit form', body);
    this.submitForm(body);
  }

  async submitForm(data: any) {
    try {
      const resp = await lastValueFrom(
        this.http.post('http://localhost:3000/submit-form', data)
      );
      console.log(resp);
    } catch (error) {
      console.log(error);
      if (error instanceof HttpErrorResponse) {
        this.errorMsg = error.error.message;
      }
    }
  }
}
