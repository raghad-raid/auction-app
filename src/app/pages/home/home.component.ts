
// pages/home/home.component.ts
/*import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuctionService, Product } from '../../services/auction.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string = '';

  constructor(private auctionService: AuctionService) {}

  ngOnInit(): void {
    this.search('');
  }

  search(keyword: string) {
    const q = (keyword ?? '').trim();
    this.auctionService.getProducts(q).subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error('  we have an error  ', err);
        this.products = [];
      }
    });
  }
}*/

import { Component, OnInit } from '@angular/core';
import { AuctionService } from '../../services/auction.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AuctionListComponent } from './components/auction-list/auction-list.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { TodayHighlightsComponent } from "./components/today-highlights/today-highlights.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    HeroSectionComponent,
    AuctionListComponent,
    HowItWorksComponent, TodayHighlightsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  searchTerm: string = '';

  constructor(private auctionService: AuctionService) {}

  ngOnInit(): void {
    this.search('');
  }

  search(keyword: string) {
    this.auctionService.getProducts(keyword).subscribe(data => {
      this.products = data;
    });
  }
}

