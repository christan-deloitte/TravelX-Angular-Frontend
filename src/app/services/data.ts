// src/app/services/data.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Package {
  title: string;
  price: string;
  nights: string;
  rating: number;
  location: string;
  image: string; // <-- Added description
}

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  quote: string;
  initials: string;
}

@Injectable({
  providedIn: 'root',
})
export class Data {
  // Mock JSON URLs from dummyjson.com
  private packagesUrl = 'https://mocki.io/v1/a8a54950-f7a6-4ea4-ab33-b60ae27a9d72';
  private testimonialsUrl = 'https://dummyjson.com/c/6a1e-08b1-4a0c-b93e';

  constructor(private http: HttpClient) {}

  getPackages(): Observable<Package[]> {
    return this.http.get<Package[]>(this.packagesUrl);
  }

  getTestimonials(): Observable<Testimonial[]> {
    return this.http.get<Testimonial[]>(this.testimonialsUrl);
  }
}
