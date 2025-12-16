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
export class HomeComponent  {
}

