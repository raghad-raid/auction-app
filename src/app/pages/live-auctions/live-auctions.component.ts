import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuctionService } from '../../services/auction.service';
import { SavedService } from '../../services/saved.service';
@Component({
  selector: 'app-live-auctions',
  imports: [CommonModule,RouterModule],
  templateUrl: './live-auctions.component.html',
  styleUrl: './live-auctions.component.css'
})
export class LiveAuctionsComponent implements OnInit{

 items:any[]=[]; 
 allItems:any[]=[];
 selectedCategory='All';

 ngOnInit(): void {
 this.allItems=this.auctionService.getLiveAndHighlights();
 this.items=this.allItems;
 this.selectedCategory='All';
 
  }

 constructor(private router: Router,
  private auctionService:AuctionService,
  private savedService :SavedService) {}

 goToDetails(item: any) {
  this.router.navigate(['/product-details', item.id]);
}

 toggleLike(product: any) {
  this.savedService.toggleSave(product);
}

isLiked(product: any) {
  return this.savedService.isSaved(product.id);
}

filterByCategory(category:string){
this.selectedCategory=category;

if(category==='All'){
  this.items=this.allItems;
}else{
  this.items=this.allItems.filter(
    item => item.category===category
  );
}
}
}


