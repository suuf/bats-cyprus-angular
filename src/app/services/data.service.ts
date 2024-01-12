import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCarouselData() {
    const carouselDataUrl = `"../../../assets/bat_data.json`;
    return this.http.get<any>(carouselDataUrl);
  }
}
