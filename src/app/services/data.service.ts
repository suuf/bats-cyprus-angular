import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CitizenScienceData {
  observed_on: string;
  observed_on_string: string;
  uri: string;
  observationPhotos: any[];
  photos: { url: string }[];
  user: {
    icon: string;
    iconUrl: string;
    login: string;
    name: string;
  };
  place_guess: string;
  species_guess: string;
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private citizenScienceWebsiteUrl = 'https://api.inaturalist.org/v1/';
  private taxonId = 40268;
  private placeId = 140296;
  private perPage = 5;

  constructor(private http: HttpClient) {}

  getCarouselData() {
    const carouselDataUrl = 'assets/bat_data.json';
    return this.http.get<any>(carouselDataUrl);
  }

  getObservationData(): Observable<{ results: CitizenScienceData[] }> {
    return this.http.get<any>(
      `${this.citizenScienceWebsiteUrl}observations?limit=5&order=desc&order_by=observed_on&taxon_id=${this.taxonId}&place_id=${this.placeId}&per_page=${this.perPage}` // &fields=${this.fields}
    );
  }
}
