// src/app/components/home/popular-packages/popular-packages.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Data, Package } from '../../../services/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-popular-packages',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule],
  templateUrl: './popular-packages.html',
  styleUrls: ['./popular-packages.css'],
})
export class PopularPackages implements OnInit {
  packages: Package[] = [];

  constructor(private dataService: Data) {}

  ngOnInit() {
    // Subscribe to getPackages observable
    this.dataService.getPackages().subscribe({
      next: (data) => {
        this.packages = data;
      },
      error: (err) => {
        console.error('Failed to fetch packages', err);
      },
    });
  }
}
