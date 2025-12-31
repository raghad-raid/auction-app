import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuctionService } from '../../services/auction.service';
import { CommonModule } from '@angular/common';
import { SavedService } from '../../services/saved.service';
import { BidsService } from '../../services/bids.service';
import { FormsModule } from '@angular/forms';
import { PurchasedService } from '../../services/purchased.service';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  userBid!: number;

  currentImageIndex = 0;
  productImages: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private auctionService: AuctionService,
    private savedService: SavedService,
    private bidsService: BidsService,
    private purchasedService:PurchasedService
  ) {}

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const id = Number(params.get('id'));
    this.product = this.auctionService.getProductById(id);

    if (this.product) {
      this.product.currentBid = Number(this.product.currentBid) || 0;
      this.product.startingBid = Number(this.product.startingBid) || 0;

      //Load currentBid from LocalStorage
      const currentBids = JSON.parse(localStorage.getItem('currentBids') || '{}');
      if (currentBids[this.product.id] !== undefined) {
        this.product.currentBid = Number(currentBids[this.product.id]);
      }

      // Load bids from LocalStorage
const storedBids = JSON.parse(localStorage.getItem('productBids') || '{}');
if (storedBids[this.product.id] !== undefined) {
  this.product.bids = storedBids[this.product.id];
} else {
  this.product.bids = Number(this.product.bids) || 0;
}
    }

    // تجهيز الصور (multiple images or fallback)
   this.productImages = this.product.images?.length
     ? this.product.images
     : [this.product.image];
      this.currentImageIndex = 0;
  });
}
  toggleLike(product: any) {
    this.savedService.toggleSave(product);
  }

  isLiked(product: any) {
    return this.savedService.isSaved(product.id);
  }

  placeBid() {
  if (!this.product) return;
  if (!this.userBid || this.userBid <= 0) return;

  const bidAmount = Number(this.userBid);
  const buyNowPrice = this.toNumber(this.product.buyNow);

  if (bidAmount >= buyNowPrice) {
    alert('❌ Bid must be lower than Buy Now price');
    return;
  }

  // Save the product under Products I Bid On
  this.bidsService.addBid(this.product, bidAmount);

  // Increase the number of bids
  this.product.bids += 1;

  // Save the number in LocalStorage
  const storedBids = JSON.parse(localStorage.getItem('productBids') || '{}');
  storedBids[this.product.id] = this.product.bids;
  localStorage.setItem('productBids', JSON.stringify(storedBids));

  // Reset field
  this.userBid = 0;
}
nextImage() {
  if (this.currentImageIndex < this.productImages.length - 1) {
    this.currentImageIndex++;
  } else {
    this.currentImageIndex = 0; // It goes back to the beginning
  }
}

prevImage() {
  if (this.currentImageIndex > 0) {
    this.currentImageIndex--;
  } else {
    this.currentImageIndex = this.productImages.length - 1; // It goes to the end
  }
}

//Function to convert price (because buyNow is text)
toNumber(value: any): number {
  if (!value) return 0;
  return Number(value.toString().replace(/,/g, ''));
}

buyNow(){
  if(!this.product) return;
   
  const buyNowPrice= Number(String(this.product.buyNow).replace(',',''));

    // If currentBid is less than Buy Now → clear Buy Now
    if(this.product.currentBid < buyNowPrice){
      this.product.currentBid = buyNowPrice; 
    }

    // save the currentBid
    const currentBids = JSON.parse(localStorage.getItem('currentBids') || '{}');
    currentBids[this.product.id] = this.product.currentBid;
    localStorage.setItem('currentBids' , JSON.stringify(currentBids));

      // add it to the Purchased Items
      this.purchasedService.addPurchased(this.product);
      alert('✅ Product purchased successfully!');
}
}
