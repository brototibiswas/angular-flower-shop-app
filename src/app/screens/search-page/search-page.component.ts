import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent {
  categories: string[] = [];
  currentView: Category = 'flowers';
  products: Product[] = [];

  constructor(private http: HttpClient) {
    this.showCards(this.currentView);
  }

  async getProducts(category: Category) {
    try {
      switch (category) {
        case 'candles':
          this.products = await lastValueFrom(
            this.http.get<Product[]>(
              'http://localhost:3000/products/category/candle'
            )
          );
          console.log('candles:', this.products);
          break;
        case 'flowers':
          this.products = await lastValueFrom(
            this.http.get<Product[]>(
              'http://localhost:3000/products/category/flower'
            )
          );
          console.log('candles:', this.products);
          break;
        case 'all':
          this.products = await lastValueFrom(
            this.http.get<Product[]>('http://localhost:3000/products/category')
          );
          break;
      }
    } catch (error) {
      throw new Error(`Get Product for ${category} failed`);
    }
  }

  showCards(category: Category) {
    this.currentView = category;
    this.getProducts(category);
  }
}

type Category = 'flowers' | 'candles' | 'all';

type Product = {
  name: string;
  price: number;
  link: string;
};
