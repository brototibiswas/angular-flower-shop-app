import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent {
  categories: string[] = [];
  currentView: Category = 'flowers';

  constructor(private http: HttpClient) {}

  // async getFlowers() {
  //   try {
  //     const data = await firstValueFrom(
  //       this.http.get<[{ name: string }]>('http://localhost:3000/getCategories')
  //     );
  //     console.log(data);
  //     return;
  //   } catch (error) {
  //     throw new Error('Something is wrong');
  //   }
  // }

  showCards(category: Category) {
    this.currentView = category;
  }
}

type Category = 'flowers' | 'candles';
