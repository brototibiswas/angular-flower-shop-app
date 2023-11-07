import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  categories: string[] = [];
  isCategoryShown: boolean = false;

  constructor(private http: HttpClient) {}

  async getCategories() {
    if (this.isCategoryShown) {
      this.categories = [];
      this.isCategoryShown = false;
      return;
    }

    const data = await lastValueFrom(
      this.http.get<{ name: string }[]>('http://localhost:3000/getCategories')
    );
    console.log(data);
    data.forEach((e) => this.categories.push(e.name));
    console.log(this.categories.length);
    this.isCategoryShown = true;
  }
}
