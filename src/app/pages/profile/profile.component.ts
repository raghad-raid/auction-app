import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SavedService } from '../../services/saved.service';
import { BidsService } from '../../services/bids.service';
import { PurchasedService } from '../../services/purchased.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  bidProducts: any[] = [];
  activeSection: string | null = null;
  purchasedItems: any[] = [];

  constructor(
    private savedService: SavedService,
    private bidsService: BidsService,
    private purchasedService:PurchasedService
  ) {}

  user = {
    name: 'Rag Raid',
    email: 'raghadr@gmail.com'
  };

  stats = {
    won: 12
  };

  ngOnInit(): void {
    this.loadBids(); 
    this.loadPurchased();
  }
  /* Open/close page sections With Products I Bid On always reloaded*/
  toggle(section: string) {
    this.activeSection =
      this.activeSection === section ? null : section;

    if (section === 'bids') {
      this.loadBids(); 
    }
  }

  /* Replay bids from LocalStorage With a new reference created to force Angular to update */
  loadBids() {
    this.bidProducts = [...this.bidsService.getBids()];
  }

  /* The number of products that the user has bid on */
  get activeBidsCount() {
    return this.bidProducts.length;
  }

  /* Number of saved products*/
  get savedCount() {
    return this.savedService.getSavedCount();
  }
  loadPurchased(){
    this.purchasedItems = this.purchasedService.getPurchased();
  }
}
