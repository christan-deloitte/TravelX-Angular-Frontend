// src/app/components/home/customer-review/customer-review.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data, Testimonial } from '../../../services/data';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-customer-review',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './customer-review.html',
  styleUrls: ['./customer-review.css'],
})
export class CustomerReview implements OnInit {
  testimonials: Testimonial[] = [];

  constructor(private dataService: Data) {}

  ngOnInit() {
    // Subscribe to getTestimonials observabl
    this.dataService.getTestimonials().subscribe({
      next: (data) => (this.testimonials = data),
      error: (err) => console.error('Failed to fetch testimonials', err),
    });
  }
}
