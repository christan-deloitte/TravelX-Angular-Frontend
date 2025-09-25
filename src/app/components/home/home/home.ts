import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// Import your subcomponents
import { Carousel } from '../carousel/carousel';
import { PopularPackages } from '../popular-packages/popular-packages';
import { CustomerReview } from '../customer-review/customer-review';
import { Newsletter } from '../newsletter/newsletter';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, Carousel, PopularPackages, CustomerReview, Newsletter],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {}
