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

    if (!this.product) return;

    this.product.startingBid = Number(this.product.startingBid) || 0;

    // currentBid ONLY from localStorage
    const currentBids = JSON.parse(localStorage.getItem('currentBids') || '{}');
  

    // bids count
    const storedBids = JSON.parse(localStorage.getItem('productBids') || '{}');
    this.product.bids =
      storedBids[this.product.id] !== undefined
        ? storedBids[this.product.id]
        : 0;

    this.productImages = this.product.images?.length
      ? this.product.images
      : [this.product.image];
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
  const startingBid = Number(this.product.startingBid);
  const buyNowPrice = this.toNumber(this.product.buyNow);

  const currentBids = JSON.parse(localStorage.getItem('currentBids') || '{}');
  const currentBid = currentBids[this.product.id] || 0;

  const minAllowedBid =
    currentBid > 0 ? currentBid + 1 : startingBid;

  if (bidAmount < minAllowedBid) {
    alert(`❌ Minimum allowed bid is ${minAllowedBid}`);
    return;
  }

  if (bidAmount >= buyNowPrice) {
    alert('❌ Bid must be lower than Buy Now price');
    return;
  }

  currentBids[this.product.id] = bidAmount;
  localStorage.setItem('currentBids', JSON.stringify(currentBids));
  this.product.currentBid = bidAmount;

  const storedBids = JSON.parse(localStorage.getItem('productBids') || '{}');
  storedBids[this.product.id] = (storedBids[this.product.id] || 0) + 1;
  localStorage.setItem('productBids', JSON.stringify(storedBids));
  this.product.bids = storedBids[this.product.id];

  this.bidsService.addBid(
    { ...this.product }, // 
    bidAmount
  );

  this.userBid = 0;
}

nextImage() {
  if (this.currentImageIndex < this.productImages.length - 1) {
    this.currentImageIndex++;
  } else {
    this.currentImageIndex = 0; 
  }
}

prevImage() {
  if (this.currentImageIndex > 0) {
    this.currentImageIndex--;
  } else {
    this.currentImageIndex = this.productImages.length - 1; 
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
