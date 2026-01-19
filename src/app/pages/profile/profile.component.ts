import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SavedService } from '../../services/saved.service';
import { BidsService } from '../../services/bids.service';
import { PurchasedService } from '../../services/purchased.service';
import { AuctionService } from '../../services/auction.service';
import { Product } from '../../products/products.model';

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
  myProducts:Product[]=[];
  currentUserId=1;

  constructor(
    private savedService: SavedService,
    private bidsService: BidsService,
    private purchasedService:PurchasedService,
    private auctionService:AuctionService
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
    this.loadMyProducts();
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
  const currentBids = JSON.parse(localStorage.getItem('currentBids') || '{}');

  this.bidProducts = this.bidsService.getBids().map((item: any) => ({
    ...item,
    currentBid: currentBids[item.id] ?? item.myBid
  }));
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
  loadMyProducts(){
    const allProducts= this.auctionService.getAllProducts();
    this.myProducts=allProducts.filter(
      product => product.seller === 'Current User'
    );
  }

  deleteProduct(productId: number) {
  if (!confirm('Are you sure you want to delete this product?')) return;

  this.auctionService.deleteProduct(productId);
  this.loadMyProducts(); 
}

}
